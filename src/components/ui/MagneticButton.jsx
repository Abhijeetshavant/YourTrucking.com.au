import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const MagneticButton = ({
  children,
  variant = "primary",
  size = "lg",
  className,
  icon: Icon,
  ...props
}) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary:
      "bg-accent-orange text-white hover:bg-accent-orange/90 glow-orange",
    secondary: "glass glass-hover text-white",
    outline:
      "border-2 border-accent-blue/50 text-accent-blue hover:bg-accent-blue/10 glow-blue",
    ghost: "bg-transparent text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4 text-lg",
    xl: "px-12 py-5 text-xl",
  };

  return (
    <motion.button
      ref={buttonRef}
      className={cn(
        "relative inline-flex items-center gap-3 font-heading font-semibold rounded-full transition-all duration-300 overflow-hidden",
        variants[variant],
        sizes[size],
        className,
      )}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {Icon && (
        <motion.span
          className="relative z-10"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Icon size={20} />
        </motion.span>
      )}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-orange to-orange-600 opacity-0"
          initial={false}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
};

export default MagneticButton;
