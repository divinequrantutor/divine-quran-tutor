import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'How do I book a trial class?',
          answer: 'You can book a trial class through our contact form, WhatsApp, or by calling us directly. Simply provide your preferred time, and we\'ll schedule a free 30-minute trial session with a suitable tutor.',
        },
        {
          question: 'Is the trial class really free?',
          answer: 'Yes, absolutely! The trial class is completely free with no obligations. It\'s an opportunity for you to experience our teaching quality and see if we\'re the right fit for your learning goals.',
        },
        {
          question: 'What do I need for online classes?',
          answer: 'You\'ll need a computer, tablet, or smartphone with a stable internet connection, and Zoom or Skype installed. We recommend having a Quran (physical or digital) for reference during classes.',
        },
        {
          question: 'Can adults join these classes?',
          answer: 'Absolutely! Our programs are designed for both children and adults. We have many adult students who are either learning for the first time or improving their existing Quran recitation.',
        },
      ],
    },
    {
      title: 'Classes & Scheduling',
      faqs: [
        {
          question: 'What timings are available?',
          answer: 'We offer flexible scheduling throughout the day to accommodate different time zones. During the trial class, we\'ll work with you to find a consistent time slot that works for your schedule.',
        },
        {
          question: 'How long are the classes?',
          answer: 'Regular classes are typically 30-45 minutes for children and 45-60 minutes for adults and advanced students. The duration can be adjusted based on the student\'s age and attention span.',
        },
        {
          question: 'Can I reschedule a class?',
          answer: 'Yes, you can reschedule classes with at least 24 hours notice. We understand that life gets busy, and we try to be as flexible as possible with our students.',
        },
        {
          question: 'What if I miss a class without notice?',
          answer: 'We understand emergencies happen. However, classes missed without 24-hour notice are generally not rescheduled, as the tutor has already allocated that time. Please contact us as soon as possible if you need to cancel.',
        },
        {
          question: 'Do you offer weekend classes?',
          answer: 'Yes, we offer classes seven days a week, including weekends. This is particularly helpful for students who have busy weekday schedules.',
        },
      ],
    },
    {
      title: 'Tutors & Teaching',
      faqs: [
        {
          question: 'Can I request a female tutor?',
          answer: 'Yes, we have qualified female tutors available. Please specify this preference when booking your trial class, and we\'ll ensure you\'re matched with a female tutor.',
        },
        {
          question: 'Are tutors native Arabic speakers?',
          answer: 'Our tutors are either native Arabic speakers or have achieved fluency with proper Tajweed training and certification. All tutors are fluent in Arabic, English, and most also speak Urdu.',
        },
        {
          question: 'How are tutors selected and trained?',
          answer: 'All tutors undergo a rigorous selection process including credential verification, background checks, and teaching demonstrations. They also receive ongoing training to maintain high teaching standards.',
        },
        {
          question: 'Can I change my tutor?',
          answer: 'Yes, if you feel the match isn\'t quite right, we\'ll assign you a different tutor at no additional cost. Your learning comfort and satisfaction are our priorities.',
        },
        {
          question: 'Will I have the same tutor for all classes?',
          answer: 'Yes, you\'ll have a dedicated tutor for consistency. However, if your tutor is unavailable due to illness or emergency, we\'ll arrange a substitute who\'s familiar with your progress.',
        },
      ],
    },
    {
      title: 'Programs & Curriculum',
      faqs: [
        {
          question: 'Which program should I choose?',
          answer: 'This depends on your current level. Complete beginners should start with Noorani Qaida. If you can read Arabic, Nazra Quran or Tajweed might be appropriate. During the trial class, we\'ll assess your level and recommend the best program.',
        },
        {
          question: 'Can I switch between programs?',
          answer: 'Yes, you can progress from one program to another. Most students start with Noorani Qaida, move to Nazra Quran, and then advance to Tajweed or Hifz.',
        },
        {
          question: 'How long does each program take?',
          answer: 'It varies by individual. Noorani Qaida typically takes 3-6 months, Nazra Quran can take 12-24 months, Tajweed 6-12 months, and Hifz varies greatly (2-5 years) depending on the memorization goal and pace.',
        },
        {
          question: 'Do you provide learning materials?',
          answer: 'Yes, we provide digital learning materials and resources. You may want to have a physical Quran for your own use, but all teaching materials are included in the tuition.',
        },
        {
          question: 'Will there be homework?',
          answer: 'Yes, practice between classes is essential for progress. Tutors assign appropriate homework and practice tasks, but these are manageable and designed to reinforce what was learned in class.',
        },
      ],
    },
    {
      title: 'Payment & Policies',
      faqs: [
        {
          question: 'How much do classes cost?',
          answer: 'Pricing varies based on the number of classes per week and your location/currency. Please contact us via WhatsApp or the contact form for specific pricing information.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept bank transfers, PayPal, and other secure online payment methods. Payment details will be provided after your trial class when you decide to enroll.',
        },
        {
          question: 'Do you offer family discounts?',
          answer: 'Yes! We offer discounts when multiple students from the same family enroll. Please contact us to discuss family package options.',
        },
        {
          question: 'Is there a long-term contract?',
          answer: 'No, we offer month-to-month enrollment with no long-term contracts. You can cancel anytime with one month\'s notice.',
        },
        {
          question: 'What is your refund policy?',
          answer: 'Please see our detailed Refund Policy page for complete information. We\'re committed to student satisfaction and handle refund requests fairly and transparently.',
        },
      ],
    },
    {
      title: 'Technical & Platform',
      faqs: [
        {
          question: 'What platform do you use for classes?',
          answer: 'We primarily use Zoom for online classes, though Skype is also available if you prefer. Both platforms are user-friendly, secure, and provide high-quality video and audio.',
        },
        {
          question: 'What if I have technical issues during class?',
          answer: 'If technical issues arise, contact your tutor immediately via WhatsApp. We\'ll either troubleshoot quickly or reschedule the class if the issue can\'t be resolved promptly.',
        },
        {
          question: 'Are classes recorded?',
          answer: 'Classes can be recorded upon request for your personal review and practice. Recordings are for your private use only and remain available for a limited time.',
        },
        {
          question: 'Is my child safe in online classes?',
          answer: 'Yes, we maintain a safe learning environment. Classes are one-on-one with vetted tutors, and we encourage parents to be present during children\'s classes. All tutors undergo background checks.',
        },
      ],
    },
    {
      title: 'Progress & Assessment',
      faqs: [
        {
          question: 'How do you track progress?',
          answer: 'Tutors maintain detailed records of what\'s covered in each class. You\'ll receive regular progress reports (frequency depends on your plan) showing achievements and areas for improvement.',
        },
        {
          question: 'Will I receive a certificate?',
          answer: 'Yes, upon successful completion of a program, you\'ll receive a certificate of completion. For advanced students, Ijazah certification may be available through qualified tutors.',
        },
        {
          question: 'How do I know if my child is improving?',
          answer: 'Regular progress reports, ongoing communication with tutors, and periodic assessments help you track your child\'s development. You\'re also welcome to sit in on classes to observe directly.',
        },
      ],
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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our programs, classes, and policies
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {categoryIndex + 1}
                  </span>
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div
                        key={faqIndex}
                        className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                        >
                          <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                          <ChevronDown
                            className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-6 pb-4"
                          >
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
            >
              Contact Us
            </a>
            <a
              href={`https://wa.me/61485519322?text=${encodeURIComponent('Assalam-o-Alaikum, I have a question about your programs.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
