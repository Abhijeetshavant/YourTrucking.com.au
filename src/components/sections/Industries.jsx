import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HardHat,
  Pickaxe,
  Factory,
  ShoppingCart,
  Wheat,
  Heart,
  Building2,
  Utensils,
  Car,
  Wrench,
  Droplets,
  Warehouse,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import MagneticButton from "../ui/MagneticButton";
import ScrollReveal from "../ui/ScrollReveal";
import { Link } from "react-router-dom";

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industries = [
    {
      id: "mining",
      icon: Pickaxe,
      title: "Mining",
      description:
        "Heavy equipment transport, mine site logistics, and remote area operations with specialized vehicles and trained personnel.",
      fullDescription:
        "Our mining logistics division specializes in transporting heavy machinery, equipment, and materials to some of Australia's most remote mine sites. With mine-spec vehicles, experienced drivers, and 24/7 operations, we ensure your mining operations never stop.",
      stats: { clients: "200+", deliveries: "15,000+", satisfaction: "99.8%" },
      features: [
        "Mine spec vehicles and equipment",
        "Remote area capability",
        "24/7 operations and support",
        "Dangerous goods certified",
        "Site induction ready",
        "Emergency response teams",
        "Camp and accommodation logistics",
        "Explosives transport capability",
      ],
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
      caseStudies: [
        {
          title: "Rio Tinto - Pilbara Operations",
          description:
            "Ongoing logistics support for one of Australia's largest mining operations",
        },
        {
          title: "BHP - Olympic Dam",
          description:
            "Heavy equipment transport to South Australia's premier mine site",
        },
      ],
    },
    {
      id: "construction",
      icon: HardHat,
      title: "Construction",
      description:
        "Just-in-time delivery of building materials, machinery, and equipment to construction sites across Australia.",
      fullDescription:
        "We provide comprehensive logistics solutions for the construction industry, delivering everything from raw materials to heavy machinery. Our just-in-time delivery ensures your projects stay on schedule and within budget.",
      stats: { clients: "500+", deliveries: "40,000+", satisfaction: "98.5%" },
      features: [
        "Site delivery and placement",
        "Crane truck services",
        "Project scheduling",
        "Bulk material transport",
        "Equipment relocation",
        "Waste removal",
        "Temporary storage solutions",
        "Multi-site coordination",
      ],
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
      caseStudies: [
        {
          title: "Sydney Metro Project",
          description:
            "Critical logistics support for Australia's largest public transport project",
        },
        {
          title: "Melbourne Airport Rail Link",
          description:
            "Coordinated delivery of construction materials and equipment",
        },
      ],
    },
    {
      id: "manufacturing",
      icon: Factory,
      title: "Manufacturing",
      description:
        "Raw material transport, finished goods distribution, and supply chain optimization for manufacturers.",
      fullDescription:
        "Our manufacturing logistics solutions help streamline your supply chain, from raw material delivery to finished goods distribution. We integrate with your production schedules to ensure seamless operations.",
      stats: { clients: "350+", deliveries: "60,000+", satisfaction: "99.1%" },
      features: [
        "Supply chain integration",
        "Just-in-time delivery",
        "Dedicated fleet options",
        "Raw material transport",
        "Finished goods distribution",
        "Inventory management",
        "Cross-docking services",
        "Quality control support",
      ],
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800",
      caseStudies: [
        {
          title: "BlueScope Steel",
          description:
            "Integrated logistics for steel manufacturing and distribution",
        },
        {
          title: "CSR Limited",
          description:
            "Building products logistics and supply chain management",
        },
      ],
    },
    {
      id: "retail",
      icon: ShoppingCart,
      title: "Retail",
      description:
        "Efficient distribution to retail outlets, shopping centers, and direct-to-consumer delivery solutions.",
      fullDescription:
        "We power retail logistics across Australia, ensuring products reach stores and customers on time. Our network covers metro and regional areas, supporting both B2B and B2C delivery models.",
      stats: { clients: "150+", deliveries: "100,000+", satisfaction: "97.8%" },
      features: [
        "Multi-drop delivery",
        "Last mile logistics",
        "Returns management",
        "Seasonal scaling",
        "Store replenishment",
        "E-commerce fulfillment",
        "Reverse logistics",
        "Peak period support",
      ],
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      caseStudies: [
        {
          title: "Woolworths Group",
          description:
            "Nationwide retail distribution and cold chain logistics",
        },
        {
          title: "David Jones",
          description:
            "Premium retail logistics and white-glove delivery service",
        },
      ],
    },
    {
      id: "agriculture",
      icon: Wheat,
      title: "Agriculture",
      description:
        "Transport of agricultural products, machinery, and supplies across rural and regional Australia.",
      fullDescription:
        "Supporting Australia's agricultural sector with reliable transport solutions for crops, livestock, machinery, and supplies. We understand the seasonal demands and remote locations of farming operations.",
      stats: { clients: "180+", deliveries: "25,000+", satisfaction: "99.2%" },
      features: [
        "Bulk grain transport",
        "Livestock carriers",
        "Machinery relocation",
        "Fertilizer delivery",
        "Temperature controlled",
        "Regional coverage",
        "Harvest support",
        "Port delivery",
      ],
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800",
      caseStudies: [
        {
          title: "GrainCorp",
          description: "Bulk grain transport and storage logistics",
        },
        {
          title: "Elders",
          description: "Agricultural supply chain and rural logistics support",
        },
      ],
    },
    {
      id: "healthcare",
      icon: Heart,
      title: "Healthcare",
      description:
        "Specialized medical equipment transport, pharmaceutical logistics, and hospital supply chain management.",
      fullDescription:
        "Our healthcare logistics division ensures the safe and timely delivery of medical supplies, equipment, and pharmaceuticals. We maintain strict compliance with healthcare regulations and temperature control requirements.",
      stats: { clients: "80+", deliveries: "12,000+", satisfaction: "100%" },
      features: [
        "Temperature monitoring",
        "Urgent deliveries",
        "GDP compliant",
        "Clean room delivery",
        "Pharmaceutical handling",
        "Medical equipment",
        "Hospital logistics",
        "Vaccine transport",
      ],
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800",
      caseStudies: [
        {
          title: "CSL Limited",
          description: "Pharmaceutical logistics and cold chain management",
        },
        {
          title: "Ramsay Health Care",
          description: "Hospital supply chain and medical equipment logistics",
        },
      ],
    },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
              Industries We Serve
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
              Powering Every <span className="gradient-text">Sector</span>
            </h2>
            <p className="text-accent-silver/60 text-lg max-w-3xl mx-auto">
              Tailored logistics solutions for every industry. Our expertise
              spans across all major sectors of the Australian economy.
            </p>
          </div>
        </ScrollReveal>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.id} delay={index * 0.1}>
              <motion.div
                onClick={() => setSelectedIndustry(industry)}
                className="cursor-pointer"
              >
                <GlassCard className="h-full group" tilt glow>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-orange/20 transition-colors">
                      <industry.icon className="text-accent-orange" size={28} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-accent-orange transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-accent-silver/60 text-sm leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4 p-4 rounded-xl bg-white/5">
                    {Object.entries(industry.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold gradient-text">
                          {value}
                        </div>
                        <div className="text-[10px] text-accent-silver/40 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-4">
                    {industry.features.slice(0, 3).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-accent-silver/60"
                      >
                        <Check
                          className="text-green-400 flex-shrink-0"
                          size={14}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="text-accent-orange text-sm font-medium flex items-center gap-2 group/btn">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </GlassCard>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All CTA */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link to="/industries">
              <motion.button
                className="glass glass-hover px-8 py-4 rounded-full text-sm font-medium inline-flex items-center gap-2"
                whileHover={{ gap: 12 }}
              >
                View All Industries
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Industry Detail Modal */}
      <AnimatePresence>
        {selectedIndustry && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndustry(null)}
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
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-4 right-4 z-10 glass p-2 rounded-full hover:bg-white/20"
              >
                <X size={20} />
              </button>

              <div className="relative h-64">
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.title}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent rounded-t-3xl" />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent-orange/10 flex items-center justify-center">
                    <selectedIndustry.icon
                      className="text-accent-orange"
                      size={32}
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-bold">
                      {selectedIndustry.title}
                    </h2>
                    <p className="text-accent-silver/60">
                      {selectedIndustry.stats.clients} clients served
                    </p>
                  </div>
                </div>

                <p className="text-accent-silver/80 mb-8 text-lg leading-relaxed">
                  {selectedIndustry.fullDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-4">
                      Key Features
                    </h3>
                    <div className="space-y-2">
                      {selectedIndustry.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-accent-silver/80"
                        >
                          <Check
                            className="text-green-400 flex-shrink-0"
                            size={18}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold mb-4">
                      Case Studies
                    </h3>
                    <div className="space-y-3">
                      {selectedIndustry.caseStudies.map((study, i) => (
                        <GlassCard key={i}>
                          <h4 className="font-bold mb-1">{study.title}</h4>
                          <p className="text-sm text-accent-silver/60">
                            {study.description}
                          </p>
                        </GlassCard>
                      ))}
                    </div>
                  </div>
                </div>

                <MagneticButton
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  className="w-full"
                >
                  Get {selectedIndustry.title} Logistics Solution
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Industries;
