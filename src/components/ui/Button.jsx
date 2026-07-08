import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "right",
      className,
      disabled = false,
      loading = false,
      fullWidth = false,
      magnetic = true,
      glow = false,
      ...props
    },
    ref,
  ) => {
    const variants = {
      primary:
        "bg-accent-orange text-white hover:bg-accent-orange/90 active:bg-accent-orange/80",
      secondary: "glass glass-hover text-white hover:bg-white/10",
      outline:
        "border-2 border-accent-orange/50 text-accent-orange hover:bg-accent-orange/10 hover:border-accent-orange",
      ghost: "bg-transparent text-white hover:bg-white/5",
      danger: "bg-red-500 text-white hover:bg-red-600",
      success: "bg-green-500 text-white hover:bg-green-600",
      link: "bg-transparent text-accent-orange hover:underline",
    };

    const sizes = {
      xs: "px-3 py-1.5 text-xs gap-1.5 rounded-lg",
      sm: "px-4 py-2 text-sm gap-2 rounded-xl",
      md: "px-6 py-2.5 text-sm gap-2 rounded-xl",
      lg: "px-8 py-3 text-base gap-3 rounded-xl",
      xl: "px-10 py-4 text-lg gap-3 rounded-2xl",
      "2xl": "px-12 py-5 text-xl gap-4 rounded-2xl",
    };

    const iconSizes = {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 28,
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-heading font-semibold transition-all duration-300 overflow-hidden",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          glow && variant === "primary" && "glow-orange",
          glow && variant === "outline" && "glow-blue",
          className,
        )}
        disabled={disabled || loading}
        whileHover={!disabled && magnetic ? { scale: 1.02 } : {}}
        whileTap={!disabled && magnetic ? { scale: 0.98 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {/* Loading Spinner */}
        {loading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg
              className="animate-spin"
              width={iconSizes[size]}
              height={iconSizes[size]}
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </motion.div>
        )}

        {/* Content */}
        <span
          className={cn(
            "relative z-10 flex items-center gap-2",
            loading && "opacity-0",
          )}
        >
          {Icon && iconPosition === "left" && (
            <Icon size={iconSizes[size]} className="flex-shrink-0" />
          )}
          {children}
          {Icon && iconPosition === "right" && (
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Icon size={iconSizes[size]} className="flex-shrink-0" />
            </motion.span>
          )}
        </span>

        {/* Hover Effect Overlay */}
        {variant === "primary" && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent-orange via-orange-500 to-accent-orange opacity-0"
            initial={false}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Ripple Effect */}
        {!disabled && (
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export default Button;
