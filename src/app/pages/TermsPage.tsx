import { motion } from 'motion/react';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: February 5, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-lg border border-border p-8 sm:p-12 prose prose-lg max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using Divine Quran Tutors' services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>Description of Service</h2>
            <p>
              Divine Quran Tutors provides online Quran education services through one-on-one live video classes. Our services include Noorani Qaida, Nazra Quran, Tajweed, and Hifz support programs.
            </p>

            <h2>Eligibility</h2>
            <p>
              Our services are available to students of all ages. For students under 18, a parent or legal guardian must provide consent and supervise the registration and use of our services.
            </p>

            <h2>Registration and Account</h2>
            <p>To use our services, you must:</p>
            <ul>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h2>Trial Classes</h2>
            <ul>
              <li>New students are entitled to one free trial class</li>
              <li>Trial classes are 30-45 minutes in duration</li>
              <li>No payment information is required for the trial</li>
              <li>Trial classes are subject to tutor availability</li>
            </ul>

            <h2>Payment Terms</h2>
            <h3>Fees and Billing</h3>
            <ul>
              <li>Tuition fees vary based on the selected plan (Starter, Standard, or Intensive)</li>
              <li>Payment is due monthly in advance</li>
              <li>We accept bank transfers, PayPal, and other specified payment methods</li>
              <li>All fees are in the agreed-upon currency at time of enrollment</li>
            </ul>

            <h3>Late Payments</h3>
            <p>
              If payment is not received by the due date, classes may be suspended until payment is received. We will provide advance notice before any suspension.
            </p>

            <h2>Scheduling and Attendance</h2>
            <h3>Class Scheduling</h3>
            <ul>
              <li>Classes are scheduled at mutually agreed times between student and tutor</li>
              <li>Students should maintain consistent class times when possible</li>
              <li>Schedule changes require coordination with your tutor</li>
            </ul>

            <h3>Rescheduling</h3>
            <ul>
              <li>Classes may be rescheduled with at least 24 hours advance notice</li>
              <li>Rescheduling requests should be made via WhatsApp or email</li>
              <li>We will make reasonable efforts to accommodate rescheduling requests</li>
            </ul>

            <h3>Missed Classes</h3>
            <ul>
              <li>Classes missed without 24-hour notice are forfeited</li>
              <li>In case of emergency, contact us as soon as possible</li>
              <li>Unused classes may roll over to the following week at our discretion</li>
            </ul>

            <h2>Student Conduct</h2>
            <p>Students are expected to:</p>
            <ul>
              <li>Treat tutors and staff with respect</li>
              <li>Attend classes on time and prepared</li>
              <li>Complete assigned homework and practice</li>
              <li>Use appropriate language and behavior during classes</li>
              <li>Not record or share class sessions without permission</li>
            </ul>

            <h2>Tutor Changes</h2>
            <p>
              If you're not satisfied with your assigned tutor, we will work to match you with a different tutor at no additional cost. Please allow reasonable time for the transition.
            </p>

            <h2>Cancellation and Refunds</h2>
            <ul>
              <li>You may cancel your enrollment with 30 days written notice</li>
              <li>Refunds are processed according to our Refund Policy</li>
              <li>We reserve the right to terminate service for violations of these terms</li>
            </ul>
            <p>
              Please see our <a href="/refund-policy">Refund Policy</a> page for detailed information.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All learning materials, content, and resources provided by Divine Quran Tutors remain our intellectual property. Students may use materials for personal learning only and may not distribute, sell, or reproduce them.
            </p>

            <h2>Recording and Privacy</h2>
            <ul>
              <li>Classes may be recorded for quality assurance and student review</li>
              <li>Recordings are for personal use only and must not be shared</li>
              <li>We maintain student privacy according to our Privacy Policy</li>
            </ul>

            <h2>Technical Requirements</h2>
            <p>Students are responsible for:</p>
            <ul>
              <li>Maintaining stable internet connection</li>
              <li>Having appropriate device (computer, tablet, or smartphone)</li>
              <li>Installing required software (Zoom or Skype)</li>
              <li>Ensuring proper audio and video functionality</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              Divine Quran Tutors provides educational services to the best of our ability. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>

            <h2>Disclaimer</h2>
            <p>
              We strive to provide high-quality Quran education but cannot guarantee specific learning outcomes. Results depend on individual effort, practice, and commitment.
            </p>

            <h2>Modifications to Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our services with reasonable notice to affected students.
            </p>

            <h2>Modifications to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the applicable jurisdiction. Any disputes will be resolved through good faith negotiation or appropriate legal channels.
            </p>

            <h2>Contact Information</h2>
            <p>For questions about these Terms of Service:</p>
            <ul>
              <li>Email: info@divinequrantutors.com</li>
              <li>WhatsApp: +61 485 519 322</li>
            </ul>

            <div className="mt-8 p-6 bg-secondary rounded-lg">
              <p className="text-sm text-muted-foreground mb-0">
                <strong>Note:</strong> These terms of service are provided as a sample for demonstration purposes. Actual terms should be reviewed and customized by legal counsel to comply with applicable laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
