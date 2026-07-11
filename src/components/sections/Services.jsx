import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Truck,
  Globe,
  Zap,
  Package,
  Building2,
  Landmark,
  ArrowRight,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";

// Import all service background images
import trucking1 from "../../assets/trucking1.jpg";
import interstate from "../../assets/interstate.png";
import frontviewtruck from "../../assets/frontviewtruck.jpg";
import heavyload from "../../assets/heavyload.jpg";
import muncipleConsole from "../../assets/muncipalConsole.jpg";
import government from "../../assets/government.jpg";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Local Transport",
      description:
        "Fast and reliable same-day delivery across metropolitan and regional areas. Our local fleet ensures your goods arrive on time, every time.",
      link: "/services",
      color: "text-accent-orange",
      image: trucking1,
      badge: "Same Day",
    },
    {
      icon: Globe,
      title: "Interstate Freight",
      description:
        "Seamless interstate transport connecting all major Australian cities. Daily departures with real-time GPS tracking for complete peace of mind.",
      link: "/services",
      color: "text-accent-blue",
      image: interstate,
      badge: "Nationwide",
    },
    {
      icon: Zap,
      title: "Express Delivery",
      description:
        "Time-critical deliveries with guaranteed timeframes. Priority handling and direct routes for your most urgent shipments across Australia.",
      link: "/services",
      color: "text-yellow-400",
      image: frontviewtruck,
      badge: "Priority",
    },
    {
      icon: Package,
      title: "Oversized Cargo",
      description:
        "Specialized heavy haulage for oversized machinery, equipment, and abnormal loads. Expert route planning and permit management included.",
      link: "/services",
      color: "text-purple-400",
      image: heavyload,
      badge: "Heavy Duty",
    },
    {
      icon: Building2,
      title: "Local Council",
      description:
        "Dedicated municipal and local government logistics services. Waste management, road maintenance, and community infrastructure transport solutions.",
      link: "/services",
      color: "text-green-400",
      image: muncipleConsole,
      badge: "Government",
    },
    {
      icon: Landmark,
      title: "Government Contract",
      description:
        "Secure and compliant transport solutions for federal and state government departments. Defence, healthcare, and critical infrastructure logistics.",
      link: "/services",
      color: "text-cyan-400",
      image: government,
      badge: "Secure",
    },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
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
              From local deliveries to complex government contracts, we provide
              end-to-end transport solutions tailored to every sector.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Link to={service.link}>
                <GlassCard
                  className="h-full group cursor-pointer overflow-hidden"
                  tilt
                  glow
                >
                  {/* ========== Background Image Section ========== */}
                  <div className="relative h-48 -mx-0 -mt-0 mb-5 overflow-hidden rounded-t-2xl">
                    {/* Service Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0E17]/90" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="glass px-3 py-1 rounded-full text-xs font-medium text-accent-orange backdrop-blur-xl border-accent-orange/30">
                        {service.badge}
                      </span>
                    </div>

                    {/* Service Icon on Image */}
                    <div className="absolute bottom-3 left-3">
                      <div className="w-10 h-10 rounded-xl bg-accent-orange/20 backdrop-blur-xl border border-accent-orange/30 flex items-center justify-center group-hover:bg-accent-orange/30 transition-colors">
                        <service.icon className={service.color} size={20} />
                      </div>
                    </div>
                  </div>

                  {/* ========== Content Section ========== */}
                  <div className="px-1">
                    <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent-orange transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-accent-silver/60 text-sm mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center text-accent-orange text-sm font-medium pb-2">
                      <span className="group-hover:mr-2 transition-all">
                        Learn More
                      </span>
                      <ArrowRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-1"
                      />
                    </div>
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
