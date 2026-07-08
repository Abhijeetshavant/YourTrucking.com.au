import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Truck,
  Clock,
  Package,
  Shield,
  Thermometer,
  Gauge,
  AlertCircle,
  Check,
  ArrowRight,
  RefreshCw,
  Download,
  Share2,
} from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import MagneticButton from "../components/ui/MagneticButton";

const Tracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [shipment, setShipment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const mapRef = useRef(null);

  const mockShipment = {
    id: "YT2024AU789456",
    status: "in_transit",
    origin: "Sydney, NSW",
    destination: "Perth, WA",
    currentLocation: "Adelaide, SA",
    eta: "2024-12-25 14:30",
    progress: 62,
    driver: {
      name: "Michael Roberts",
      rating: 4.9,
      phone: "+61 400 123 456",
      photo: "/images/driver.jpg",
    },
    truck: {
      type: "Semi Trailer",
      plate: "YT-789",
      temperature: "22°C",
      speed: "98 km/h",
    },
    timeline: [
      { status: "Order Confirmed", time: "Dec 23, 08:30", completed: true },
      { status: "Pickup Complete", time: "Dec 23, 11:45", completed: true },
      { status: "In Transit", time: "Dec 24, 06:00", completed: true },
      {
        status: "At Distribution Center",
        time: "Dec 24, 18:00",
        completed: false,
      },
      { status: "Out for Delivery", time: "Dec 25, 08:00", completed: false },
      { status: "Delivered", time: "Dec 25, 14:30", completed: false },
    ],
    cargo: {
      type: "Construction Materials",
      weight: "12,500 kg",
      pieces: 24,
      dimensions: "2.4m x 2.4m x 6m",
    },
  };

  const handleTracking = async () => {
    if (!trackingId.trim()) {
      setError("Please enter a tracking ID");
      return;
    }

    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      setShipment(mockShipment);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-primary min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
              Track Your <span className="gradient-text">Shipment</span>
            </h1>
            <p className="text-accent-silver/60 text-lg">
              Real-time visibility of your freight across Australia
            </p>
          </motion.div>

          {/* Tracking Input */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-silver/40"
                    size={20}
                  />
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 focus:border-accent-orange focus:outline-none transition-colors"
                    placeholder="Enter tracking ID (e.g., YT2024AU789456)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleTracking()}
                  />
                </div>
                <MagneticButton
                  variant="primary"
                  size="lg"
                  icon={isLoading ? RefreshCw : Search}
                  onClick={handleTracking}
                  className={isLoading ? "animate-spin" : ""}
                >
                  {isLoading ? "Tracking..." : "Track"}
                </MagneticButton>
              </div>
              {error && (
                <motion.p
                  className="text-red-400 text-sm mt-3 flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={16} />
                  {error}
                </motion.p>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Tracking Results */}
      <AnimatePresence>
        {shipment && (
          <motion.section
            className="pb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              {/* Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    icon: MapPin,
                    label: "Current Location",
                    value: shipment.currentLocation,
                    color: "text-accent-orange",
                  },
                  {
                    icon: Clock,
                    label: "Estimated Arrival",
                    value: shipment.eta,
                    color: "text-accent-blue",
                  },
                  {
                    icon: Package,
                    label: "Cargo Type",
                    value: shipment.cargo.type,
                    color: "text-green-400",
                  },
                  {
                    icon: Shield,
                    label: "Shipment Status",
                    value: shipment.status.replace("_", " ").toUpperCase(),
                    color: "text-yellow-400",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <GlassCard>
                      <item.icon className={`${item.color} mb-3`} size={24} />
                      <p className="text-accent-silver/60 text-sm mb-1">
                        {item.label}
                      </p>
                      <p className="font-heading font-bold">{item.value}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Map & Progress */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Map Placeholder */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <GlassCard className="h-[400px] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-orange/5" />
                      <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="text-center">
                          <MapPin
                            className="text-accent-orange mx-auto mb-4"
                            size={48}
                          />
                          <p className="text-accent-silver/60">
                            Interactive Map Loading...
                          </p>
                          <p className="text-sm text-accent-silver/40 mt-2">
                            {shipment.origin} → {shipment.destination}
                          </p>
                        </div>
                      </div>

                      {/* Route Animation */}
                      <div className="absolute inset-0">
                        <svg className="w-full h-full">
                          <defs>
                            <linearGradient
                              id="routeGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#FF4C00"
                                stopOpacity="0.8"
                              />
                              <stop
                                offset="100%"
                                stopColor="#00C2FF"
                                stopOpacity="0.8"
                              />
                            </linearGradient>
                          </defs>
                          <motion.path
                            d="M 100,200 Q 300,100 500,200 T 900,150"
                            fill="none"
                            stroke="url(#routeGradient)"
                            strokeWidth="3"
                            strokeDasharray="10 10"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                        </svg>
                      </div>
                    </GlassCard>
                  </motion.div>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <GlassCard>
                      <h3 className="font-heading text-xl font-bold mb-6">
                        Delivery Progress
                      </h3>
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block text-accent-orange">
                              {shipment.progress}% Complete
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-accent-silver/60">
                              {shipment.origin} → {shipment.destination}
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-3 text-xs flex rounded-full bg-white/5">
                          <motion.div
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-accent-orange to-accent-blue"
                            initial={{ width: 0 }}
                            animate={{ width: `${shipment.progress}%` }}
                            transition={{ duration: 2, ease: "easeOut" }}
                          />
                        </div>

                        {/* Milestones */}
                        <div className="flex justify-between mt-2">
                          <div className="text-center">
                            <div className="w-3 h-3 bg-accent-orange rounded-full mx-auto" />
                            <span className="text-xs text-accent-silver/40 mt-1 block">
                              Pickup
                            </span>
                          </div>
                          <div className="text-center">
                            <div
                              className={`w-3 h-3 rounded-full mx-auto ${shipment.progress >= 50 ? "bg-accent-orange" : "bg-white/10"}`}
                            />
                            <span className="text-xs text-accent-silver/40 mt-1 block">
                              In Transit
                            </span>
                          </div>
                          <div className="text-center">
                            <div
                              className={`w-3 h-3 rounded-full mx-auto ${shipment.progress >= 100 ? "bg-accent-orange" : "bg-white/10"}`}
                            />
                            <span className="text-xs text-accent-silver/40 mt-1 block">
                              Delivered
                            </span>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>

                  {/* Timeline */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <GlassCard>
                      <h3 className="font-heading text-xl font-bold mb-6">
                        Shipment Timeline
                      </h3>
                      <div className="space-y-6">
                        {shipment.timeline.map((event, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="relative">
                              <div
                                className={`w-3 h-3 rounded-full mt-1.5 ${
                                  event.completed
                                    ? "bg-accent-orange"
                                    : "bg-white/10"
                                }`}
                              />
                              {index < shipment.timeline.length - 1 && (
                                <div
                                  className={`absolute top-4 left-1.5 w-0.5 h-full ${
                                    event.completed
                                      ? "bg-accent-orange/50"
                                      : "bg-white/5"
                                  }`}
                                />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p
                                  className={`font-medium ${
                                    event.completed
                                      ? "text-white"
                                      : "text-accent-silver/40"
                                  }`}
                                >
                                  {event.status}
                                </p>
                                <span className="text-sm text-accent-silver/40">
                                  {event.time}
                                </span>
                              </div>
                              {event.completed && (
                                <Check
                                  className="text-green-400 mt-1"
                                  size={16}
                                />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-8">
                  {/* Driver Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <GlassCard>
                      <h3 className="font-heading text-xl font-bold mb-4">
                        Driver Information
                      </h3>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-orange/30">
                          <img
                            src={shipment.driver.photo}
                            alt={shipment.driver.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold">{shipment.driver.name}</p>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star size={14} className="fill-current" />
                            <span className="text-sm">
                              {shipment.driver.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full glass glass-hover py-2 rounded-xl text-sm text-accent-blue flex items-center justify-center gap-2">
                        Contact Driver
                        <ArrowRight size={16} />
                      </button>
                    </GlassCard>
                  </motion.div>

                  {/* Truck Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <GlassCard>
                      <h3 className="font-heading text-xl font-bold mb-4">
                        Vehicle Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-accent-silver/60">Type</span>
                          <span className="font-medium">
                            {shipment.truck.type}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-accent-silver/60">Plate</span>
                          <span className="font-medium">
                            {shipment.truck.plate}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-accent-silver/60">
                            Temperature
                          </span>
                          <span className="font-medium flex items-center gap-2">
                            <Thermometer
                              size={16}
                              className="text-accent-blue"
                            />
                            {shipment.truck.temperature}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-accent-silver/60">Speed</span>
                          <span className="font-medium flex items-center gap-2">
                            <Gauge size={16} className="text-accent-orange" />
                            {shipment.truck.speed}
                          </span>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>

                  {/* Cargo Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <GlassCard>
                      <h3 className="font-heading text-xl font-bold mb-4">
                        Cargo Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-accent-silver/60">Type</span>
                          <span className="font-medium">
                            {shipment.cargo.type}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-accent-silver/60">Weight</span>
                          <span className="font-medium">
                            {shipment.cargo.weight}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-accent-silver/60">Pieces</span>
                          <span className="font-medium">
                            {shipment.cargo.pieces}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-accent-silver/60">
                            Dimensions
                          </span>
                          <span className="font-medium">
                            {shipment.cargo.dimensions}
                          </span>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>

                  {/* Actions */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-3"
                  >
                    <button className="w-full glass glass-hover py-3 rounded-xl flex items-center justify-center gap-2 text-sm">
                      <Download size={16} />
                      Download Report
                    </button>
                    <button className="w-full glass glass-hover py-3 rounded-xl flex items-center justify-center gap-2 text-sm">
                      <Share2 size={16} />
                      Share Tracking
                    </button>
                    <button className="w-full glass glass-hover py-3 rounded-xl flex items-center justify-center gap-2 text-sm">
                      <RefreshCw size={16} />
                      Refresh Status
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tracking;
