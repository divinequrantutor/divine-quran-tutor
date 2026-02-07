import { Link } from 'react-router-dom';
import { Star, CheckCircle, Users, Calendar, BookOpen, Award, Clock, Shield, GraduationCap, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function HomePage() {
  const phoneNumber = '61485519322';
  const whatsappMessage = encodeURIComponent('Assalam-o-Alaikum, I want a free trial class. Please guide me.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  const heroBackgroundImage = "url('https://images.unsplash.com/photo-1584286595398-a96fb3bb4d6a?auto=format&fit=crop&w=2000&q=80')";
  const tutorBackgroundImage = "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=80')";
  const ctaBackgroundImage = "url('https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=1800&q=80')";

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      text: 'The tutors are incredibly patient and knowledgeable. My daughter loves her classes and has made amazing progress in just 3 months.',
      rating: 5,
    },
    {
      name: 'Abdullah Khan',
      text: 'Flexible timing made it possible for me to learn despite my busy schedule. The teaching quality is exceptional.',
      rating: 5,
    },
    {
      name: 'Fatima Ali',
      text: 'My son was struggling with Tajweed, but his tutor has been wonderful. We can see real improvement in his recitation.',
      rating: 5,
    },
  ];

  const programs = [
    {
      id: 'noorani-qaida',
      title: 'Noorani Qaida',
      description: 'Perfect for beginners learning Arabic letters and pronunciation',
      icon: BookOpen,
      audience: 'Kids & Adults (Beginners)',
      outcomes: ['Master Arabic letters', 'Learn proper pronunciation', 'Build strong foundation'],
    },
    {
      id: 'nazra-quran',
      title: 'Nazra Quran',
      description: 'Develop fluent recitation with proper flow and rhythm',
      icon: GraduationCap,
      audience: 'Kids & Adults',
      outcomes: ['Fluent Quran reading', 'Improved confidence', 'Regular practice'],
    },
    {
      id: 'tajweed',
      title: 'Tajweed',
      description: 'Master the rules of correct Quranic pronunciation',
      icon: Award,
      audience: 'Intermediate & Advanced',
      outcomes: ['Learn all Tajweed rules', 'Perfect pronunciation', 'Beautiful recitation'],
    },
    {
      id: 'hifz-support',
      title: 'Hifz Support',
      description: 'Structured memorization program with revision support',
      icon: Star,
      audience: 'Committed Students',
      outcomes: ['Systematic memorization', 'Regular revision', 'Progress tracking'],
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Book Your Trial',
      description: 'Schedule a free trial class at your convenient time',
      icon: Calendar,
    },
    {
      number: '02',
      title: 'Get Matched',
      description: 'We match you with the perfect tutor based on your needs',
      icon: Users,
    },
    {
      number: '03',
      title: 'Start Learning',
      description: 'Begin your Quran learning journey with weekly classes',
      icon: BookOpen,
    },
  ];

  const faqs = [
    {
      question: 'What timings are available?',
      answer: 'We offer flexible scheduling with slots available throughout the day to accommodate different time zones.',
    },
    {
      question: 'How does the trial class work?',
      answer: 'The trial class is completely free. We assess your current level and discuss your learning goals to match you with the right tutor.',
    },
    {
      question: 'Can I request a female tutor?',
      answer: 'Yes, we have qualified female tutors available. Please specify this preference when booking your trial.',
    },
    {
      question: 'What platform do you use for classes?',
      answer: 'We use Zoom or Skype for our live one-on-one classes, both are user-friendly and reliable.',
    },
    {
      question: 'Can I reschedule classes?',
      answer: 'Yes, you can reschedule classes with 24 hours notice. We understand life gets busy and offer flexibility.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 sm:py-28">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center opacity-20"
            style={{ backgroundImage: heroBackgroundImage }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Learn Quran Online with Qualified Tutors
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              1:1 live classes for kids & adults • Flexible timings • Tajweed-focused learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
                <Users className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Female Tutors Available</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
                <Clock className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Flexible Schedule</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Free Trial Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-lg text-muted-foreground">Parents love our teaching approach</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-sm border border-border"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <p className="font-medium text-foreground">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Trusted by families worldwide 🌍
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the program that fits your learning goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <program.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-medium text-primary mb-2">WHO IT'S FOR:</p>
                  <p className="text-sm text-muted-foreground">{program.audience}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-medium text-primary mb-2">KEY OUTCOMES:</p>
                  <ul className="space-y-1">
                    {program.outcomes.map((outcome, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={`/programs#${program.id}`}
                  className="text-sm text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your Quran learning journey in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center relative"
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-border hidden md:block" style={{ display: index === 2 ? 'none' : 'block' }} />
                <div className="text-4xl font-bold text-accent mb-3">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutors & Safety */}
      <section className="relative overflow-hidden py-20 bg-background">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center opacity-10"
            style={{ backgroundImage: tutorBackgroundImage }}
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Experienced & Qualified Tutors
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our tutors are carefully vetted and trained to provide the highest quality Quran education in a safe, supportive environment.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Thoroughly Vetted</p>
                    <p className="text-sm text-muted-foreground">All tutors undergo background checks and qualification verification</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Multilingual</p>
                    <p className="text-sm text-muted-foreground">Tutors speak Urdu, English, and Arabic fluently</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Female Tutors Available</p>
                    <p className="text-sm text-muted-foreground">Request a female tutor for your family's comfort</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Kid-Friendly Environment</p>
                    <p className="text-sm text-muted-foreground">We maintain a safe, nurturing learning space for all students</p>
                  </div>
                </li>
              </ul>
              <Link
                to="/tutors"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                Meet our tutors
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-6 rounded-xl text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">5+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">100+</p>
                    <p className="text-sm text-muted-foreground">Students Taught</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl text-center">
                    <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">1000+</p>
                    <p className="text-sm text-muted-foreground">Classes Completed</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl text-center">
                    <Star className="h-8 w-8 text-accent fill-accent mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">5.0</p>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Flexible Pricing Plans</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a plan that fits your schedule and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Starter', classes: '2 classes/week', features: ['1-on-1 sessions', 'Flexible timing', 'Progress reports', 'WhatsApp support'] },
              { name: 'Standard', classes: '3 classes/week', features: ['1-on-1 sessions', 'Flexible timing', 'Progress reports', 'WhatsApp support', 'Priority scheduling'], popular: true },
              { name: 'Intensive', classes: '5 classes/week', features: ['1-on-1 sessions', 'Flexible timing', 'Progress reports', 'WhatsApp support', 'Priority scheduling', 'Weekend classes'] },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-background p-8 rounded-xl shadow-md border-2 ${
                  plan.popular ? 'border-accent' : 'border-border'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-lg text-primary mb-6">{plan.classes}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/pricing"
                  className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/pricing" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
              See full pricing details
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Quick answers to common questions</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/faq" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
              View all FAQs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center opacity-20"
            style={{ backgroundImage: ctaBackgroundImage }}
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Start Your Quran Learning Journey Today
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join families worldwide who trust us with their Quran education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
