import { motion } from "framer-motion";

const TermsConditions = () => {
  return (
    <div className="bg-primary min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl font-bold mb-8">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-accent-silver/80">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Service Agreement
              </h2>
              <p>
                By using Yours Trucking Australia's services, you agree to be
                bound by these terms and conditions. These terms govern your use
                of our freight and logistics services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Booking and Payment
              </h2>
              <p>
                All bookings are subject to availability. Payment terms are net
                30 days for approved account customers. New customers may be
                required to pay in advance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Liability and Insurance
              </h2>
              <p>
                Our liability for loss or damage to goods is limited in
                accordance with our terms of carriage. Additional insurance
                coverage is available upon request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Contact</h2>
              <p>
                For questions about these terms, contact our legal department at
                legal@yourstrucking.com.au.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;
