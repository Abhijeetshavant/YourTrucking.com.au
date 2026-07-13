import { useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import {
  Truck,
  ArrowRight,
  Gauge,
  Weight,
  Thermometer,
  Maximize2,
  Shield,
  Star,
  X,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import MagneticButton from "../ui/MagneticButton";

const Fleet = () => {
  const containerRef = useRef(null);
  const [selectedTruck, setSelectedTruck] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  // ✅ FIXED: Use imported image variables, not strings
  const trucks = [
    {
      id: 1,
      name: "Heavy Rigid",
      category: "Heavy Haulage",
      capacity: "25,000 kg",
      range: "1,200 km",
      features: ["GPS Tracking", "Climate Control", "Hydraulic Lift"],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/oversize.jpg", // ✅ Using imported variable
      available: true,
      rating: 4.9,
      specs: {
        engine: "13L Turbo Diesel",
        transmission: "12-Speed Automated Manual",
        fuelType: "Diesel",
        safetyRating: "5 Star ANCAP",
      },
    },
    {
      id: 2,
      name: "Semi Trailer",
      category: "Linehaul",
      capacity: "34,000 kg",
      range: "2,500 km",
      features: ["Aerodynamic Design", "Fuel Efficient", "Advanced Safety"],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/standtruck2.jpg", // ✅ Using imported variable
      available: true,
      rating: 5.0,
      specs: {
        engine: "15L Turbo Diesel",
        transmission: "18-Speed Automated Manual",
        fuelType: "Diesel",
        safetyRating: "5 Star ANCAP",
      },
    },
    {
      id: 3,
      name: "B-Double",
      category: "High Capacity",
      capacity: "46,000 kg",
      range: "2,000 km",
      features: ["Dual Trailer", "Heavy Duty", "Long Distance"],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/frontviewtruck.jpg", // ✅ Using imported variable
      available: false,
      rating: 4.8,
      specs: {
        engine: "15L Turbo Diesel",
        transmission: "18-Speed Automated Manual",
        fuelType: "Diesel",
        safetyRating: "5 Star ANCAP",
      },
    },
    {
      id: 4,
      name: "Road Train",
      category: "Mega Haulage",
      capacity: "85,000 kg",
      range: "3,500 km",
      features: ["4 Trailers", "Mining Spec", "Remote Area"],
      image: "https://ik.imagekit.io/ewj4kpfrr/RoadTrain.png", // ✅ Using imported variable
      available: false,
      rating: 5.0,
      specs: {
        engine: "16L Turbo Diesel",
        transmission: "18-Speed Automated Manual",
        fuelType: "Diesel",
        safetyRating: "5 Star ANCAP",
      },
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-32 bg-primary relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,76,0,0.1),_transparent_50%)]" />

      <div className="max-w-8xl mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
            Our Fleet
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6">
            Engineering in <span className="gradient-text">Motion</span>
          </h2>
          <p className="text-accent-silver/60 text-lg max-w-2xl mx-auto">
            From heavy rigid to quad road trains, our fleet represents the
            pinnacle of transport engineering, ready for Australia's toughest
            conditions.
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ x }}
        >
          {trucks.map((truck, index) => (
            <motion.div
              key={truck.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <GlassCard
                className="cursor-pointer group h-full overflow-hidden"
                tilt={true}
                glow={true}
                onClick={() => setSelectedTruck(truck)}
              >
                {/* Truck Image */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-xl -mx-0 -mt-0">
                  <img
                    src={truck.image}
                    alt={truck.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = "none";
                      e.target.parentElement.style.background =
                        "linear-gradient(135deg, #1a1a2e, #16213e)";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 glass px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Star
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    <span className="text-sm font-medium">{truck.rating}</span>
                  </div>

                  {/* Availability Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        truck.available
                          ? "bg-green-400/20 text-green-400"
                          : "bg-red-400/20 text-red-400"
                      }`}
                    >
                      {truck.available ? "Available" : "Booked"}
                    </span>
                  </div>
                </div>

                {/* Truck Info */}
                <div className="space-y-4 px-1">
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-1">
                      {truck.name}
                    </h3>
                    <p className="text-accent-blue text-sm">{truck.category}</p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-accent-silver">
                      <Weight size={16} className="text-accent-orange" />
                      <span>{truck.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-accent-silver">
                      <Gauge size={16} className="text-accent-blue" />
                      <span>{truck.range}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {truck.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs glass px-3 py-1 rounded-full text-accent-silver"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Availability & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span
                      className={`flex items-center gap-2 text-sm ${
                        truck.available ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          truck.available ? "bg-green-400" : "bg-red-400"
                        } animate-pulse`}
                      />
                      {truck.available ? "Ready to Book" : "Coming Soon"}
                    </span>

                    <motion.button
                      className="text-accent-orange font-medium text-sm flex items-center gap-2 group"
                      whileHover={{ gap: 8 }}
                    >
                      Book Now
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed View Modal */}
        {selectedTruck && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTruck(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              className="relative bg-primary border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTruck(null)}
                className="absolute top-4 right-4 z-10 glass p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Modal Header Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedTruck.image}
                  alt={selectedTruck.name}
                  className="w-full h-full object-cover rounded-t-3xl"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.background =
                      "linear-gradient(135deg, #1a1a2e, #16213e)";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent rounded-t-3xl" />
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-display text-3xl font-bold">
                      {selectedTruck.name}
                    </h3>
                    <p className="text-accent-blue text-lg">
                      {selectedTruck.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star size={20} className="fill-current" />
                      <span className="font-bold text-xl">
                        {selectedTruck.rating}
                      </span>
                    </div>
                    <p className="text-sm text-accent-silver/60">Rating</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Specs */}
                  <div className="space-y-4">
                    <h4 className="font-heading text-xl font-bold">
                      Specifications
                    </h4>
                    <div className="glass p-4 rounded-xl">
                      <Weight className="text-accent-orange mb-2" size={24} />
                      <p className="text-sm text-accent-silver">Capacity</p>
                      <p className="font-bold text-lg">
                        {selectedTruck.capacity}
                      </p>
                    </div>
                    <div className="glass p-4 rounded-xl">
                      <Gauge className="text-accent-blue mb-2" size={24} />
                      <p className="text-sm text-accent-silver">Range</p>
                      <p className="font-bold text-lg">{selectedTruck.range}</p>
                    </div>
                    {selectedTruck.specs && (
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(selectedTruck.specs).map(
                          ([key, value]) => (
                            <div key={key} className="glass p-3 rounded-xl">
                              <p className="text-xs text-accent-silver/60 capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </p>
                              <p className="font-bold text-sm">{value}</p>
                            </div>
                          ),
                        )}
                      </div>
                    )}
                  </div>

                  {/* Features & CTA */}
                  <div className="space-y-4">
                    <h4 className="font-heading text-xl font-bold">Features</h4>
                    <div className="space-y-2">
                      {selectedTruck.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 glass p-3 rounded-xl"
                        >
                          <Shield size={16} className="text-green-400" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <MagneticButton
                      variant="primary"
                      icon={ArrowRight}
                      className="w-full mt-4"
                    >
                      Request {selectedTruck.name}
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Fleet;
