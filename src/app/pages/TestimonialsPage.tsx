import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sarah Ahmed',
      location: 'United Kingdom',
      program: 'Noorani Qaida',
      rating: 5,
      text: 'My 7-year-old daughter was struggling to learn Arabic letters, but after just 2 months with Divine Quran Tutors, she can read simple words confidently! The tutor is so patient and makes learning fun.',
      date: 'January 2026',
    },
    {
      name: 'Abdullah Khan',
      location: 'United States',
      program: 'Tajweed Course',
      rating: 5,
      text: 'As a working professional, I needed flexible timings. The tutors accommodate my busy schedule and the quality of teaching is exceptional. My recitation has improved tremendously.',
      date: 'December 2025',
    },
    {
      name: 'Fatima Ali',
      location: 'Canada',
      program: 'Nazra Quran',
      rating: 5,
      text: 'I was looking for a female tutor for my daughter, and they matched us perfectly. The tutor is knowledgeable, kind, and my daughter looks forward to every class.',
      date: 'November 2025',
    },
    {
      name: 'Muhammad Hassan',
      location: 'Australia',
      program: 'Hifz Support',
      rating: 5,
      text: 'My son is memorizing Quran and needed regular revision support. The structured approach and consistent feedback have been invaluable. Highly recommended!',
      date: 'January 2026',
    },
    {
      name: 'Aisha Rahman',
      location: 'United Kingdom',
      program: 'Tajweed Course',
      rating: 5,
      text: 'I never thought I could learn proper Tajweed at my age (45), but the tutor made it so accessible. I can now recite with confidence and understand the rules clearly.',
      date: 'October 2025',
    },
    {
      name: 'Omar Siddiqui',
      location: 'United Arab Emirates',
      program: 'Nazra Quran',
      rating: 5,
      text: 'The trial class was amazing and helped us decide immediately. Three months in, my kids are reading Quran fluently. The progress tracking keeps us motivated.',
      date: 'December 2025',
    },
    {
      name: 'Zainab Malik',
      location: 'United States',
      program: 'Noorani Qaida',
      rating: 5,
      text: 'Starting as a complete beginner was intimidating, but the tutor\'s encouraging approach made all the difference. I\'m now moving on to Nazra Quran!',
      date: 'November 2025',
    },
    {
      name: 'Ibrahim Yusuf',
      location: 'Canada',
      program: 'Hifz Support',
      rating: 5,
      text: 'The memorization techniques and revision schedule have been game-changers. My son has memorized 3 Juz in 6 months with strong retention.',
      date: 'January 2026',
    },
    {
      name: 'Mariam Ahmed',
      location: 'United Kingdom',
      program: 'Tajweed Course',
      rating: 5,
      text: 'I wanted to improve my recitation before Ramadan. The focused Tajweed classes helped me achieve my goal. The tutor is highly skilled and patient.',
      date: 'December 2025',
    },
    {
      name: 'Hassan Ali',
      location: 'Australia',
      program: 'Nazra Quran',
      rating: 5,
      text: 'Living in Australia with a different timezone was a concern, but they found perfect timing for us. The flexibility and quality are both outstanding.',
      date: 'October 2025',
    },
    {
      name: 'Khadija Hussain',
      location: 'United States',
      program: 'Noorani Qaida',
      rating: 5,
      text: 'My twins needed individual attention and different paces. They assigned two separate tutors and both kids are thriving. Worth every penny!',
      date: 'November 2025',
    },
    {
      name: 'Tariq Mohammed',
      location: 'Saudi Arabia',
      program: 'Hifz Support',
      rating: 5,
      text: 'The regular assessments and parent communication keep me informed about my daughter\'s progress. She\'s more motivated than ever to complete her Hifz.',
      date: 'January 2026',
    },
  ];

  const stats = [
    { label: 'Happy Students', value: '500+' },
    { label: 'Countries Served', value: '25+' },
    { label: 'Classes Completed', value: '10,000+' },
    { label: 'Average Rating', value: '5.0' },
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
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-accent fill-accent" />
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Student Success Stories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read what parents and students say about their learning journey with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 9) * 0.05 }}
                className="bg-card rounded-xl shadow-md border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{testimonial.text}</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-primary font-medium">{testimonial.program}</span>
                    <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Parents Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear directly from families about their experience
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-background rounded-xl p-12 border-2 border-dashed border-border text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Parents Love Our Teaching Approach
            </h3>
            <p className="text-muted-foreground">
              Our students and their families consistently praise the quality of instruction, flexibility, and the positive learning environment we provide.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Start your free trial and experience the quality that families worldwide trust
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors shadow-lg"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  );
}
