
  # Premium Marketing Website

  This is a code bundle for Premium Marketing Website. The original project is available at https://www.figma.com/design/KwraoEALOojE4ovV4mFeG1/Premium-Marketing-Website.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Backend setup (Vercel)

This project includes a Vercel Serverless Function at `api/contact.ts` for form submissions.

### Required environment variables

Copy `.env.example` to `.env.local` for local development and set these in Vercel:

- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `SMTP_USER`
- `SMTP_PASS`
- `ADMIN_EMAIL`
- `WHATSAPP_ACCESS_TOKEN`
- `WHATSAPP_PHONE_NUMBER_ID`
- `WHATSAPP_ADMIN_NUMBER`

Optional (recommended for WhatsApp business-initiated messages):

- `WHATSAPP_TEMPLATE_NAME`
- `WHATSAPP_TEMPLATE_LANGUAGE`

### Approved WhatsApp Template

Use this template in Meta WhatsApp Cloud API:

Name: `new_lead_alert`  
Language: `en_US`  
Body:
```
New lead submitted.
Name: {{1}}
Phone: {{2}}
Program: {{3}}
```

Then set:
- `WHATSAPP_TEMPLATE_NAME=new_lead_alert`
- `WHATSAPP_TEMPLATE_LANGUAGE=en_US`

### Notes

- Use a Gmail App Password for `SMTP_PASS`.
- WhatsApp Cloud API may require a pre-approved message template for business-initiated messages.
  
