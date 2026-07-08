import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="bg-primary min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl font-bold mb-8">
            Privacy <span className="gradient-text">Policy</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-accent-silver/80">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Information We Collect
              </h2>
              <p>
                We collect information that you provide directly to us,
                including personal information such as your name, email address,
                phone number, company details, and shipping information when you
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p>
                We use the collected information to provide, maintain, and
                improve our services, process your bookings, communicate with
                you about your shipments, and send you relevant updates about
                our logistics services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at privacy@yourstrucking.com.au or call 1300
                TRUCKING.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
