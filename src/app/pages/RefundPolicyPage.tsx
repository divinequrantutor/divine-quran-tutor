import { motion } from 'motion/react';

export function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-4">Refund Policy</h1>
            <p className="text-muted-foreground">Last updated: February 5, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-lg border border-border p-8 sm:p-12 prose prose-lg max-w-none">
            <h2>Our Commitment</h2>
            <p>
              At Divine Quran Tutors, we are committed to providing high-quality Quran education. This Refund Policy outlines the circumstances under which refunds may be requested and processed.
            </p>

            <h2>Free Trial Class</h2>
            <ul>
              <li>All new students receive one free trial class</li>
              <li>No payment is required for the trial class</li>
              <li>The trial class allows you to experience our teaching quality before committing</li>
              <li>There is no obligation to continue after the trial</li>
            </ul>

            <h2>Satisfaction Guarantee</h2>
            <p>
              If you're not satisfied with your assigned tutor after paid classes have begun, we will:
            </p>
            <ul>
              <li>Assign you a different tutor at no additional cost</li>
              <li>Allow time for adjustment to the new tutor</li>
              <li>Work with you to ensure a suitable match</li>
            </ul>

            <h2>Refund Eligibility</h2>
            <h3>Full Refund</h3>
            <p>You are eligible for a full refund if:</p>
            <ul>
              <li>We cancel your classes due to tutor unavailability and cannot provide a suitable replacement</li>
              <li>Technical issues on our end prevent classes from being conducted</li>
              <li>We fail to provide the service as described</li>
            </ul>

            <h3>Partial Refund</h3>
            <p>You may be eligible for a partial refund if:</p>
            <ul>
              <li>You cancel within the first 7 days and have attended fewer than 3 classes</li>
              <li>There are documented quality issues that we were unable to resolve</li>
              <li>You need to discontinue due to unforeseen medical or emergency circumstances (with documentation)</li>
            </ul>

            <h3>No Refund</h3>
            <p>Refunds will not be provided for:</p>
            <ul>
              <li>Classes missed by the student without proper notice</li>
              <li>Student's technical issues or internet connectivity problems</li>
              <li>Change of mind after completing more than 3 paid classes</li>
              <li>Failure to complete homework or lack of practice</li>
              <li>Cancellations after the 7-day grace period (see below)</li>
            </ul>

            <h2>7-Day Grace Period</h2>
            <p>
              After enrollment, students have a 7-day grace period to evaluate if the program meets their expectations:
            </p>
            <ul>
              <li>If you're not satisfied within the first 7 days, you may request a refund</li>
              <li>A full refund will be provided if fewer than 3 classes have been conducted</li>
              <li>After the grace period, our standard cancellation policy applies</li>
            </ul>

            <h2>Cancellation Policy</h2>
            <h3>Student-Initiated Cancellation</h3>
            <ul>
              <li>You may cancel your enrollment with 30 days written notice</li>
              <li>Classes conducted during the notice period are non-refundable</li>
              <li>Prepaid fees for classes after the notice period will be refunded</li>
            </ul>

            <h3>Company-Initiated Cancellation</h3>
            <p>
              If we need to cancel your enrollment due to circumstances on our end, you will receive a full refund for any unused classes.
            </p>

            <h2>Unused Classes</h2>
            <ul>
              <li>Unused classes from the current month may roll over to the next month at our discretion</li>
              <li>Classes that roll over must be used within the following month</li>
              <li>Upon final cancellation, unused classes are non-refundable unless covered under our refund eligibility criteria</li>
            </ul>

            <h2>Refund Process</h2>
            <h3>How to Request a Refund</h3>
            <ol>
              <li>Contact us via email (info@divinequrantutors.com) or WhatsApp (+61 485 519 322)</li>
              <li>Provide your enrollment details and reason for the refund request</li>
              <li>Include any relevant documentation (for medical/emergency situations)</li>
              <li>Our team will review your request within 3-5 business days</li>
            </ol>

            <h3>Refund Timeline</h3>
            <ul>
              <li>Approved refunds are processed within 7-10 business days</li>
              <li>Refunds are issued to the original payment method</li>
              <li>Bank processing times may vary (typically 5-10 business days additional)</li>
            </ul>

            <h3>Refund Amount</h3>
            <p>Refund amounts are calculated as:</p>
            <ul>
              <li>Total fees paid minus the cost of classes already conducted</li>
              <li>Any applicable transaction fees may be deducted</li>
              <li>Refunds are calculated on a per-class basis</li>
            </ul>

            <h2>Special Circumstances</h2>
            <h3>Medical or Emergency Situations</h3>
            <p>
              We understand that unforeseen circumstances arise. If you need to discontinue classes due to medical or emergency reasons:
            </p>
            <ul>
              <li>Contact us as soon as possible</li>
              <li>Provide relevant documentation</li>
              <li>We will work with you on a case-by-case basis</li>
              <li>Options may include refund, credit, or extended pause</li>
            </ul>

            <h3>Temporary Breaks</h3>
            <p>
              If you need to take a break from classes but plan to return:
            </p>
            <ul>
              <li>You may pause your enrollment for up to 2 months</li>
              <li>No refund is necessary - your account remains active</li>
              <li>Resume classes when ready by contacting your tutor</li>
            </ul>

            <h2>Disputes</h2>
            <p>
              If you disagree with a refund decision:
            </p>
            <ul>
              <li>Contact our management team at info@divinequrantutors.com</li>
              <li>Provide detailed explanation of your situation</li>
              <li>We will review and respond within 5 business days</li>
              <li>We aim to resolve all disputes fairly and amicably</li>
            </ul>

            <h2>Promotional Credits</h2>
            <ul>
              <li>Promotional credits or discounts are non-refundable</li>
              <li>Only amounts paid in cash/card are eligible for refund</li>
              <li>Referral bonuses and special offers have no cash value</li>
            </ul>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Refund Policy from time to time. Changes will be posted on our website with an updated "Last updated" date. Continued use of our services after changes constitutes acceptance of the modified policy.
            </p>

            <h2>Contact Us</h2>
            <p>For refund requests or questions about this policy:</p>
            <ul>
              <li>Email: info@divinequrantutors.com</li>
              <li>WhatsApp: +61 485 519 322</li>
            </ul>

            <div className="mt-8 p-6 bg-secondary rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Note:</strong> This refund policy is provided as a sample for demonstration purposes. Actual policies should be reviewed by legal counsel and comply with applicable consumer protection laws in your jurisdiction.
              </p>
              <p className="text-sm text-muted-foreground mb-0">
                We are committed to transparency and fairness in all our refund decisions. If you have any questions or concerns, please don't hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
