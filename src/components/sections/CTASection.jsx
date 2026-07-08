import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageSquare } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import GlassCard from "../ui/GlassCard";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/10 via-primary to-accent-blue/10" />

        {/* Animated Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-accent-orange/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.span
            className="text-accent-orange font-heading text-sm tracking-widest uppercase block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.span>

          <motion.h2
            className="font-display text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Move With <span className="gradient-text">Australia's Best</span>
          </motion.h2>

          <motion.p
            className="text-accent-silver/60 text-lg max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Join thousands of businesses that trust Yours Trucking for their
            logistics needs. Get started today with a free quote or book your
            first shipment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <MagneticButton variant="primary" size="xl" icon={ArrowRight}>
              Get Free Quote
            </MagneticButton>
            <MagneticButton variant="secondary" size="xl" icon={Phone}>
              Call 1300 TRUCKING
            </MagneticButton>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <GlassCard className="text-center group cursor-pointer" glow>
              <Phone
                className="text-accent-orange mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-heading font-bold mb-2">Call Us</h3>
              <p className="text-accent-silver/60 text-sm">1300 TRUCKING</p>
              <p className="text-accent-silver/40 text-xs mt-1">
                24/7 Support Available
              </p>
            </GlassCard>

            <GlassCard className="text-center group cursor-pointer" glow>
              <Mail
                className="text-accent-blue mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-heading font-bold mb-2">Email Us</h3>
              <p className="text-accent-silver/60 text-sm">
                info@yourstrucking.com.au
              </p>
              <p className="text-accent-silver/40 text-xs mt-1">
                Response within 1 hour
              </p>
            </GlassCard>

            <GlassCard className="text-center group cursor-pointer" glow>
              <MessageSquare
                className="text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-heading font-bold mb-2">Live Chat</h3>
              <p className="text-accent-silver/60 text-sm">
                Start Conversation
              </p>
              <p className="text-accent-silver/40 text-xs mt-1">
                Instant Response
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
