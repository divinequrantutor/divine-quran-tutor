import { CheckCircle, Star, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function PricingPage() {
  const phoneNumber = '61485519322';
  const whatsappMessage = encodeURIComponent('Assalam-o-Alaikum, I want to inquire about pricing plans.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  const plans = [
    {
      name: 'Starter',
      classes: '2 Classes/Week',
      description: 'Perfect for beginners or those with busy schedules',
      features: [
        '1-on-1 live sessions',
        'Flexible timing',
        'WhatsApp support',
        'Progress reports (monthly)',
        'Free trial class',
        'Lesson recordings available',
      ],
      popular: false,
    },
    {
      name: 'Standard',
      classes: '3 Classes/Week',
      description: 'Most popular choice for steady progress',
      features: [
        '1-on-1 live sessions',
        'Flexible timing',
        'WhatsApp support',
        'Progress reports (bi-weekly)',
        'Free trial class',
        'Lesson recordings available',
        'Priority scheduling',
        'Customized learning plan',
      ],
      popular: true,
    },
    {
      name: 'Intensive',
      classes: '5 Classes/Week',
      description: 'Best for Hifz and accelerated learning',
      features: [
        '1-on-1 live sessions',
        'Flexible timing',
        'WhatsApp support',
        'Progress reports (weekly)',
        'Free trial class',
        'Lesson recordings available',
        'Priority scheduling',
        'Customized learning plan',
        'Weekend classes included',
        'Dedicated tutor support',
      ],
      popular: false,
    },
  ];

  const included = [
    'One-on-one attention with dedicated tutor',
    'Customized learning pace for each student',
    'Classes via Zoom or Skype (your preference)',
    'Digital learning materials included',
    'Regular progress assessments',
    'Parent-teacher communication',
    'Flexible rescheduling (24hr notice)',
    'Safe and secure online environment',
  ];

  const policies = [
    {
      title: 'Free Trial',
      description: 'Try one class completely free before committing to any plan. No credit card required.',
    },
    {
      title: 'Flexible Payment',
      description: 'Pay monthly with no long-term contracts. Cancel anytime with one month notice.',
    },
    {
      title: 'Rescheduling',
      description: 'Reschedule classes with 24 hours notice. Unused classes roll over to next week.',
    },
    {
      title: 'Satisfaction Guarantee',
      description: 'Not happy with your tutor? We\'ll match you with a different one at no extra cost.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Transparent Pricing</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a plan that fits your schedule and budget. All plans include our quality guarantee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-card rounded-2xl p-8 shadow-lg border-2 ${
                  plan.popular ? 'border-accent' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-1.5 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{plan.classes}</div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-8 text-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact for pricing
                  </a>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg transition-colors ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  Start Free Trial
                </a>
              </motion.div>
            ))}
          </div>

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 sm:p-12 shadow-lg border border-border"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              What's Included in All Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {included.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Policies</h2>
            <p className="text-lg text-muted-foreground">
              Clear, fair policies that put students first
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
                  <Star className="h-5 w-5 text-accent mr-2" />
                  {policy.title}
                </h3>
                <p className="text-muted-foreground">{policy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Pricing FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How much does each plan cost?',
                a: 'Pricing varies based on your location and currency. Please contact us via WhatsApp or the contact form for exact pricing in your currency.',
              },
              {
                q: 'Are there any hidden fees?',
                a: 'No hidden fees whatsoever. The price quoted includes everything - tutoring, materials, and support.',
              },
              {
                q: 'Can I switch plans?',
                a: 'Yes, you can upgrade or downgrade your plan anytime. Changes take effect from the next billing cycle.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept bank transfers, PayPal, and other secure online payment methods. Details provided upon enrollment.',
              },
              {
                q: 'Is there a family discount?',
                a: 'Yes! We offer discounts for multiple students from the same family. Contact us for details.',
              },
              {
                q: 'What is your refund policy?',
                a: 'Please see our full refund policy page for details. We\'re committed to student satisfaction.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Book your free trial class today - no payment required
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors shadow-lg"
            >
              Start Free Trial
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors shadow-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
