import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Truck,
  Zap,
  Building2,
  Warehouse,
  Ship,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const VideoShowcase = () => {
  const containerRef = useRef(null);
  const videoRefs = useRef({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState({});
  const autoPlayRef = useRef(null);

  const videos = [
    {
      id: 1,
      title: "Container Transport",
      subtitle: "Efficient Port Logistics",
      description:
        "Seamless container handling and port-to-door delivery across Australian ports. Our specialized fleet ensures safe and timely container movement.",
      video: "https://ik.imagekit.io/ewj4kpfrr/assets/containertruck.mp4",
      icon: Ship,
      stats: { label: "Containers Moved", value: "50,000+" },
      color: "from-blue-600/40 to-cyan-600/40",
      badge: "Port Logistics",
    },
    {
      id: 2,
      title: "Fast Delivery Network",
      subtitle: "Express Freight Solutions",
      description:
        "Rapid express delivery with real-time tracking for time-sensitive cargo. Guaranteed delivery times across metropolitan areas.",
      video: "https://ik.imagekit.io/ewj4kpfrr/assets/fastdelevring.mp4",
      icon: Zap,
      stats: { label: "Avg Delivery Time", value: "4 Hours" },
      color: "from-orange-600/40 to-yellow-600/40",
      badge: "Express",
    },
    {
      id: 3,
      title: "Municipal Operations",
      subtitle: "Local Council Services",
      description:
        "Dedicated municipal logistics supporting local government infrastructure and community services across Australian councils.",
      video:
        "https://ik.imagekit.io/ewj4kpfrr/assets/muncipleConsoleWorking.mp4",
      icon: Building2,
      stats: { label: "Councils Served", value: "150+" },
      color: "from-green-600/40 to-emerald-600/40",
      badge: "Government",
    },
    {
      id: 4,
      title: "Fleet in Motion",
      subtitle: "Modern Transport Fleet",
      description:
        "Our state-of-the-art fleet navigating Australia's diverse terrain. Modern trucks equipped with latest safety technology.",
      video: "https://ik.imagekit.io/ewj4kpfrr/assets/sideview.mp4",
      icon: Truck,
      stats: { label: "Active Vehicles", value: "2,500+" },
      color: "from-purple-600/40 to-pink-600/40",
      badge: "Fleet",
    },
    {
      id: 5,
      title: "Warehouse Operations",
      subtitle: "Distribution Excellence",
      description:
        "Efficient loading and distribution from our state-of-the-art warehouses. Precision handling for all cargo types.",
      video: "https://ik.imagekit.io/ewj4kpfrr/assets/warehouseLoading2.mp4",
      icon: Warehouse,
      stats: { label: "Warehouse Space", value: "50,000 sqm" },
      color: "from-red-600/40 to-orange-600/40",
      badge: "Storage",
    },
    {
      id: 6,
      title: "Loading Bay Operations",
      subtitle: "Precision Handling",
      description:
        "Careful cargo handling with advanced loading equipment and trained professional staff ensuring zero damage.",
      video: "https://ik.imagekit.io/ewj4kpfrr/assets/warehouseloading.mp4",
      icon: Warehouse,
      stats: { label: "Daily Loads", value: "1,000+" },
      color: "from-indigo-600/40 to-blue-600/40",
      badge: "Operations",
    },
    {
      id: 7,
      title: "Warehouse Fleet Ready",
      subtitle: "Integrated Logistics Hub",
      description:
        "Our warehouse fleet ready for dispatch across the nation. 24/7 operations keeping Australia moving.",
      video: "https://ik.imagekit.io/ewj4kpfrr/assets/warehousetruck.mp4",
      icon: Truck,
      stats: { label: "Dispatch Ready", value: "24/7" },
      color: "from-teal-600/40 to-green-600/40",
      badge: "Ready",
    },
  ];

  // ✅ Play current video
  const playCurrentVideo = useCallback(() => {
    const currentVideo = videos[currentIndex];
    const videoEl = videoRefs.current[currentVideo.id];

    if (videoEl) {
      // Reset and play
      videoEl.currentTime = 0;
      videoEl.muted = isMuted;

      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If autoplay fails, try again on user interaction
          console.log("Autoplay prevented, waiting for interaction");
        });
      }
    }

    // Pause other videos
    videos.forEach((v) => {
      if (v.id !== currentVideo.id && videoRefs.current[v.id]) {
        videoRefs.current[v.id].pause();
      }
    });
  }, [currentIndex, isMuted, videos]);

  // ✅ Handle video ended - move to next
  const handleVideoEnded = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  // ✅ Auto-scroll with pause on hover
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 6000); // Change every 6 seconds
  }, [videos.length]);

  // ✅ Initialize auto-play
  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPlaying, startAutoPlay]);

  // ✅ Play video when index changes
  useEffect(() => {
    playCurrentVideo();
  }, [currentIndex, playCurrentVideo]);

  // ✅ Handle video loaded
  const handleVideoLoaded = (id) => {
    setLoadedVideos((prev) => ({ ...prev, [id]: true }));

    // If this is the current video, play it immediately
    if (id === videos[currentIndex].id) {
      const videoEl = videoRefs.current[id];
      if (videoEl) {
        videoEl.muted = isMuted;
        videoEl.play().catch(() => {});
      }
    }
  };

  // ✅ Handle video can play - start playing
  const handleCanPlay = (id) => {
    if (id === videos[currentIndex].id) {
      const videoEl = videoRefs.current[id];
      if (videoEl && isPlaying) {
        videoEl.muted = isMuted;
        videoEl.play().catch(() => {});
      }
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    // Reset auto-play timer
    if (isPlaying) startAutoPlay();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    // Reset auto-play timer
    if (isPlaying) startAutoPlay();
  };

  const togglePlayPause = () => {
    const currentVideo = videos[currentIndex];
    const videoEl = videoRefs.current[currentVideo.id];

    if (videoEl) {
      if (isPlaying) {
        videoEl.pause();
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      } else {
        videoEl.play().catch(() => {});
        startAutoPlay();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    videos.forEach((v) => {
      if (videoRefs.current[v.id]) {
        videoRefs.current[v.id].muted = newMuted;
      }
    });
    setIsMuted(newMuted);
  };

  // ✅ Pause auto-play on hover
  const handleMouseEnter = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  // ✅ Resume auto-play on mouse leave
  const handleMouseLeave = () => {
    if (isPlaying) startAutoPlay();
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,76,0,0.05),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,194,255,0.05),_transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
              Watch Us In Action
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
              Experience Logistics{" "}
              <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-accent-silver/60 text-lg max-w-3xl mx-auto">
              Swipe through our operations. From container ports to warehouse
              distribution, witness the power of premium logistics.
            </p>
          </div>
        </ScrollReveal>

        {/* Video Carousel Container */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Video Display */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-6">
            {/* Current Video */}
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`relative w-full transition-opacity duration-500 ${
                  index === currentIndex
                    ? "opacity-100 block"
                    : "opacity-0 hidden"
                }`}
              >
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                  {/* Loading Placeholder */}
                  {!loadedVideos[video.id] && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 border-4 border-accent-orange/30 border-t-accent-orange rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-accent-silver/60 text-sm">
                          Loading video...
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Video Element */}
                  <video
                    ref={(el) => (videoRefs.current[video.id] = el)}
                    src={video.video}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted={isMuted}
                    loop={false}
                    playsInline
                    preload="auto"
                    onLoadedData={() => handleVideoLoaded(video.id)}
                    onCanPlay={() => handleCanPlay(video.id)}
                    onEnded={handleVideoEnded}
                    poster={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 600'%3E%3Crect fill='%230A0E17' width='1200' height='600'/%3E%3Ctext fill='%23333' font-family='Arial' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(video.title)}%3C/text%3E%3C/svg%3E`}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${video.color} opacity-60`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E17]/30 via-transparent to-[#0A0E17]/30" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-accent-orange/20 backdrop-blur-xl border border-accent-orange/30 flex items-center justify-center">
                          <video.icon
                            className="text-accent-orange"
                            size={24}
                          />
                        </div>
                        <span className="text-xs glass px-3 py-1.5 rounded-full text-accent-silver backdrop-blur-xl">
                          {video.badge}
                        </span>
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        {video.title}
                      </h3>
                      <p className="text-accent-orange text-lg md:text-xl mb-2">
                        {video.subtitle}
                      </p>
                      <p className="text-accent-silver/80 text-sm md:text-base max-w-2xl mb-6">
                        {video.description}
                      </p>
                      <div className="glass inline-block px-6 py-3 rounded-xl backdrop-blur-xl">
                        <p className="text-xs text-accent-silver/60">
                          {video.stats.label}
                        </p>
                        <p className="text-2xl font-bold gradient-text">
                          {video.stats.value}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute top-4 right-4 flex gap-2 z-20">
                    <button
                      onClick={togglePlayPause}
                      className="glass p-3 rounded-full hover:bg-white/10 transition-all backdrop-blur-xl"
                    >
                      {isPlaying ? (
                        <Pause size={18} className="text-white" />
                      ) : (
                        <Play size={18} className="text-white" />
                      )}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="glass p-3 rounded-full hover:bg-white/10 transition-all backdrop-blur-xl"
                    >
                      {isMuted ? (
                        <VolumeX size={18} className="text-white" />
                      ) : (
                        <Volume2 size={18} className="text-white" />
                      )}
                    </button>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 glass p-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-xl hidden md:block z-20"
                  >
                    <ChevronLeft size={24} className="text-white" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 glass p-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-xl hidden md:block z-20"
                  >
                    <ChevronRight size={24} className="text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex md:hidden gap-2">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => {
                    setCurrentIndex(index);
                    if (isPlaying) startAutoPlay();
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-2 bg-accent-orange"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Desktop Thumbnails */}
            <div className="hidden md:flex items-center gap-3 overflow-x-auto pb-2 max-w-full">
              {videos.map((video, index) => (
                <motion.button
                  key={video.id}
                  onClick={() => {
                    setCurrentIndex(index);
                    if (isPlaying) startAutoPlay();
                  }}
                  className={`flex-shrink-0 relative w-32 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? "border-accent-orange scale-105 shadow-lg shadow-accent-orange/20"
                      : "border-white/10 hover:border-white/30 opacity-70 hover:opacity-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
                    <video.icon size={20} className="text-accent-silver/40" />
                  </div>
                  {loadedVideos[video.id] && (
                    <video
                      src={video.video}
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      style={{ opacity: 0.6 }}
                    />
                  )}
                  <div className="absolute inset-0 flex items-end p-2">
                    <span className="text-[10px] text-white font-medium truncate w-full text-center bg-black/50 rounded px-1 py-0.5">
                      {video.title}
                    </span>
                  </div>
                  {index === currentIndex && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-orange"
                      layoutId="activeThumb"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Scroll Instruction */}
          <motion.p
            className="text-center text-xs text-accent-silver/40 mt-4 flex items-center justify-center gap-2"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronLeft size={14} />
            Swipe or click to navigate videos
            <ChevronRight size={14} />
          </motion.p>
        </div>

        {/* CTA Button */}
        <ScrollReveal>
          <div className="text-center mt-10">
            <motion.button
              className="glass glass-hover px-8 py-4 rounded-full text-sm font-medium inline-flex items-center gap-2 border border-accent-orange/30 hover:border-accent-orange/60"
              whileHover={{ gap: 12 }}
            >
              <Truck size={18} className="text-accent-orange" />
              Book Your Transport Now
              <ArrowRight size={18} className="text-accent-orange" />
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VideoShowcase;
