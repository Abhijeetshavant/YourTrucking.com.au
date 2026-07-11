import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Truck,
  Shield,
  Clock,
  Zap,
  Star,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import AnimatedCounter from "../ui/AnimatedCounter";

// Import local video
import heroVideo from "../../assets/herovideo.mp4";

const Hero = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 0.85]);

  // Handle video loop - when video ends, play again
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  // Handle video playback
  useEffect(() => {
    if (videoRef.current && isVideoLoaded) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, isVideoLoaded]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const floatingIcons = [
    { Icon: Truck, delay: 0, x: "5%", y: "25%" },
    { Icon: Shield, delay: 2, x: "85%", y: "20%" },
    { Icon: Clock, delay: 4, x: "10%", y: "65%" },
    { Icon: Zap, delay: 6, x: "80%", y: "70%" },
  ];

  // Stats data - "Cities Covered" replaced with "Client Rating"
  const stats = [
    { value: 50000, suffix: "+", label: "Loads Delivered", icon: Truck },
    { value: 2500, suffix: "+", label: "Verified Trucks", icon: Shield },
    { value: 4.9, suffix: "/5", label: "Client Rating", icon: Star },
    { value: 99.8, suffix: "%", label: "On-Time Delivery", icon: Clock },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-0"
    >
      {/* ========== VIDEO BACKGROUND ========== */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity: videoOpacity, scale: videoScale }}
      >
        {/* Local Video Player */}
        {!videoError && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            poster="/images/hero-poster.jpg"
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setVideoError(true)}
            onEnded={handleVideoEnded}
          >
            {/* Local video file from assets */}
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* ========== OVERLAY GRADIENTS ========== */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0A0E17] via-[#0A0E17]/80 to-[#0D111A]"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E17]/50 via-transparent to-[#0A0E17]/50" />

        {/* Radial glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,76,0,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,194,255,0.1),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,76,0,0.08),_transparent_50%)]" />

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Animated particles/dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-orange/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* ========== FLOATING ICONS ========== */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute z-10 hidden md:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="glass p-3 md:p-4 rounded-full backdrop-blur-xl border-white/20">
            <Icon className="text-accent-orange" size={24} />
          </div>
        </motion.div>
      ))}

      {/* ========== VIDEO CONTROLS ========== */}
      {isVideoLoaded && !videoError && (
        <motion.div
          className="absolute bottom-8 right-8 z-20 flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <button
            onClick={togglePlay}
            className="glass p-2.5 rounded-full hover:bg-white/10 transition-all backdrop-blur-xl"
            title={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause size={16} className="text-white/70" />
            ) : (
              <Play size={16} className="text-white/70" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="glass p-2.5 rounded-full hover:bg-white/10 transition-all backdrop-blur-xl"
            title={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX size={16} className="text-white/70" />
            ) : (
              <Volume2 size={16} className="text-white/70" />
            )}
          </button>
        </motion.div>
      )}

      {/* ========== MAIN CONTENT ========== */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Premium Badge */}
          <motion.div
            className="glass px-4 py-2 md:px-6 md:py-3 rounded-full mb-6 md:mb-8 flex items-center gap-2 md:gap-3 backdrop-blur-xl border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-orange" />
            </span>
            <span className="text-xs md:text-sm text-accent-silver whitespace-nowrap font-medium tracking-wide">
              Australia's #1 Premium Logistics Network
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="w-full max-w-6xl font-display font-bold leading-[1.1] md:leading-[1.05] mb-4 md:mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl gradient-text drop-shadow-lg">
              YOURS TRUCKING:
            </span>
            <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white mt-2 md:mt-4 drop-shadow-lg">
              The Silent Engine of a Nation
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-accent-silver/80 max-w-2xl md:max-w-3xl mb-8 md:mb-12 font-light px-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Orchestrating heavy haulage, intermodal precision, and national
            supply chains with the power of 2,500+ vehicles and real-time
            AI-driven logistics.
          </motion.p>

          {/* CTA Buttons */}
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
              className="w-full sm:w-auto justify-center text-sm md:text-base shadow-lg shadow-accent-orange/25"
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

          {/* Stats Grid - 4 Stats with Rating */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 w-full max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center glass p-3 md:p-5 lg:p-6 backdrop-blur-xl border-white/20 hover:border-accent-orange/30 transition-all duration-300 group cursor-default"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Icon for each stat */}
                <stat.icon
                  className="text-accent-orange mx-auto mb-1 md:mb-2 opacity-70 group-hover:opacity-100 transition-opacity"
                  size={16}
                />

                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-0.5 group-hover:gradient-text transition-all">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>

                <p className="text-[10px] md:text-xs lg:text-sm text-accent-silver/60 group-hover:text-accent-silver/80 transition-colors">
                  {stat.label}
                </p>

                {/* Star rating display for Client Rating */}
                {stat.label === "Client Rating" && (
                  <div className="flex justify-center gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        className={
                          i < 4
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-yellow-400/30 fill-yellow-400/30"
                        }
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ========== SCROLL INDICATOR ========== */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <span className="text-[10px] text-accent-silver/40 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/20 rounded-full flex justify-center hover:border-accent-orange/50 transition-colors">
            <motion.div
              className="w-1 md:w-1.5 h-2 md:h-3 bg-accent-orange rounded-full mt-1.5 md:mt-2"
              animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
