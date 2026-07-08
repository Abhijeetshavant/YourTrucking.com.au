import { motion } from "framer-motion";
import { Truck, Home, ArrowRight } from "lucide-react";
import MagneticButton from "../components/ui/MagneticButton";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-primary min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,76,0,0.1),_transparent_70%)]" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <Truck className="text-accent-orange mx-auto mb-8" size={80} />
        </motion.div>

        <motion.h1
          className="font-display text-8xl md:text-9xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="gradient-text">404</span>
        </motion.h1>

        <motion.p
          className="text-2xl text-accent-silver/80 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Looks like this shipment got lost!
        </motion.p>

        <motion.p
          className="text-accent-silver/60 mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Link to="/">
            <MagneticButton variant="primary" size="lg" icon={Home}>
              Back to Home
            </MagneticButton>
          </Link>
          <Link to="/contact">
            <MagneticButton variant="secondary" size="lg" icon={ArrowRight}>
              Contact Support
            </MagneticButton>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 border border-accent-orange/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 border border-accent-blue/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default NotFound;
