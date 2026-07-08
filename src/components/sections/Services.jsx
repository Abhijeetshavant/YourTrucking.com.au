import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Truck,
  Globe,
  Zap,
  Package,
  Factory,
  Thermometer,
  ArrowRight,
  Shield,
  Clock,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Local Transport",
      description:
        "Same-day delivery across metropolitan and regional areas with real-time tracking.",
      link: "/services",
      color: "text-accent-orange",
    },
    {
      icon: Globe,
      title: "Interstate Freight",
      description:
        "Reliable interstate transport connecting all major Australian cities and towns.",
      link: "/services",
      color: "text-accent-blue",
    },
    {
      icon: Zap,
      title: "Express Delivery",
      description:
        "Urgent deliveries with guaranteed timeframes for time-sensitive cargo.",
      link: "/services",
      color: "text-yellow-400",
    },
    {
      icon: Package,
      title: "Oversized Cargo",
      description:
        "Specialized transport for heavy, oversized, and abnormal loads.",
      link: "/services",
      color: "text-purple-400",
    },
    {
      icon: Factory,
      title: "muncipal party ",
      description:
        "Mine site logistics with specialized vehicles and remote area capability.",
      link: "/services",
      color: "text-orange-400",
    },
    {
      icon: Thermometer,
      title: "Goventment Use",
      description:
        "Temperature-controlled transport for perishable and sensitive goods.",
      link: "/services",
      color: "text-cyan-400",
    },
  ];

  return (
    <section className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
              Our Services
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
              Complete Logistics{" "}
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-accent-silver/60 text-lg max-w-3xl mx-auto">
              From local deliveries to complex industrial logistics, we provide
              end-to-end transport solutions tailored to your needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Link to={service.link}>
                <GlassCard className="h-full group cursor-pointer" tilt glow>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-accent-orange/10 flex items-center justify-center mb-6 group-hover:bg-accent-orange/20 transition-colors`}
                  >
                    <service.icon className={service.color} size={28} />
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent-orange transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-accent-silver/60 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center text-accent-orange text-sm font-medium">
                    <span className="group-hover:mr-2 transition-all">
                      Learn More
                    </span>
                    <ArrowRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-1"
                    />
                  </div>
                </GlassCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Services CTA */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link to="/services">
              <motion.button
                className="glass glass-hover px-8 py-4 rounded-full text-sm font-medium inline-flex items-center gap-2"
                whileHover={{ gap: 12 }}
              >
                View All Services
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
