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

  const trucks = [
    {
      id: 1,
      name: "Heavy Rigid",
      category: "Heavy Haulage",
      capacity: "25,000 kg",
      range: "1,200 km",
      features: ["GPS Tracking", "Climate Control", "Hydraulic Lift"],
      image: "/images/trucks/heavy-rigid.jpg",
      available: true,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Semi Trailer",
      category: "Linehaul",
      capacity: "34,000 kg",
      range: "2,500 km",
      features: ["Aerodynamic Design", "Fuel Efficient", "Advanced Safety"],
      image: "/images/trucks/semi-trailer.jpg",
      available: true,
      rating: 5.0,
    },
    {
      id: 3,
      name: "B-Double",
      category: "High Capacity",
      capacity: "46,000 kg",
      range: "2,000 km",
      features: ["Dual Trailer", "Heavy Duty", "Long Distance"],
      image: "/images/trucks/b-double.jpg",
      available: false,
      rating: 4.8,
    },
    {
      id: 4,
      name: "Road Train",
      category: "Mega Haulage",
      capacity: "85,000 kg",
      range: "3,500 km",
      features: ["4 Trailers", "Mining Spec", "Remote Area"],
      image: "/images/trucks/road-train.jpg",
      available: false,
      rating: 5.0,
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
                className="cursor-pointer group h-full"
                tilt={true}
                glow={true}
                onClick={() => setSelectedTruck(truck)}
              >
                {/* Truck Image */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                  <img
                    src={truck.image}
                    alt={truck.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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
                </div>

                {/* Truck Info */}
                <div className="space-y-4">
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
                      {truck.available ? "Available" : "Not available"}
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
              className="relative bg-primary border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedTruck.image}
                    alt={selectedTruck.name}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="font-display text-3xl font-bold">
                    {selectedTruck.name}
                  </h3>
                  <p className="text-accent-blue text-lg">
                    {selectedTruck.category}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass p-4 rounded-xl">
                      <Weight className="text-accent-orange mb-2" size={24} />
                      <p className="text-sm text-accent-silver">Capacity</p>
                      <p className="font-bold">{selectedTruck.capacity}</p>
                    </div>
                    <div className="glass p-4 rounded-xl">
                      <Gauge className="text-accent-blue mb-2" size={24} />
                      <p className="text-sm text-accent-silver">Range</p>
                      <p className="font-bold">{selectedTruck.range}</p>
                    </div>
                  </div>

                  <MagneticButton
                    variant="primary"
                    icon={ArrowRight}
                    className="w-full"
                  >
                    Request This Vehicle
                  </MagneticButton>
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
