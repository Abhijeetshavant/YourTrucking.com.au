import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Truck,
  Clock,
  Shield,
  Search,
  ArrowRight,
  Gauge,
  Navigation,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import MagneticButton from "../ui/MagneticButton";
import ScrollReveal from "../ui/ScrollReveal";

const LiveTrackingPreview = () => {
  const [trackingId, setTrackingId] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Animated Map Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,76,0,0.5) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, rgba(0,194,255,0.5) 0%, transparent 50%)`,
            animation: "pulse 4s ease-in-out infinite",
          }}
        />

        {/* Animated Routes */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M 200,200 Q 400,100 600,200 T 1000,150"
            fill="none"
            stroke="#FF4C00"
            strokeWidth="2"
            strokeDasharray="10 10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.path
            d="M 100,300 Q 300,400 500,300 T 900,350"
            fill="none"
            stroke="#00C2FF"
            strokeWidth="2"
            strokeDasharray="10 10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, delay: 2, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Tracking Interface */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
                Live Tracking
              </span>
              <h2 className="font-display text-5xl font-bold mt-4 mb-6">
                Track Your <span className="gradient-text">Shipment</span> in
                Real-Time
              </h2>
              <p className="text-accent-silver/60 text-lg mb-8 leading-relaxed">
                Know exactly where your freight is at every moment. Our advanced
                GPS tracking system provides live updates, estimated arrival
                times, and detailed route information.
              </p>

              <GlassCard>
                <form onSubmit={handleTrack} className="space-y-4">
                  <div className="relative">
                    <Search
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-silver/40"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Enter tracking ID (e.g., YT2024AU789456)"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 focus:border-accent-orange focus:outline-none transition-colors"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                    />
                  </div>
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    className="w-full"
                  >
                    Track Now
                  </MagneticButton>
                </form>

                {isTracking && (
                  <motion.div
                    className="mt-6 space-y-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="p-4 rounded-xl bg-green-400/10 border border-green-400/30">
                      <div className="flex items-center gap-3 mb-3">
                        <Truck className="text-green-400" size={24} />
                        <div>
                          <p className="font-bold">Shipment Found</p>
                          <p className="text-sm text-green-400">In Transit</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-accent-silver/60">
                            Current Location
                          </span>
                          <span>Adelaide, SA</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-accent-silver/60">
                            Estimated Arrival
                          </span>
                          <span>Dec 25, 14:30</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-accent-silver/60">
                            Progress
                          </span>
                          <span className="text-accent-orange">62%</span>
                        </div>
                      </div>
                      {/* Progress Bar */}
                      <div className="mt-3 h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent-orange to-accent-blue rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "62%" }}
                          transition={{ duration: 1.5 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </GlassCard>

              {/* Feature Icons */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { icon: Gauge, label: "Real-time GPS" },
                  { icon: Shield, label: "Secure Data" },
                  { icon: Clock, label: "Live ETA" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon
                      className="text-accent-orange mx-auto mb-2"
                      size={24}
                    />
                    <p className="text-xs text-accent-silver/60">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Visual Dashboard Preview */}
          <ScrollReveal direction="right">
            <div className="relative">
              <GlassCard className="relative overflow-hidden">
                {/* Dashboard Mockup */}
                <div className="space-y-6">
                  {/* Map Area */}
                  <div className="h-64 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-orange/10 relative overflow-hidden">
                    <div className="absolute inset-0">
                      {/* Simulated map grid */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                          backgroundSize: "30px 30px",
                        }}
                      />

                      {/* Animated route */}
                      <svg className="absolute inset-0 w-full h-full">
                        <motion.circle
                          cx="30%"
                          cy="40%"
                          r="8"
                          fill="#FF4C00"
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.circle
                          cx="70%"
                          cy="60%"
                          r="8"
                          fill="#00C2FF"
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.5, 0] }}
                          transition={{
                            duration: 2,
                            delay: 1,
                            repeat: Infinity,
                          }}
                        />
                        <motion.line
                          x1="30%"
                          y1="40%"
                          x2="70%"
                          y2="60%"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          strokeDasharray="10 10"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#FF4C00" />
                            <stop offset="100%" stopColor="#00C2FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Map Overlay Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <GlassCard className="p-3">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Truck className="text-accent-orange" size={16} />
                            <span>Vehicle YT-789</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Navigation
                              className="text-accent-blue"
                              size={16}
                            />
                            <span>98 km/h</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="text-green-400" size={16} />
                            <span>ETA 14:30</span>
                          </div>
                        </div>
                      </GlassCard>
                    </div>
                  </div>

                  {/* Shipment Info */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                      <span className="text-sm text-accent-silver/60">
                        From
                      </span>
                      <span className="text-sm font-medium">Sydney, NSW</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                      <span className="text-sm text-accent-silver/60">To</span>
                      <span className="text-sm font-medium">Perth, WA</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                      <span className="text-sm text-accent-silver/60">
                        Cargo
                      </span>
                      <span className="text-sm font-medium">
                        Construction Materials
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-medium">
                    Live Tracking Active
                  </span>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default LiveTrackingPreview;
