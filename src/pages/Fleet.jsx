import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Search,
  Filter,
  ArrowRight,
  Check,
  X,
  Gauge,
  Weight,
  Maximize2,
  Thermometer,
  Shield,
  Star,
  Clock,
  MapPin,
  Phone,
  Calendar,
} from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import MagneticButton from "../components/ui/MagneticButton";
import ScrollReveal from "../components/ui/ScrollReveal";

const Fleet = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("capacity");

  const vehicles = [
    {
      id: 1,
      name: "Light Commercial",
      type: "light_commercial",
      category: "Commercial",
      capacity: "4,500 kg",
      range: "800 km",
      available: 45,
      total: 50,
      features: [
        "City Delivery",
        "Fuel Efficient",
        "Easy Loading",
        "GPS Tracking",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/trucking1.jpg",
      dimensions: { length: "6m", width: "2.4m", height: "2.8m" },
      rating: 4.8,
      description:
        "Perfect for urban deliveries and small to medium cargo. Efficient, maneuverable, and reliable.",
      specs: {
        engine: "4.5L Turbo Diesel",
        transmission: "6-Speed Automatic",
        fuelType: "Diesel",
        safetyRating: "5 Star ANCAP",
      },
    },
    {
      id: 2,
      name: "Medium Rigid",
      type: "medium_rigid",
      category: "Rigid",
      capacity: "12,000 kg",
      range: "1,000 km",
      available: 30,
      total: 35,
      features: [
        "Regional Transport",
        "Tail Lift",
        "GPS Tracking",
        "Air Suspension",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/standtruck2.jpg",
      dimensions: { length: "8m", width: "2.4m", height: "3.2m" },
      rating: 4.9,
      description:
        "Ideal for regional deliveries and medium-sized cargo. Versatile and dependable for various applications.",
      specs: {
        engine: "6.7L Turbo Diesel",
        transmission: "8-Speed Automatic",
        fuelType: "Diesel",
        safetyRating: "5 Star ANCAP",
      },
    },
    {
      id: 3,
      name: "Heavy Rigid",
      type: "heavy_rigid",
      category: "Rigid",
      capacity: "25,000 kg",
      range: "1,200 km",
      available: 25,
      total: 30,
      features: ["Heavy Duty", "Crane Compatible", "Long Range", "Sleeper Cab"],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/oversize.jpg",
      dimensions: { length: "12m", width: "2.5m", height: "3.8m" },
      rating: 5.0,
      description:
        "Built for heavy loads and demanding conditions. Perfect for construction and industrial applications.",
      specs: {
        engine: "13L Turbo Diesel",
        transmission: "12-Speed Automated Manual",
        fuelType: "Diesel",
        safetyRating: "5 Star ANCAP",
      },
    },
    {
      id: 4,
      name: "Semi Trailer",
      type: "semi_trailer",
      category: "Articulated",
      capacity: "34,000 kg",
      range: "2,500 km",
      available: 40,
      total: 45,
      features: [
        "Interstate Capable",
        "Aerodynamic",
        "Sleeper Cab",
        "Advanced Safety",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/interstate.png",
      dimensions: { length: "19m", width: "2.5m", height: "4.2m" },
      rating: 4.9,
      description:
        "The backbone of interstate freight. Efficient, powerful, and designed for long-haul operations.",
      specs: {
        engine: "15L Turbo Diesel",
        transmission: "18-Speed Automated Manual",
        fuelType: "Diesel",
        safetyRating: "5 Star ANCAP",
      },
    },
    {
      id: 5,
      name: "B-Double",
      type: "b_double",
      category: "Articulated",
      capacity: "46,000 kg",
      range: "2,000 km",
      available: 20,
      total: 25,
      features: [
        "High Volume",
        "Fuel Efficient",
        "Advanced Safety",
        "Double Trailer",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/frontviewtruck.jpg",
      dimensions: { length: "26m", width: "2.5m", height: "4.3m" },
      rating: 4.8,
      description:
        "Maximum efficiency for high-volume freight. Two trailers for double the capacity.",
      specs: {
        engine: "15L Turbo Diesel",
        transmission: "18-Speed Automated Manual",
        fuelType: "Diesel",
        safetyRating: "5 Star ANCAP",
      },
    },
    {
      id: 6,
      name: "Road Train",
      type: "road_train",
      category: "Articulated",
      capacity: "85,000 kg",
      range: "3,500 km",
      available: 15,
      total: 18,
      features: [
        "Maximum Capacity",
        "Remote Areas",
        "Mining Spec",
        "Multiple Trailers",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/RoadTrain.png",
      dimensions: { length: "53m", width: "2.5m", height: "4.5m" },
      rating: 5.0,
      description:
        "The ultimate heavy haulage solution. Built for Australia's toughest conditions and longest routes.",
      specs: {
        engine: "16L Turbo Diesel",
        transmission: "18-Speed Automated Manual",
        fuelType: "Diesel",
        safetyRating: "5 Star ANCAP",
      },
    },
    {
      id: 7,
      name: "Flatbed Truck",
      type: "flatbed",
      category: "Specialized",
      capacity: "30,000 kg",
      range: "1,500 km",
      available: 18,
      total: 22,
      features: ["Open Deck", "Side Loading", "Versatile", "Crane Compatible"],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/heavyload.jpg",
      dimensions: { length: "13m", width: "2.5m", height: "1.5m" },
      rating: 4.7,
      description:
        "Versatile open-deck transport for oversized and irregularly shaped cargo.",
      specs: {
        engine: "13L Turbo Diesel",
        transmission: "12-Speed Automated Manual",
        fuelType: "Diesel",
        safetyRating: "5 Star ANCAP",
      },
    },
    {
      id: 8,
      name: "Refrigerated Truck",
      type: "refrigerated",
      category: "Specialized",
      capacity: "24,000 kg",
      range: "1,800 km",
      available: 25,
      total: 28,
      features: [
        "Temperature Control",
        "-25°C to +25°C",
        "Real-time Monitoring",
        "Multi-zone",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/frontviewtruck.jpg",
      dimensions: { length: "14m", width: "2.5m", height: "4m" },
      rating: 4.9,
      description:
        "State-of-the-art refrigerated transport for temperature-sensitive cargo.",
      specs: {
        engine: "13L Turbo Diesel",
        transmission: "12-Speed Automated Manual",
        fuelType: "Diesel",
        safetyRating: "5 Star ANCAP",
      },
    },
  ];

  const categories = [
    "all",
    "Commercial",
    "Rigid",
    "Articulated",
    "Specialized",
  ];

  const filteredVehicles = vehicles
    .filter((vehicle) => {
      const matchesCategory =
        filterType === "all" ||
        vehicle.category.toLowerCase() === filterType.toLowerCase();
      const matchesSearch =
        vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.features.some((f) =>
          f.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "capacity")
        return parseInt(b.capacity) - parseInt(a.capacity);
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "availability") return b.available - a.available;
      return 0;
    });

  return (
    <div className="bg-primary min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
          {/* ✅ FIXED: Using direct CDN URL instead of undefined variable */}
          <img
            src="https://ik.imagekit.io/ewj4kpfrr/RoadTrain.png"
            alt="Fleet"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
              Our Fleet
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mt-4 mb-6">
              Engineering in <span className="gradient-text">Motion</span>
            </h1>
            <p className="text-accent-silver/60 text-lg max-w-3xl mx-auto">
              Explore our comprehensive fleet of modern trucks, each engineered
              for specific transport needs across Australia's diverse landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 border-b border-white/5 sticky top-20 z-30 bg-primary/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilterType(category)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                    filterType === category
                      ? "bg-accent-orange text-white"
                      : "glass glass-hover text-accent-silver/80"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-accent-silver/40"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search fleet..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 focus:border-accent-orange focus:outline-none transition-colors text-sm text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 focus:border-accent-orange focus:outline-none text-sm text-white"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="capacity">Sort by Capacity</option>
                <option value="rating">Sort by Rating</option>
                <option value="availability">Sort by Availability</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle, index) => (
              <ScrollReveal key={vehicle.id} delay={index * 0.05}>
                <motion.div
                  onClick={() => setSelectedVehicle(vehicle)}
                  className="cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <GlassCard className="h-full group overflow-hidden" tilt glow>
                    <div className="relative h-56 overflow-hidden rounded-xl mb-6">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.style.background =
                            "linear-gradient(135deg, #1a1a2e, #16213e)";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${
                            vehicle.available > 10
                              ? "bg-green-400/20 text-green-400"
                              : vehicle.available > 0
                                ? "bg-yellow-400/20 text-yellow-400"
                                : "bg-red-400/20 text-red-400"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${vehicle.available > 10 ? "bg-green-400" : vehicle.available > 0 ? "bg-yellow-400" : "bg-red-400"} animate-pulse`}
                          />
                          {vehicle.available} Available
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="glass px-3 py-1.5 rounded-full flex items-center gap-1.5">
                          <Star
                            className="text-yellow-400 fill-yellow-400"
                            size={14}
                          />
                          <span className="text-sm font-medium">
                            {vehicle.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-accent-orange transition-colors">
                          {vehicle.name}
                        </h3>
                        <p className="text-accent-silver/60 text-sm">
                          {vehicle.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                          <Weight
                            className="text-accent-orange flex-shrink-0"
                            size={16}
                          />
                          <span className="text-xs text-accent-silver">
                            {vehicle.capacity}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                          <Gauge
                            className="text-accent-blue flex-shrink-0"
                            size={16}
                          />
                          <span className="text-xs text-accent-silver">
                            {vehicle.range}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                          <Maximize2
                            className="text-green-400 flex-shrink-0"
                            size={16}
                          />
                          <span className="text-xs text-accent-silver">
                            {vehicle.dimensions.length}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                          <Shield
                            className="text-purple-400 flex-shrink-0"
                            size={16}
                          />
                          <span className="text-xs text-accent-silver">
                            {vehicle.specs.safetyRating}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.slice(0, 3).map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs glass px-3 py-1 rounded-full text-accent-silver/80"
                          >
                            {feature}
                          </span>
                        ))}
                        {vehicle.features.length > 3 && (
                          <span className="text-xs glass px-3 py-1 rounded-full text-accent-blue">
                            +{vehicle.features.length - 3} more
                          </span>
                        )}
                      </div>

                      <motion.button
                        className="w-full glass glass-hover py-3 rounded-xl text-sm font-medium text-accent-orange flex items-center justify-center gap-2"
                        whileHover={{ gap: 10 }}
                      >
                        View Details
                        <ArrowRight size={16} />
                      </motion.button>
                    </div>
                  </GlassCard>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Truck className="text-accent-silver/20 mx-auto mb-4" size={64} />
              <p className="text-accent-silver/60 text-lg">
                No vehicles match your criteria
              </p>
              <button
                onClick={() => {
                  setFilterType("all");
                  setSearchQuery("");
                }}
                className="text-accent-orange mt-4 underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Vehicle Detail Modal */}
      <AnimatePresence>
        {selectedVehicle && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVehicle(null)}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative bg-primary border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVehicle(null)}
                className="absolute top-4 right-4 z-10 glass p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative h-72 md:h-96">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  className="w-full h-full object-cover rounded-t-3xl"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.background =
                      "linear-gradient(135deg, #1a1a2e, #16213e)";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent rounded-t-3xl" />
              </div>

              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <span className="text-accent-blue text-sm">
                      {selectedVehicle.category}
                    </span>
                    <h2 className="font-display text-3xl font-bold mt-1">
                      {selectedVehicle.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <Star
                        className="text-yellow-400 fill-yellow-400"
                        size={18}
                      />
                      <span className="font-medium">
                        {selectedVehicle.rating}
                      </span>
                      <span className="text-accent-silver/40">•</span>
                      <span className="text-accent-silver/60">
                        {selectedVehicle.available} of {selectedVehicle.total}{" "}
                        available
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-accent-silver/80 mb-8 text-lg leading-relaxed">
                  {selectedVehicle.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-4">
                      Specifications
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(selectedVehicle.specs).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between items-center p-3 rounded-xl bg-white/5"
                          >
                            <span className="text-accent-silver/60 capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-4">
                      Dimensions & Capacity
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(selectedVehicle.dimensions).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between items-center p-3 rounded-xl bg-white/5"
                          >
                            <span className="text-accent-silver/60 capitalize">
                              {key}
                            </span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ),
                      )}
                      <div className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                        <span className="text-accent-silver/60">Capacity</span>
                        <span className="font-medium">
                          {selectedVehicle.capacity}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                        <span className="text-accent-silver/60">Range</span>
                        <span className="font-medium">
                          {selectedVehicle.range}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-heading text-xl font-bold mb-4">
                    Features
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {selectedVehicle.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 rounded-xl bg-white/5"
                      >
                        <Check
                          className="text-green-400 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    icon={Calendar}
                    className="flex-1"
                  >
                    Book This Vehicle
                  </MagneticButton>
                  <MagneticButton variant="secondary" size="lg" icon={Phone}>
                    Call Now
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fleet Stats */}
      {/* <section className="py-16 bg-primary-200/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Total Vehicles", value: "2500+", icon: Truck },
              { label: "Average Rating", value: "4.9/5", icon: Star },
              { label: "Service Areas", value: "100+ Cities", icon: MapPin },
              { label: "Availability", value: "24/7", icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard>
                  <stat.icon
                    className="text-accent-orange mx-auto mb-3"
                    size={32}
                  />
                  <div className="font-display text-3xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-accent-silver/60">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Fleet;
