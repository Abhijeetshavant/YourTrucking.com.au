import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Truck, Shield, Clock, Zap } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import AnimatedCounter from "../ui/AnimatedCounter";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const floatingIcons = [
    { Icon: Truck, delay: 0, x: "5%", y: "25%" },
    { Icon: Shield, delay: 2, x: "85%", y: "20%" },
    { Icon: Clock, delay: 4, x: "10%", y: "65%" },
    { Icon: Zap, delay: 6, x: "80%", y: "70%" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity: videoOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E17] via-[#0D111A] to-[#111620]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,76,0,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,194,255,0.1),_transparent_50%)]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Floating Icons - Hidden on mobile */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute z-10 hidden md:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="glass p-3 md:p-4 rounded-full">
            <Icon className="text-accent-orange" size={24} />
          </div>
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            className="glass px-4 py-2 md:px-6 md:py-3 rounded-full mb-6 md:mb-8 flex items-center gap-2 md:gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
            <span className="text-xs md:text-sm text-accent-silver whitespace-nowrap">
              Australia's #1 Premium Logistics Network
            </span>
          </motion.div>

          {/* Main Headline - RESPONSIVE FIX */}
          <motion.h1
            className="w-full max-w-6xl font-display font-bold leading-[1.1] md:leading-[1.05] mb-4 md:mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl gradient-text">
              YOURS TRUCKING:
            </span>
            <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white mt-2 md:mt-4">
              The Silent Engine of a Nation
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-accent-silver/70 max-w-2xl md:max-w-3xl mb-8 md:mb-12 font-light px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Orchestrating heavy haulage, intermodal precision, and national
            supply chains with the power of 2,500+ vehicles and real-time
            AI-driven logistics.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-16 w-full sm:w-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <MagneticButton
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto justify-center text-sm md:text-base"
            >
              Orchestrate a Shipment
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto justify-center text-sm md:text-base"
            >
              Explore Our Fleet
            </MagneticButton>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { value: 50000, suffix: "+", label: "Loads Delivered" },
              { value: 2500, suffix: "+", label: "Verified Trucks" },
              //  Melbourne
              { value: 99.8, suffix: "%", label: "On-Time Delivery" },
            ].map((stat, index) => (
              <div key={index} className="text-center glass p-4 md:p-6">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs md:text-sm text-accent-silver/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          delay: 1.5,
          duration: 1.5,
          y: { duration: 2, repeat: Infinity },
        }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 md:w-1.5 h-2 md:h-3 bg-accent-orange rounded-full mt-1.5 md:mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
