import { motion } from "framer-motion";
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
} from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import MagneticButton from "../components/ui/MagneticButton";

const Industries = () => {
  const industries = [
    {
      icon: Pickaxe,
      title: "Mining",
      description:
        "Heavy equipment transport, mine site logistics, and remote area operations with specialized vehicles and trained personnel.",
      stats: { clients: "200+", deliveries: "15,000+", satisfaction: "99.8%" },
      features: [
        "Mine spec vehicles",
        "Remote area capability",
        "24/7 operations",
      ],
    },
    {
      icon: HardHat,
      title: "Construction",
      description:
        "Just-in-time delivery of building materials, machinery, and equipment to construction sites across Australia.",
      stats: { clients: "500+", deliveries: "40,000+", satisfaction: "98.5%" },
      features: ["Site delivery", "Crane trucks", "Project scheduling"],
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Raw material transport, finished goods distribution, and supply chain optimization for manufacturers.",
      stats: { clients: "350+", deliveries: "60,000+", satisfaction: "99.1%" },
      features: [
        "Supply chain integration",
        "Just-in-time delivery",
        "Dedicated fleet",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description:
        "Efficient distribution to retail outlets, shopping centers, and direct-to-consumer delivery solutions.",
      stats: { clients: "150+", deliveries: "100,000+", satisfaction: "97.8%" },
      features: [
        "Multi-drop delivery",
        "Last mile logistics",
        "Returns management",
      ],
    },
    {
      icon: Wheat,
      title: "Agriculture",
      description:
        "Transport of agricultural products, machinery, and supplies across rural and regional Australia.",
      stats: { clients: "180+", deliveries: "25,000+", satisfaction: "99.2%" },
      features: [
        "Bulk transport",
        "Temperature controlled",
        "Regional coverage",
      ],
    },
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Specialized medical equipment transport, pharmaceutical logistics, and hospital supply chain management.",
      stats: { clients: "80+", deliveries: "12,000+", satisfaction: "100%" },
      features: [
        "Temperature monitoring",
        "Urgent deliveries",
        "GDP compliant",
      ],
    },
    {
      icon: Building2,
      title: "Government",
      description:
        "Secure transport solutions for government departments, defense, and public sector organizations.",
      stats: { clients: "50+", deliveries: "8,000+", satisfaction: "99.5%" },
      features: [
        "Security cleared",
        "Confidential handling",
        "Compliance assured",
      ],
    },
    {
      icon: Utensils,
      title: "Food & Beverage",
      description:
        "Temperature-controlled transport for food products, maintaining quality and freshness throughout the supply chain.",
      stats: { clients: "200+", deliveries: "80,000+", satisfaction: "98.9%" },
      features: [
        "Cold chain logistics",
        "HACCP certified",
        "Real-time monitoring",
      ],
    },
    {
      icon: Car,
      title: "Automotive",
      description:
        "Vehicle transport, parts distribution, and automotive supply chain solutions for manufacturers and dealers.",
      stats: { clients: "120+", deliveries: "35,000+", satisfaction: "98.2%" },
      features: ["Vehicle carriers", "Parts distribution", "Dealer network"],
    },
    {
      icon: Wrench,
      title: "Industrial",
      description:
        "Heavy industrial equipment, machinery, and components transport with specialized handling capabilities.",
      stats: { clients: "280+", deliveries: "20,000+", satisfaction: "99.0%" },
      features: [
        "Heavy lift capability",
        "Project cargo",
        "Specialized equipment",
      ],
    },
    {
      icon: Droplets,
      title: "Oil & Gas",
      description:
        "Critical logistics support for oil and gas operations, including equipment, materials, and supplies.",
      stats: { clients: "90+", deliveries: "10,000+", satisfaction: "99.7%" },
      features: ["Remote operations", "Dangerous goods", "24/7 availability"],
    },
    {
      icon: Warehouse,
      title: "Warehouse & Logistics",
      description:
        "Complete warehousing and distribution solutions for businesses requiring storage and fulfillment services.",
      stats: { clients: "300+", deliveries: "150,000+", satisfaction: "98.6%" },
      features: ["Storage solutions", "Pick and pack", "Inventory management"],
    },
  ];

  return (
    <div className="bg-primary min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
              Industries We Serve
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
              Powering Every <span className="gradient-text">Industry</span>
            </h1>
            <p className="text-accent-silver/60 text-lg max-w-3xl mx-auto">
              Tailored logistics solutions for every sector. From mining to
              retail, we understand your industry's unique requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <GlassCard className="h-full group" tilt glow>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-orange/20 transition-colors">
                      <industry.icon className="text-accent-orange" size={28} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2">
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

                  {/* Features */}
                  <div className="space-y-2">
                    {industry.features.map((feature, i) => (
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
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="inline-block max-w-2xl">
              <h3 className="font-display text-2xl font-bold mb-4">
                Don't See Your Industry?
              </h3>
              <p className="text-accent-silver/60 mb-6">
                We provide custom logistics solutions for all sectors. Contact
                us to discuss your specific requirements.
              </p>
              <MagneticButton variant="primary" size="lg" icon={ArrowRight}>
                Get Custom Solution
              </MagneticButton>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
