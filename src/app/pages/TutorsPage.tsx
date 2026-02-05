import { Award, Globe, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function TutorsPage() {
  const tutors = [
    {
      name: 'Ustadha Aisha',
      specialty: 'Noorani Qaida & Nazra',
      experience: '8 years',
      languages: 'English, Urdu, Arabic',
      education: 'Certified Quran Teacher',
      description: 'Patient and experienced in teaching children and beginners.',
      gender: 'Female',
    },
    {
      name: 'Sheikh Muhammad',
      specialty: 'Tajweed & Hifz',
      experience: '12 years',
      languages: 'English, Urdu, Arabic',
      education: 'Ijazah in Quran Recitation',
      description: 'Specializes in advanced Tajweed and memorization techniques.',
      gender: 'Male',
    },
    {
      name: 'Ustadha Fatima',
      specialty: 'Kids & Adult Beginners',
      experience: '6 years',
      languages: 'English, Urdu',
      education: 'Certified Quran Teacher',
      description: 'Warm and encouraging teaching style, especially effective with children.',
      gender: 'Female',
    },
    {
      name: 'Sheikh Abdullah',
      specialty: 'Tajweed & Nazra',
      experience: '10 years',
      languages: 'English, Arabic',
      education: 'Graduate of Islamic University',
      description: 'Focuses on proper pronunciation and beautiful recitation.',
      gender: 'Male',
    },
    {
      name: 'Ustadha Zainab',
      specialty: 'Hifz & Revision',
      experience: '7 years',
      languages: 'English, Urdu, Arabic',
      education: 'Hafiza with Teaching Certification',
      description: 'Expert in systematic memorization and long-term retention strategies.',
      gender: 'Female',
    },
    {
      name: 'Sheikh Ibrahim',
      specialty: 'All Levels',
      experience: '15 years',
      languages: 'English, Urdu, Arabic',
      education: 'Master\'s in Islamic Studies',
      description: 'Versatile teacher with extensive experience across all program levels.',
      gender: 'Male',
    },
  ];

  const qualities = [
    {
      title: 'Qualified & Certified',
      description: 'All our tutors hold recognized Quran teaching certifications and have proven teaching experience.',
    },
    {
      title: 'Native or Fluent Arabic',
      description: 'Tutors are either native Arabic speakers or have achieved fluency with proper Tajweed training.',
    },
    {
      title: 'Background Verified',
      description: 'Every tutor undergoes thorough background checks and credential verification.',
    },
    {
      title: 'Continuous Training',
      description: 'Regular training sessions to maintain high teaching standards and learn new pedagogical approaches.',
    },
    {
      title: 'Student-Centered',
      description: 'Patient, understanding, and committed to creating a positive learning environment.',
    },
    {
      title: 'Multilingual',
      description: 'Tutors speak English, Urdu, and Arabic to accommodate diverse student backgrounds.',
    },
  ];

  const phoneNumber = '61485519322';
  const whatsappMessage = encodeURIComponent('Assalam-o-Alaikum, I want to inquire about tutor selection.');
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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Meet Our Tutors</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Qualified, experienced, and dedicated teachers committed to your Quran learning success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tutor Qualities */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Our Tutors Excel</h2>
            <p className="text-lg text-muted-foreground">
              We maintain the highest standards in tutor selection and training
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualities.map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl border border-border"
              >
                <Award className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{quality.title}</h3>
                <p className="text-sm text-muted-foreground">{quality.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutor Profiles */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Teaching Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet some of our experienced Quran tutors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((tutor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-3xl text-primary-foreground">
                      {tutor.gender === 'Female' ? '👩‍🏫' : '👨‍🏫'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{tutor.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{tutor.specialty}</p>
                  <p className="text-sm text-muted-foreground mb-4">{tutor.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Award className="h-4 w-4 text-primary mr-2" />
                      <span className="text-muted-foreground">{tutor.education}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-muted-foreground font-medium mr-2">Experience:</span>
                      <span className="text-muted-foreground">{tutor.experience}</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <Globe className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span className="text-muted-foreground">{tutor.languages}</span>
                    </div>
                  </div>
                  {tutor.gender === 'Female' && (
                    <div className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground text-xs rounded-full">
                      Female Tutor
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Matching Process */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Finding Your Perfect Match</h2>
            <p className="text-lg text-muted-foreground">
              We carefully match students with tutors based on learning needs and preferences
            </p>
          </div>
          <div className="bg-background rounded-xl p-8 border border-border">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. Tell Us Your Needs</h3>
                <p className="text-muted-foreground">
                  Share your learning goals, current level, and any specific requirements (like gender preference).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. We Recommend a Tutor</h3>
                <p className="text-muted-foreground">
                  Based on your needs, we carefully select a tutor whose expertise and teaching style match your requirements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3. Trial Class</h3>
                <p className="text-muted-foreground">
                  Meet your tutor in a free trial class. This helps you experience their teaching style firsthand.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">4. Start Learning</h3>
                <p className="text-muted-foreground">
                  If you're happy with the match, begin your regular classes. Not satisfied? We'll find you another tutor at no cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Meet Your Tutor?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Book a free trial class and experience our teaching quality firsthand
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
