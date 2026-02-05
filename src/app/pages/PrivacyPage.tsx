import { motion } from 'motion/react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: February 5, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-lg border border-border p-8 sm:p-12 prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              Divine Quran Tutors ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our online Quran tutoring services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you provide to us, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number, WhatsApp number)</li>
              <li>Age and date of birth (for students)</li>
              <li>Learning preferences and goals</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Communication records (emails, messages, class recordings)</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you access our services, we may automatically collect:</p>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Class attendance and participation data</li>
              <li>Learning progress and assessment results</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our tutoring services</li>
              <li>Match students with appropriate tutors</li>
              <li>Schedule and conduct online classes</li>
              <li>Process payments and maintain billing records</li>
              <li>Send important updates about classes and services</li>
              <li>Track learning progress and generate reports</li>
              <li>Improve our services and develop new features</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul>
              <li><strong>Tutors:</strong> To facilitate your classes and track progress</li>
              <li><strong>Service Providers:</strong> Third-party companies that help us operate (payment processors, video conferencing platforms)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are used by children under 13 with parental consent. We collect only the information necessary to provide our educational services. Parents have the right to review, delete, or refuse further collection of their child's information.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your information</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>Email: info@divinequrantutors.com</li>
              <li>WhatsApp: +61 485 519 322</li>
            </ul>

            <div className="mt-8 p-6 bg-secondary rounded-lg">
              <p className="text-sm text-muted-foreground mb-0">
                <strong>Note:</strong> This is a sample privacy policy for demonstration purposes. A real privacy policy should be reviewed by legal counsel and tailored to your specific business practices and applicable laws.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
