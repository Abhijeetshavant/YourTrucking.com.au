import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Package,
  Shield,
  Clock,
  Globe,
  Warehouse,
  Factory,
  Ship,
  Flame,
  Thermometer,
  Zap,
  Wrench,
  ArrowRight,
  Check,
  Star,
  Info,
  X,
  Building2,
  Landmark,
  HardHat,
} from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import MagneticButton from "../components/ui/MagneticButton";

// // Import all service images from assets
// import trucking1 from "../assets/trucking1.jpg";
// import interstate from "../assets/interstate.png";
// import frontviewtruck from "../assets/frontviewtruck.jpg";
// import heavyload from "../assets/heavyload.jpg";
// import muncipleConsole from "../assets/muncipalConsole.jpg";import warehouseloading from "../assets/warehouse.jpg"; // or use any available image

// import government from "../assets/government.jpg";
// import oversize from "../assets/oversize.jpg";
// import standtruck2 from "../assets/standtruck2.jpg";
// import roadTrain from "../assets/roadTrain.jpg";
// // Add this if you have a warehouse loading image

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const containerRef = useRef(null);

  const services = [
    {
      id: "local-transport",
      icon: Truck,
      title: "Local Transport",
      category: "General Freight",
      description:
        "Same-day and next-day delivery within metropolitan and regional areas with real-time GPS tracking.",
      features: [
        "Same-day delivery options",
        "Real-time GPS tracking",
        "Dedicated account manager",
        "Flexible scheduling",
        "Proof of delivery",
        "Competitive local rates",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/trucking1.jpg",
      stats: { deliveries: "50,000+", satisfaction: "99%", avgTime: "4 hours" },
      badge: "Popular",
    },
    {
      id: "interstate-freight",
      icon: Globe,
      title: "Interstate Freight",
      category: "Linehaul",
      description:
        "Reliable interstate transport connecting all major Australian cities with daily departures.",
      features: [
        "Daily departures",
        "Express and economy options",
        "Cross-docking facilities",
        "Temperature controlled",
        "Multi-modal solutions",
        "Nationwide coverage",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/interstate.png",
      stats: {
        deliveries: "25,000+",
        satisfaction: "98%",
        avgTime: "2-5 days",
      },
      badge: "Nationwide",
    },
    {
      id: "mining-logistics",
      icon: Factory,
      title: "Mining Logistics",
      category: "Industrial",
      description:
        "Heavy equipment transport and mine site logistics across Australia with specialized vehicles.",
      features: [
        "Mine spec vehicles",
        "Remote area capability",
        "Dangerous goods certified",
        "24/7 operations",
        "Site induction ready",
        "Emergency response",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/oversize.jpg",
      stats: {
        deliveries: "10,000+",
        satisfaction: "99.5%",
        avgTime: "Custom",
      },
      badge: "Specialized",
    },
    {
      id: "heavy-machinery",
      icon: Wrench,
      title: "Heavy Machinery",
      category: "Specialized",
      description:
        "Transport of oversized and heavy machinery with specialized equipment and route planning.",
      features: [
        "Low loaders available",
        "Permit management",
        "Pilot vehicles",
        "Route planning",
        "Crane assistance",
        "Full insurance cover",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/oversize.jpg",
      stats: {
        deliveries: "5,000+",
        satisfaction: "100%",
        avgTime: "Project based",
      },
      badge: "Heavy Duty",
    },
    {
      id: "dangerous-goods",
      icon: Flame,
      title: "Dangerous Goods",
      category: "Specialized",
      description:
        "Certified transport of hazardous materials with full safety compliance and trained handlers.",
      features: [
        "ADR compliant",
        "Trained handlers",
        "Emergency procedures",
        "Specialized containers",
        "Real-time monitoring",
        "Full documentation",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/standtruck2.jpg",
      stats: {
        deliveries: "8,000+",
        satisfaction: "99.8%",
        avgTime: "Scheduled",
      },
      badge: "Certified",
    },
    {
      id: "cold-chain",
      icon: Thermometer,
      title: "Cold Chain Logistics",
      category: "Temperature Controlled",
      description:
        "Temperature-controlled transport for perishable and sensitive goods with real-time monitoring.",
      features: [
        "-25°C to +25°C range",
        "Real-time temperature monitoring",
        "Validated cold chain",
        "Pharma-grade available",
        "Backup systems",
        "HACCP certified",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/frontviewtruck.jpg",
      stats: {
        deliveries: "15,000+",
        satisfaction: "99.2%",
        avgTime: "2-24 hours",
      },
      badge: "Temperature",
    },
    {
      id: "container-transport",
      icon: Ship,
      title: "Container Transport",
      category: "Port Logistics",
      description:
        "Efficient container movement from ports to warehouses and distribution centers.",
      features: [
        "Port pickup/delivery",
        "Side loader available",
        "Container storage",
        "Customs clearance",
        "Wharf cartage",
        "Import/Export support",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/RoadTrain.png",
      stats: {
        deliveries: "30,000+",
        satisfaction: "97.5%",
        avgTime: "Same day",
      },
      badge: "Port",
    },
    {
      id: "warehouse-distribution",
      icon: Warehouse,
      title: "Warehouse & Distribution",
      category: "Storage Solutions",
      description:
        "Complete warehousing and distribution solutions with 50,000 sqm storage capacity.",
      features: [
        "50,000 sqm storage",
        "Pick and pack",
        "Inventory management",
        "Cross-docking",
        "Last mile delivery",
        "Returns management",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/warehouse.jpg",
      stats: {
        deliveries: "100,000+",
        satisfaction: "98.5%",
        avgTime: "24-48 hours",
      },
      badge: "Storage",
    },
    {
      id: "express-delivery",
      icon: Zap,
      title: "Express Delivery",
      category: "Priority",
      description:
        "Urgent deliveries with guaranteed timeframes and 1-hour pickup for critical shipments.",
      features: [
        "1-hour pickup",
        "Direct routes",
        "Priority handling",
        "Real-time updates",
        "Guaranteed delivery",
        "24/7 availability",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/frontviewtruck.jpg",
      stats: {
        deliveries: "20,000+",
        satisfaction: "99.9%",
        avgTime: "2-8 hours",
      },
      badge: "Priority",
    },
    {
      id: "oversized-cargo",
      icon: Package,
      title: "Oversized Cargo",
      category: "Specialized",
      description:
        "Transport solutions for oversized, overmass, and abnormal loads with full project management.",
      features: [
        "Pilot escorts",
        "Route surveys",
        "Permit acquisition",
        "Specialized trailers",
        "Night moves available",
        "Full project management",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/heavyload.jpg",
      stats: {
        deliveries: "3,000+",
        satisfaction: "100%",
        avgTime: "Project based",
      },
      badge: "Oversize",
    },
    {
      id: "local-council",
      icon: Building2,
      title: "Local Council",
      category: "Government",
      description:
        "Dedicated municipal logistics for local councils including waste management and infrastructure.",
      features: [
        "Waste management transport",
        "Road maintenance logistics",
        "Community infrastructure",
        "Emergency response",
        "Seasonal services",
        "Compliance assured",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/muncipalConsole.jpg",
      stats: {
        deliveries: "12,000+",
        satisfaction: "99%",
        avgTime: "Scheduled",
      },
      badge: "Government",
    },
    {
      id: "government-contract",
      icon: Landmark,
      title: "Government Contract",
      category: "Enterprise",
      description:
        "Secure transport solutions for federal and state government departments and defence logistics.",
      features: [
        "Security cleared",
        "Defence logistics",
        "Healthcare transport",
        "Critical infrastructure",
        "Compliance assured",
        "Confidential handling",
      ],
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/government.jpg",
      stats: {
        deliveries: "8,000+",
        satisfaction: "99.5%",
        avgTime: "Custom",
      },
      badge: "Secure",
    },
  ];

  return (
    <div className="bg-primary">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={trucking1}
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
              What We Offer
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mt-4 mb-6">
              Complete Logistics{" "}
              <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-accent-silver/80 max-w-3xl mx-auto">
              From local deliveries to complex government contracts, we provide
              end-to-end transport solutions tailored to your industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedService(service)}
              >
                <GlassCard
                  className="cursor-pointer group h-full overflow-hidden"
                  tilt
                  glow
                >
                  <div className="relative overflow-hidden rounded-xl mb-6 h-48 -mx-0 -mt-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.style.background =
                          "linear-gradient(135deg, #1a1a2e, #16213e)";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="glass px-3 py-1 rounded-full text-xs text-accent-blue">
                        {service.category}
                      </span>
                    </div>

                    {/* Service Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="glass px-3 py-1 rounded-full text-xs text-accent-orange">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 px-1">
                    <div className="w-12 h-12 rounded-xl bg-accent-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-orange/20 transition-colors">
                      <service.icon className="text-accent-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-accent-orange transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-accent-silver/60 text-sm mb-4">
                        {service.description}
                      </p>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {Object.entries(service.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold gradient-text">
                              {value}
                            </div>
                            <div className="text-[10px] text-accent-silver/40 capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      <motion.button
                        className="text-accent-orange text-sm flex items-center gap-2 group/btn mb-2"
                        whileHover={{ gap: 8 }}
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </motion.button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative bg-primary border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative h-64">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover rounded-t-3xl"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.background =
                      "linear-gradient(135deg, #1a1a2e, #16213e)";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent rounded-t-3xl" />
                <button
                  className="absolute top-4 right-4 glass p-2 rounded-full hover:bg-white/20 transition-colors"
                  onClick={() => setSelectedService(null)}
                >
                  <X size={20} />
                </button>
                <div className="absolute top-4 left-4">
                  <span className="glass px-3 py-1.5 rounded-full text-sm text-accent-orange">
                    {selectedService.badge}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent-orange/10 flex items-center justify-center">
                    <selectedService.icon
                      className="text-accent-orange"
                      size={32}
                    />
                  </div>
                  <div>
                    <span className="text-accent-blue text-sm">
                      {selectedService.category}
                    </span>
                    <h2 className="font-display text-3xl font-bold">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>

                <p className="text-accent-silver/80 mb-8 text-lg">
                  {selectedService.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {selectedService.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Check
                            className="text-green-400 flex-shrink-0"
                            size={20}
                          />
                          <span className="text-accent-silver/80">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold mb-4">
                      Performance Stats
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(selectedService.stats).map(
                        ([key, value]) => (
                          <GlassCard key={key}>
                            <div className="flex justify-between items-center">
                              <span className="text-accent-silver capitalize">
                                {key}
                              </span>
                              <span className="font-bold gradient-text">
                                {value}
                              </span>
                            </div>
                          </GlassCard>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <MagneticButton variant="primary" size="lg" icon={ArrowRight}>
                    Book This Service
                  </MagneticButton>
                  <MagneticButton variant="secondary" size="lg">
                    Get Quote
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
