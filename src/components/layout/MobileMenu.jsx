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
        className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-primary border-l border-white/10 p-8 flex flex-col"
        variants={menuVariants}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 glass p-2 rounded-full hover:bg-white/10 transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="mb-8">
          <h2 className="font-display text-2xl font-bold gradient-text">
            YOURS TRUCKING
          </h2>
          <p className="text-xs text-accent-silver/40 mt-1">Australia</p>
        </div>

        {/* Navigation Links - Scrollable if needed */}
        <nav className="flex-1 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <motion.div key={item.path} variants={itemVariants}>
              <Link
                to={item.path}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group"
                onClick={onClose}
              >
                <span className="text-base font-medium">{item.label}</span>
                <ArrowRight
                  className="text-accent-silver/20 group-hover:text-accent-orange transition-all"
                  size={18}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Actions - Fixed at bottom */}
        <motion.div
          className="space-y-3 pt-4 border-t border-white/10 mt-4"
          variants={itemVariants}
        >
          <a
            href="tel:+61416879499"
            className="flex items-center gap-3 p-3 rounded-xl bg-accent-orange/10 text-accent-orange hover:bg-accent-orange/20 transition-colors"
          >
            <Phone size={20} />
            <span className="font-semibold">+61 0416879499</span>
          </a>

          <Link
            to="/booking"
            className="block w-full bg-accent-orange text-white text-center py-3 rounded-xl font-semibold glow-orange hover:bg-accent-orange/90 transition-colors"
            onClick={onClose}
          >
            Book a Truck Now
          </Link>

          <Link
            to="/contact"
            className="block w-full glass glass-hover text-white text-center py-3 rounded-xl font-semibold transition-colors"
            onClick={onClose}
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
