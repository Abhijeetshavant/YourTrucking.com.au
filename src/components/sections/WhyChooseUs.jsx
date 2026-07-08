import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Users,
  MapPin,
  HeadphonesIcon,
  TrendingUp,
  Award,
  Zap,
  CheckCircle,
  Star,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Fully Insured",
      description:
        "Comprehensive coverage up to $50M for complete peace of mind on every shipment.",
      stats: "$50M Coverage",
    },
    {
      icon: Clock,
      title: "99.8% On-Time Delivery",
      description:
        "Industry-leading punctuality with real-time tracking and proactive updates.",
      stats: "99.8% Success",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "5,000+ trained professionals with extensive logistics and industry expertise.",
      stats: "5000+ Team",
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description:
        "Servicing 100+ cities across all Australian states and territories.",
      stats: "100+ Cities",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support via phone, email, and live chat.",
      stats: "24/7 Available",
    },
    {
      icon: TrendingUp,
      title: "Advanced Technology",
      description:
        "AI-powered route optimization, real-time GPS tracking, and digital documentation.",
      stats: "AI-Powered",
    },
    {
      icon: Award,
      title: "Industry Certified",
      description:
        "NHVAS accredited, ISO 9001 certified, and fully compliant with Australian standards.",
      stats: "ISO 9001",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description:
        "Average 15-minute response time for quotes and booking confirmations.",
      stats: "15min Response",
    },
  ];

  const comparisonData = [
    { feature: "Real-time Tracking", yours: true, others: false },
    { feature: "Instant Quotes", yours: true, others: true },
    { feature: "24/7 Support", yours: true, others: false },
    { feature: "Insurance Included", yours: true, others: false },
    { feature: "GPS Monitoring", yours: true, others: true },
    { feature: "Dedicated Manager", yours: true, others: false },
    { feature: "Flexible Scheduling", yours: true, others: true },
    { feature: "Digital Documentation", yours: true, others: false },
  ];

  return (
    <section className="py-24 bg-primary-200/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
              The <span className="gradient-text">Yours</span> Difference
            </h2>
            <p className="text-accent-silver/60 text-lg max-w-3xl mx-auto">
              We don't just move freight—we deliver excellence through every
              aspect of our service. Here's what sets us apart from the
              competition.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <GlassCard className="h-full group hover:border-accent-orange/30 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent-orange/10 flex items-center justify-center mb-6 group-hover:bg-accent-orange/20 transition-colors">
                    <feature.icon
                      className="text-accent-orange group-hover:scale-110 transition-transform"
                      size={32}
                    />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-accent-silver/60 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block px-4 py-2 rounded-full bg-accent-orange/10 text-accent-orange text-xs font-semibold">
                      {feature.stats}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Comparison Table */}
        <ScrollReveal>
          <GlassCard className="overflow-hidden">
            <div className="p-8 border-b border-white/5">
              <h3 className="font-display text-2xl font-bold text-center">
                How We <span className="gradient-text">Compare</span>
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left p-4 text-sm text-accent-silver/60 font-medium">
                      Feature
                    </th>
                    <th className="text-center p-4">
                      <span className="text-accent-orange font-bold">
                        Yours Trucking
                      </span>
                    </th>
                    <th className="text-center p-4">
                      <span className="text-accent-silver/40">
                        Industry Average
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <motion.tr
                      key={index}
                      className="border-b border-white/5 last:border-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <td className="p-4 text-sm">{row.feature}</td>
                      <td className="text-center p-4">
                        {row.yours ? (
                          <CheckCircle
                            className="text-green-400 mx-auto"
                            size={20}
                          />
                        ) : (
                          <span className="text-red-400">✕</span>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {row.others ? (
                          <CheckCircle
                            className="text-accent-silver/40 mx-auto"
                            size={20}
                          />
                        ) : (
                          <span className="text-red-400/40">✕</span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyChooseUs;
