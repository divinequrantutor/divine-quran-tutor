import { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    preferredTime: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || 'Unable to submit. Please try again.');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        program: '',
        preferredTime: '',
        message: '',
      });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to submit. Please try again.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const phoneNumber = '61485519322';
  const whatsappMessage = encodeURIComponent('Assalam-o-Alaikum, I want a free trial class. Please guide me.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your Quran learning journey? Book a free trial class today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Book Your Free Trial</h2>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your request. Our team will contact you within 24 hours to schedule your free trial class.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number (with country code) *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+1 234 567 8900"
                      />
                    </div>

                    <div>
                      <label htmlFor="program" className="block text-sm font-medium text-foreground mb-2">
                        Program Interest *
                      </label>
                      <select
                        id="program"
                        name="program"
                        required
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a program</option>
                        <option value="noorani-qaida">Noorani Qaida (Beginner)</option>
                        <option value="nazra-quran">Nazra Quran (Reading)</option>
                        <option value="tajweed">Tajweed (Pronunciation)</option>
                        <option value="hifz">Hifz (Memorization)</option>
                        <option value="not-sure">Not Sure / Need Guidance</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Class Time
                      </label>
                      <input
                        type="text"
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., Weekday evenings, Weekend mornings"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Additional Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us about your learning goals, any special requirements, or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center shadow-lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>

                    {submitError ? (
                      <p className="text-sm text-red-600 text-center">{submitError}</p>
                    ) : null}

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our Privacy Policy
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Quick Contact</h2>
                <div className="space-y-6">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-4 bg-[#25D366]/10 rounded-xl hover:bg-[#25D366]/20 transition-colors group"
                  >
                    <MessageCircle className="h-6 w-6 text-[#25D366] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-[#25D366]">
                        WhatsApp (Recommended)
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">Get instant response</p>
                      <p className="text-sm font-medium text-primary">+61 485 519 322</p>
                    </div>
                  </a>

                  <div className="flex items-start p-4 bg-secondary rounded-xl">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground mb-2">We'll respond within 24 hours</p>
                      <a
                        href="mailto:info@divinequrantutors.com"
                        className="text-sm font-medium text-primary hover:text-primary/80"
                      >
                        info@divinequrantutors.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-secondary rounded-xl">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground mb-2">Call us directly</p>
                      <a
                        href="tel:+61485519322"
                        className="text-sm font-medium text-primary hover:text-primary/80"
                      >
                        +61 485 519 322
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Response Time</h3>
                <p className="text-muted-foreground mb-4">
                  We're here to help you start your Quran learning journey. Our team typically responds to inquiries within:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    WhatsApp: Within 1-2 hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Email: Within 24 hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Contact Form: Within 24 hours
                  </li>
                </ul>
              </div>

              {/* Location */}
              <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Serving Students Worldwide</h3>
                    <p className="text-sm text-muted-foreground">
                      We provide online Quran classes to students across the globe. Our flexible scheduling accommodates all time zones.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Prefer to Chat Directly?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Message us on WhatsApp for instant assistance and faster trial class booking
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors shadow-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Open WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
