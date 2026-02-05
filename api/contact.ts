import type { VercelRequest, VercelResponse } from '@vercel/node';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import nodemailer from 'nodemailer';

function getEnv(name: string, required = true): string | undefined {
  const value = process.env[name];
  if (required && (!value || value.trim().length === 0)) {
    throw new Error(`Missing required env: ${name}`);
  }
  return value;
}

function sanitizePhone(phone: string): string {
  return phone.replace(/\s+/g, '').replace(/^\+/, '');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim();
    const phone = String(body?.phone ?? '').trim();
    const program = String(body?.program ?? '').trim();
    const preferredTime = String(body?.preferredTime ?? '').trim();
    const message = String(body?.message ?? '').trim();

    if (!name || !email || !phone || !program) {
      return res.status(400).json({ ok: false, error: 'Missing required fields.' });
    }

    // Firebase Admin init
    if (!getApps().length) {
      const projectId = getEnv('FIREBASE_PROJECT_ID');
      const clientEmail = getEnv('FIREBASE_CLIENT_EMAIL');
      const privateKey = getEnv('FIREBASE_PRIVATE_KEY')?.replace(/\\n/g, '\n');
      initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });
    }

    const db = getFirestore();
    await db.collection('leads').add({
      name,
      email,
      phone,
      program,
      preferredTime,
      message,
      createdAt: new Date().toISOString(),
      source: 'website',
    });

    // Email via Gmail SMTP
    const smtpUser = getEnv('SMTP_USER');
    const smtpPass = getEnv('SMTP_PASS');
    const adminEmail = getEnv('ADMIN_EMAIL');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const emailSubject = `New Lead: ${name}`;
    const emailText = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Program: ${program}`,
      `Preferred Time: ${preferredTime || 'N/A'}`,
      `Message: ${message || 'N/A'}`,
    ].join('\n');

    await transporter.sendMail({
      from: `Divine Quran Tutor <${smtpUser}>`,
      to: adminEmail,
      subject: emailSubject,
      text: emailText,
    });

    // WhatsApp via Meta Cloud API
    const whatsappToken = getEnv('WHATSAPP_ACCESS_TOKEN', false);
    const whatsappPhoneNumberId = getEnv('WHATSAPP_PHONE_NUMBER_ID', false);
    const whatsappTo = sanitizePhone(getEnv('WHATSAPP_ADMIN_NUMBER', false) || '');
    const templateName = process.env.WHATSAPP_TEMPLATE_NAME;
    const templateLanguage = process.env.WHATSAPP_TEMPLATE_LANGUAGE || 'en_US';

    if (whatsappToken && whatsappPhoneNumberId && whatsappTo) {
      const whatsappUrl = `https://graph.facebook.com/v19.0/${whatsappPhoneNumberId}/messages`;
      const payload = templateName
        ? {
            messaging_product: 'whatsapp',
            to: whatsappTo,
            type: 'template',
            template: {
              name: templateName,
              language: { code: templateLanguage },
              components: [
                {
                  type: 'body',
                  parameters: [
                    { type: 'text', text: name },
                    { type: 'text', text: phone },
                    { type: 'text', text: program },
                  ],
                },
              ],
            },
          }
        : {
            messaging_product: 'whatsapp',
            to: whatsappTo,
            type: 'text',
            text: {
              body: `New lead: ${name} | ${phone} | ${program} | ${email}`,
            },
          };

      await fetch(whatsappUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${whatsappToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Server error';
    return res.status(500).json({ ok: false, error: message });
  }
}
