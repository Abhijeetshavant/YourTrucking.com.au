import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Award,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Quote,
  TrendingUp,
} from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import MagneticButton from "../components/ui/MagneticButton";
import AnimatedCounter from "../components/ui/AnimatedCounter";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const timelineOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const teamScale = useTransform(scrollYProgress, [0.5, 0.7], [0.8, 1]);

  const milestones = [
    {
      year: "1988",
      title: "Founded in Kalgoorlie",
      description:
        "Started with one truck and a vision to connect Western Australia.",
    },
    {
      year: "1995",
      title: "Expanded to Interstate",
      description:
        "Began operating across state lines with a fleet of 50 trucks.",
    },
    {
      year: "2005",
      title: "Fleet of 500+",
      description: "Reached major milestone with nationwide coverage.",
    },
    {
      year: "2015",
      title: "Technology Integration",
      description: "Launched real-time tracking and digital booking platform.",
    },
    {
      year: "2020",
      title: "2500+ Vehicles",
      description: "Became Australia's most trusted logistics partner.",
    },
    {
      year: "2024",
      title: "AI-Powered Logistics",
      description:
        "Pioneering autonomous fleet management and predictive analytics.",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Zero compromise on safety standards. Every load, every time.",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Military-grade precision in logistics planning and execution.",
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "We grow when our clients grow. True partnership mindset.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description:
        "Leading the industry towards carbon-neutral logistics by 2030.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Constantly pushing boundaries with cutting-edge technology.",
    },
    {
      icon: Users,
      title: "People First",
      description: "Our 5,000+ team members are our greatest asset.",
    },
  ];

  const leadership = [
    {
      name: "James Mitchell",
      role: "CEO & Founder",
      image: "/images/team/ceo.jpg",
      bio: "40+ years in logistics",
    },
    {
      name: "Sarah Chen",
      role: "COO",
      image: "/images/team/coo.jpg",
      bio: "Former Toll Group executive",
    },
    {
      name: "Michael Torres",
      role: "CTO",
      image: "/images/team/cto.jpg",
      bio: "Silicon Valley veteran",
    },
    {
      name: "Emma Williams",
      role: "CFO",
      image: "/images/team/cfo.jpg",
      bio: "Ex-PwC partner",
    },
  ];

  return (
    <div ref={containerRef} className="bg-primary">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.jpg"
            alt="Yours Trucking History"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#0A0E17_90%)]" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-4 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
              Our Story
            </span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mt-4 mb-6">
              Built to <span className="gradient-text">Deliver</span>
            </h1>
            <p className="text-xl text-accent-silver/80 max-w-2xl">
              From a single truck in Kalgoorlie to Australia's most advanced
              logistics network. A journey of trust, innovation, and relentless
              pursuit of excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent-orange/10 flex items-center justify-center flex-shrink-0">
                    <Target className="text-accent-orange" size={32} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-4">
                      Our Mission
                    </h3>
                    <p className="text-accent-silver/80 leading-relaxed">
                      To provide Australia's most reliable, efficient, and
                      innovative logistics solutions that empower businesses to
                      grow and communities to thrive. We move more than
                      freight—we move the economy forward.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="text-accent-blue" size={32} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-4">
                      Our Vision
                    </h3>
                    <p className="text-accent-silver/80 leading-relaxed">
                      To be the undisputed leader in Australian logistics,
                      setting global standards for safety, technology, and
                      customer experience. We envision a fully connected,
                      AI-powered logistics ecosystem by 2030.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,76,0,0.05),_transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-accent-silver/60">
              The milestones that shaped us
            </p>
          </motion.div>

          <motion.div className="relative" style={{ opacity: timelineOpacity }}>
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent-orange via-accent-blue to-accent-orange" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}
                  >
                    <GlassCard className="inline-block">
                      <span className="text-accent-orange font-display text-3xl font-bold">
                        {milestone.year}
                      </span>
                      <h4 className="font-heading text-xl font-bold mt-2">
                        {milestone.title}
                      </h4>
                      <p className="text-accent-silver/60 mt-2">
                        {milestone.description}
                      </p>
                    </GlassCard>
                  </div>

                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 bg-accent-orange rounded-full glow-orange" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-primary-200/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl font-bold mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full group" glow>
                  <value.icon
                    className="text-accent-orange mb-4 group-hover:scale-110 transition-transform duration-300"
                    size={40}
                  />
                  <h3 className="font-heading text-xl font-bold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-accent-silver/60">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            style={{ scale: teamScale }}
          >
            <h2 className="font-display text-5xl font-bold mb-4">
              Leadership <span className="gradient-text">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlassCard className="text-center group">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-accent-orange/30">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold">
                    {leader.name}
                  </h3>
                  <p className="text-accent-orange text-sm mb-2">
                    {leader.role}
                  </p>
                  <p className="text-accent-silver/60 text-sm">{leader.bio}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-24 bg-primary-200/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl font-bold mb-4">
              Certifications & <span className="gradient-text">Compliance</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "NHVAS Accreditation",
                description: "National Heavy Vehicle Accreditation Scheme",
                icon: Shield,
              },
              {
                title: "ISO 9001:2015",
                description: "Quality Management Systems",
                icon: Award,
              },
              {
                title: "WHS Compliance",
                description: "Work Health & Safety Certified",
                icon: CheckCircle,
              },
              {
                title: "Fully Insured",
                description: "$50M Public Liability Cover",
                icon: Shield,
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <cert.icon
                    className="text-accent-orange mx-auto mb-4"
                    size={48}
                  />
                  <h3 className="font-heading font-bold mb-2">{cert.title}</h3>
                  <p className="text-accent-silver/60 text-sm">
                    {cert.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Move with{" "}
              <span className="gradient-text">Australia's Best</span>?
            </h2>
            <p className="text-accent-silver/60 mb-8 text-lg">
              Join thousands of businesses that trust Yours Trucking for their
              logistics needs.
            </p>
            <div className="flex gap-4 justify-center">
              <MagneticButton variant="primary" size="xl" icon={ArrowRight}>
                Get Started
              </MagneticButton>
              <MagneticButton variant="secondary" size="xl">
                Contact Sales
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
