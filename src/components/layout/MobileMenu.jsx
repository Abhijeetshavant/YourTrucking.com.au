import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Phone, ArrowRight } from "lucide-react";

const MobileMenu = ({ isOpen, onClose, navItems }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 lg:hidden"
      initial="closed"
      animate="open"
      exit="closed"
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-primary border-l border-white/10 p-8"
        variants={menuVariants}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 glass p-2 rounded-full"
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold gradient-text">
            YOURS TRUCKING
          </h2>
          <p className="text-xs text-accent-silver/40 mt-1">Australia</p>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          {navItems.map((item) => (
            <motion.div key={item.path} variants={itemVariants}>
              <Link
                to={item.path}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group"
                onClick={onClose}
              >
                <span className="text-lg font-medium">{item.label}</span>
                <ArrowRight
                  className="text-accent-silver/20 group-hover:text-accent-orange transition-all"
                  size={20}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Actions */}
        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
          <a
            href="tel:1300878254"
            className="flex items-center gap-3 p-4 rounded-xl bg-accent-orange/10 text-accent-orange"
          >
            <Phone size={20} />
            <span className="font-semibold">1300 TRUCK</span>
          </a>

          <Link
            to="/booking"
            className="block w-full bg-accent-orange text-white text-center py-4 rounded-xl font-semibold glow-orange"
            onClick={onClose}
          >
            Book a Truck Now
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="absolute bottom-8 left-8 right-8"
          variants={itemVariants}
        >
          <p className="text-accent-silver/40 text-sm mb-4">Follow Us</p>
          <div className="flex gap-4">
            {["LinkedIn", "Facebook", "Instagram", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-accent-silver/60 hover:text-white transition-colors text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
