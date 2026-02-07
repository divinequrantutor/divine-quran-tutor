import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BookOpen, GraduationCap, Award, Star, CheckCircle, Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function ProgramsPage() {
  const location = useLocation();
  const heroBackgroundImage = "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1800&q=80')";

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const programs = [
    {
      id: 'noorani-qaida',
      title: 'Noorani Qaida',
      description: 'The perfect starting point for anyone beginning their Quran learning journey',
      icon: BookOpen,
      color: 'from-blue-500/10 to-blue-500/5',
      iconColor: 'text-blue-600',
      audience: 'Kids & Adults (Beginners)',
      duration: '3-6 months',
      format: '2-3 classes per week, 30-45 minutes each',
      prerequisites: 'No prior knowledge required',
      outcomes: [
        'Master all Arabic letters and their sounds',
        'Learn proper pronunciation of each letter',
        'Understand basic Tajweed rules',
        'Read simple Arabic words and sentences',
        'Build confidence for Quran reading',
      ],
      curriculum: [
        'Introduction to Arabic alphabet',
        'Letter forms (isolated, initial, medial, final)',
        'Short and long vowels',
        'Joining letters',
        'Basic Tajweed rules',
        'Practice with exercises',
      ],
    },
    {
      id: 'nazra-quran',
      title: 'Nazra Quran',
      description: 'Develop fluent and confident Quran recitation with proper flow',
      icon: GraduationCap,
      color: 'from-green-500/10 to-green-500/5',
      iconColor: 'text-green-600',
      audience: 'Kids & Adults with basic reading',
      duration: 'Ongoing (typically 12-24 months for completion)',
      format: '3-4 classes per week, 45-60 minutes each',
      prerequisites: 'Completed Noorani Qaida or basic Arabic reading',
      outcomes: [
        'Read Quran fluently with proper pronunciation',
        'Build consistent reading practice',
        'Improve speed and accuracy',
        'Gain confidence in recitation',
        'Complete full Quran recitation',
      ],
      curriculum: [
        'Start from Surah Al-Fatiha',
        'Progressive reading through Juz',
        'Regular revision of completed portions',
        'Focus on accuracy and fluency',
        'Memorization of selected Surahs',
        'Understanding of common words',
      ],
    },
    {
      id: 'tajweed',
      title: 'Tajweed Course',
      description: 'Master the art of beautiful Quranic recitation with proper rules',
      icon: Award,
      color: 'from-amber-500/10 to-amber-500/5',
      iconColor: 'text-amber-600',
      audience: 'Intermediate & Advanced readers',
      duration: '6-12 months',
      format: '3 classes per week, 45-60 minutes each',
      prerequisites: 'Ability to read Quran (Nazra completed)',
      outcomes: [
        'Master all Tajweed rules',
        'Perfect pronunciation of letters',
        'Beautiful and correct recitation',
        'Identify and apply rules while reading',
        'Confidence in leading prayers',
      ],
      curriculum: [
        'Makharij al-Huruf (articulation points)',
        'Sifat al-Huruf (characteristics of letters)',
        'Rules of Noon Sakinah and Tanween',
        'Rules of Meem Sakinah',
        'Qalqalah, Madd, and Ghunnah',
        'Rules of Ra and Lam',
        'Advanced Tajweed concepts',
        'Practical application in recitation',
      ],
    },
    {
      id: 'hifz-support',
      title: 'Hifz Support Program',
      description: 'Structured memorization program with systematic revision support',
      icon: Star,
      color: 'from-purple-500/10 to-purple-500/5',
      iconColor: 'text-purple-600',
      audience: 'Committed students (kids & adults)',
      duration: 'Ongoing (varies by goal - typically 2-5 years)',
      format: '5-6 classes per week, 45-60 minutes each',
      prerequisites: 'Good Nazra and basic Tajweed knowledge',
      outcomes: [
        'Systematic Quran memorization',
        'Strong revision schedule',
        'Long-term retention techniques',
        'Progress tracking and accountability',
        'Building consistent practice habits',
      ],
      curriculum: [
        'New memorization (Sabaq)',
        'Recent revision (Sabaq Para)',
        'Old revision (Manzil)',
        'Tajweed correction during memorization',
        'Regular testing and assessment',
        'Memorization techniques and tips',
        'Time management strategies',
        'Building strong foundations',
      ],
      features: [
        'Daily memorization targets',
        'Systematic revision schedule',
        'Progress tracking',
        'Parent/student reports',
        'Flexible memorization pace',
        'Weekend intensive sessions available',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-20">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center opacity-28"
            style={{ backgroundImage: heroBackgroundImage }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/80 to-background/85" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Programs</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive Quran learning programs designed for every level, from beginners to advanced students
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                id={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="scroll-mt-24"
              >
                <div className={`bg-gradient-to-br ${program.color} rounded-2xl p-8 sm:p-12`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Header */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 bg-white rounded-xl ${program.iconColor} mr-4`}>
                          <program.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-foreground">{program.title}</h2>
                          <p className="text-muted-foreground">{program.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Users className="h-5 w-5 text-primary mr-2" />
                          <h3 className="font-semibold text-foreground">Who It's For</h3>
                        </div>
                        <p className="text-muted-foreground">{program.audience}</p>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <Clock className="h-5 w-5 text-primary mr-2" />
                          <h3 className="font-semibold text-foreground">Duration</h3>
                        </div>
                        <p className="text-muted-foreground">{program.duration}</p>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <BookOpen className="h-5 w-5 text-primary mr-2" />
                          <h3 className="font-semibold text-foreground">Class Format</h3>
                        </div>
                        <p className="text-muted-foreground">{program.format}</p>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          <h3 className="font-semibold text-foreground">Prerequisites</h3>
                        </div>
                        <p className="text-muted-foreground">{program.prerequisites}</p>
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-4 flex items-center">
                        <Award className="h-5 w-5 text-primary mr-2" />
                        Learning Outcomes
                      </h3>
                      <ul className="space-y-3">
                        {program.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Curriculum */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-4 flex items-center">
                        <GraduationCap className="h-5 w-5 text-primary mr-2" />
                        Curriculum
                      </h3>
                      <ul className="space-y-3">
                        {program.curriculum.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              {i + 1}
                            </span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {program.features && (
                        <div className="mt-6">
                          <h4 className="font-medium text-foreground mb-3">Additional Features:</h4>
                          <ul className="space-y-2">
                            {program.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free trial class and discover the perfect program for you
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  );
}
