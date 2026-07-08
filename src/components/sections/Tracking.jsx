import { useState, useRef, useEffect } from "react";
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
  Navigation,
  Phone,
  Mail,
  ArrowRight,
  RefreshCw,
  Download,
  Share2,
  Star,
  AlertCircle,
  CheckCircle,
  X,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import MagneticButton from "../ui/MagneticButton";
import ScrollReveal from "../ui/ScrollReveal";

const Tracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [shipment, setShipment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDemo, setShowDemo] = useState(true);

  const demoShipment = {
    id: "YT2024AU789456",
    status: "in_transit",
    origin: "Sydney, NSW",
    destination: "Perth, WA",
    currentLocation: {
      address: "Crossing the Nullarbor, SA",
      coordinates: { lat: -31.5, lng: 130.5 },
      updatedAt: new Date().toISOString(),
    },
    progress: 62,
    eta: "2024-12-25T14:30:00",
    driver: {
      name: "Michael Roberts",
      phone: "+61 400 123 456",
      rating: 4.9,
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      status: "Driving",
    },
    vehicle: {
      type: "Semi Trailer",
      plate: "YT-789",
      speed: "98 km/h",
      temperature: "22°C",
      fuelLevel: "75%",
    },
    timeline: [
      {
        status: "Order Confirmed",
        timestamp: "2024-12-23T08:30:00",
        completed: true,
        description: "Booking confirmed and truck assigned",
      },
      {
        status: "Pickup Complete",
        timestamp: "2024-12-23T11:45:00",
        completed: true,
        description: "Cargo loaded at Sydney warehouse",
      },
      {
        status: "In Transit",
        timestamp: "2024-12-24T06:00:00",
        completed: true,
        description: "Vehicle departed towards Perth",
      },
      {
        status: "Rest Stop",
        timestamp: "2024-12-24T22:00:00",
        completed: true,
        description: "Mandatory driver rest period",
      },
      {
        status: "At Distribution Center",
        timestamp: "2024-12-25T10:00:00",
        completed: false,
        description: "Arrival at Perth distribution center",
      },
      {
        status: "Out for Delivery",
        timestamp: "2024-12-25T12:00:00",
        completed: false,
        description: "Final delivery to destination",
      },
      {
        status: "Delivered",
        timestamp: "2024-12-25T14:30:00",
        completed: false,
        description: "Cargo successfully delivered",
      },
    ],
    cargo: {
      type: "Construction Materials",
      weight: "12,500 kg",
      pieces: 24,
      dimensions: "2.4m x 2.4m x 6m",
      value: "$45,000",
      insuranceStatus: "Covered",
    },
    documents: [
      { name: "Bill of Lading", type: "PDF", size: "245 KB" },
      { name: "Insurance Certificate", type: "PDF", size: "180 KB" },
      { name: "Customs Declaration", type: "PDF", size: "320 KB" },
    ],
  };

  const handleTracking = async (e) => {
    e.preventDefault();

    if (!trackingId.trim()) {
      setError("Please enter a tracking ID");
      return;
    }

    setIsLoading(true);
    setError("");
    setShowDemo(false);

    // Simulate API call
    setTimeout(() => {
      if (
        trackingId.toUpperCase() === "YT2024AU789456" ||
        trackingId.toUpperCase() === "DEMO"
      ) {
        setShipment(demoShipment);
        setError("");
      } else {
        setShipment(null);
        setError('Tracking ID not found. Try "DEMO" for a demonstration.');
      }
      setIsLoading(false);
    }, 1500);
  };

  const loadDemo = () => {
    setTrackingId("DEMO");
    setShowDemo(true);
    setShipment(demoShipment);
  };

  const getStatusColor = (status) => {
    const colors = {
      order_confirmed: "bg-blue-400/20 text-blue-400",
      pickup_complete: "bg-yellow-400/20 text-yellow-400",
      in_transit: "bg-accent-orange/20 text-accent-orange",
      rest_stop: "bg-purple-400/20 text-purple-400",
      at_distribution: "bg-cyan-400/20 text-cyan-400",
      out_for_delivery: "bg-green-400/20 text-green-400",
      delivered: "bg-green-400/20 text-green-400",
    };
    return colors[status] || "bg-gray-400/20 text-gray-400";
  };

  return (
    <section
      className="py-24 bg-primary relative overflow-hidden"
      id="tracking"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(255,76,0,0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
              Track & Trace
            </span>
            <h2 className="font-display text-5xl font-bold mt-4 mb-6">
              Real-Time <span className="gradient-text">Shipment Tracking</span>
            </h2>
            <p className="text-accent-silver/60 text-lg max-w-2xl mx-auto">
              Monitor your freight in real-time with GPS precision. Know exactly
              where your cargo is and when it will arrive.
            </p>
          </div>
        </ScrollReveal>

        {/* Tracking Input */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto mb-12">
            <GlassCard>
              <form onSubmit={handleTracking}>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
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
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <RefreshCw className="animate-spin" size={20} />
                    ) : (
                      "Track"
                    )}
                  </MagneticButton>
                </div>
              </form>

              {error && (
                <motion.div
                  className="mt-4 p-4 rounded-xl bg-red-400/10 border border-red-400/30 flex items-start gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle
                    className="text-red-400 flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <div>
                    <p className="text-red-400 text-sm">{error}</p>
                    {!shipment && (
                      <button
                        onClick={loadDemo}
                        className="text-accent-orange text-sm mt-2 underline hover:no-underline"
                      >
                        Try demo shipment
                      </button>
                    )}
                  </div>
                </motion.div>
              )}

              {!shipment && !error && (
                <div className="mt-4 text-center">
                  <button
                    onClick={loadDemo}
                    className="text-accent-blue text-sm underline hover:no-underline"
                  >
                    Load demo tracking for demonstration
                  </button>
                </div>
              )}
            </GlassCard>
          </div>
        </ScrollReveal>

        {/* Tracking Results */}
        <AnimatePresence>
          {shipment && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Status Overview Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  {
                    icon: MapPin,
                    label: "Current Location",
                    value: shipment.currentLocation.address,
                    color: "text-accent-orange",
                  },
                  {
                    icon: Clock,
                    label: "ETA",
                    value: new Date(shipment.eta).toLocaleString(),
                    color: "text-accent-blue",
                  },
                  {
                    icon: Truck,
                    label: "Vehicle",
                    value: `${shipment.vehicle.type} (${shipment.vehicle.plate})`,
                    color: "text-green-400",
                  },
                  {
                    icon: Shield,
                    label: "Status",
                    value: shipment.status.replace(/_/g, " ").toUpperCase(),
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
                      <item.icon className={`${item.color} mb-2`} size={20} />
                      <p className="text-xs text-accent-silver/60 mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold truncate">{item.value}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left - Map & Progress */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Map */}
                  <GlassCard className="h-[300px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-orange/5">
                      {/* Simulated map with grid */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                          backgroundSize: "40px 40px",
                        }}
                      />

                      {/* Route line */}
                      <svg className="absolute inset-0 w-full h-full">
                        <motion.path
                          d="M 50,150 Q 200,50 400,150 T 700,100"
                          fill="none"
                          stroke="url(#routeGrad)"
                          strokeWidth="3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2 }}
                        />
                        <defs>
                          <linearGradient id="routeGrad">
                            <stop offset="0%" stopColor="#FF4C00" />
                            <stop offset="100%" stopColor="#00C2FF" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Truck icon animation */}
                      <motion.div
                        className="absolute"
                        style={{ left: "50%", top: "40%" }}
                        animate={{
                          x: [0, 100, 200, 300],
                          y: [0, -50, 0, -30],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                      >
                        <Truck className="text-accent-orange" size={32} />
                      </motion.div>
                    </div>

                    {/* Map overlay info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <GlassCard className="p-3">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <Gauge size={14} className="text-accent-orange" />
                            <span>{shipment.vehicle.speed}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Thermometer
                              size={14}
                              className="text-accent-blue"
                            />
                            <span>{shipment.vehicle.temperature}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Navigation size={14} className="text-green-400" />
                            <span>Heading West</span>
                          </div>
                        </div>
                      </GlassCard>
                    </div>
                  </GlassCard>

                  {/* Progress Bar */}
                  <GlassCard>
                    <h3 className="font-heading text-lg font-bold mb-4">
                      Delivery Progress
                    </h3>
                    <div className="relative">
                      <div className="flex justify-between text-sm mb-2">
                        <span>{shipment.origin}</span>
                        <span className="text-accent-orange font-bold">
                          {shipment.progress}%
                        </span>
                        <span>{shipment.destination}</span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent-orange via-accent-orange to-accent-blue rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${shipment.progress}%` }}
                          transition={{ duration: 2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </GlassCard>

                  {/* Timeline */}
                  <GlassCard>
                    <h3 className="font-heading text-lg font-bold mb-6">
                      Shipment Timeline
                    </h3>
                    <div className="space-y-6">
                      {shipment.timeline.map((event, index) => (
                        <motion.div
                          key={index}
                          className="flex gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
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
                          <div className="flex-1 pb-6">
                            <div className="flex items-start justify-between">
                              <div>
                                <p
                                  className={`font-medium ${
                                    event.completed
                                      ? "text-white"
                                      : "text-accent-silver/40"
                                  }`}
                                >
                                  {event.status}
                                </p>
                                <p className="text-sm text-accent-silver/60 mt-1">
                                  {event.description}
                                </p>
                              </div>
                              <div className="text-right">
                                <span className="text-xs text-accent-silver/40">
                                  {new Date(event.timestamp).toLocaleString()}
                                </span>
                                {event.completed && (
                                  <CheckCircle
                                    className="text-green-400 ml-auto mt-1"
                                    size={16}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </div>

                {/* Right - Details */}
                <div className="space-y-6">
                  {/* Driver Info */}
                  <GlassCard>
                    <h3 className="font-heading text-lg font-bold mb-4">
                      Driver
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
                        <div className="flex items-center gap-1 text-yellow-400 text-sm">
                          <Star size={14} className="fill-current" />
                          <span>{shipment.driver.rating}</span>
                        </div>
                        <span className="text-xs text-green-400">
                          {shipment.driver.status}
                        </span>
                      </div>
                    </div>
                    <button className="w-full glass glass-hover py-2 rounded-lg text-sm flex items-center justify-center gap-2">
                      <Phone size={14} />
                      Contact Driver
                    </button>
                  </GlassCard>

                  {/* Vehicle Info */}
                  <GlassCard>
                    <h3 className="font-heading text-lg font-bold mb-4">
                      Vehicle
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-accent-silver/60">Type</span>
                        <span>{shipment.vehicle.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-accent-silver/60">Plate</span>
                        <span>{shipment.vehicle.plate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-accent-silver/60">Speed</span>
                        <span>{shipment.vehicle.speed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-accent-silver/60">
                          Temperature
                        </span>
                        <span>{shipment.vehicle.temperature}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-accent-silver/60">
                          Fuel Level
                        </span>
                        <span>{shipment.vehicle.fuelLevel}</span>
                      </div>
                    </div>
                  </GlassCard>

                  {/* Cargo Info */}
                  <GlassCard>
                    <h3 className="font-heading text-lg font-bold mb-4">
                      Cargo
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-accent-silver/60">Type</span>
                        <span>{shipment.cargo.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-accent-silver/60">Weight</span>
                        <span>{shipment.cargo.weight}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-accent-silver/60">Pieces</span>
                        <span>{shipment.cargo.pieces}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-accent-silver/60">Value</span>
                        <span>{shipment.cargo.value}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-accent-silver/60">Insurance</span>
                        <span className="text-green-400">
                          {shipment.cargo.insuranceStatus}
                        </span>
                      </div>
                    </div>
                  </GlassCard>

                  {/* Documents */}
                  <GlassCard>
                    <h3 className="font-heading text-lg font-bold mb-4">
                      Documents
                    </h3>
                    <div className="space-y-2">
                      {shipment.documents.map((doc, index) => (
                        <button
                          key={index}
                          className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <Download size={14} className="text-accent-blue" />
                            <span className="text-sm">{doc.name}</span>
                          </div>
                          <span className="text-xs text-accent-silver/40">
                            {doc.size}
                          </span>
                        </button>
                      ))}
                    </div>
                  </GlassCard>

                  {/* Actions */}
                  <div className="space-y-2">
                    <button className="w-full glass glass-hover py-3 rounded-xl flex items-center justify-center gap-2 text-sm">
                      <RefreshCw size={16} />
                      Refresh Status
                    </button>
                    <button className="w-full glass glass-hover py-3 rounded-xl flex items-center justify-center gap-2 text-sm">
                      <Share2 size={16} />
                      Share Tracking Link
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Tracking;
