import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "David Thompson",
      company: "BHP Mining Operations",
      role: "Supply Chain Director",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
      text: "Yours Trucking has been instrumental in keeping our mining operations running smoothly. Their reliability and professionalism are unmatched in the industry.",
    },
    {
      name: "Sarah Williams",
      company: "BlueScope Steel",
      role: "Logistics Manager",
      rating: 5,
      color: "from-purple-500 to-pink-500",
      text: "The real-time tracking and transparent pricing have transformed how we manage our supply chain. A truly premium logistics partner.",
    },
    {
      name: "Michael Chen",
      company: "Woolworths Group",
      role: "National Transport Manager",
      rating: 5,
      color: "from-green-500 to-emerald-500",
      text: "Exceptional service quality and attention to detail. Their cold chain logistics have been flawless for our perishable goods transport.",
    },
    {
      name: "Emma Roberts",
      company: "Rio Tinto",
      role: "Procurement Manager",
      rating: 5,
      color: "from-orange-500 to-red-500",
      text: "The most reliable logistics partner we've worked with. Their mining logistics expertise is second to none in Australia.",
    },
    {
      name: "James Wilson",
      company: "Coles Group",
      role: "Supply Chain Director",
      rating: 5,
      color: "from-red-500 to-rose-500",
      text: "Outstanding cold chain management. Our perishable goods have never been in better hands. Highly recommended.",
    },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  // Get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="py-24 bg-primary-200/30 relative overflow-hidden">
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-accent-silver/60 text-lg max-w-2xl mx-auto">
            Hear from the companies that rely on us for their most critical
            logistics operations.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="text-center p-8 md:p-12">
                {/* Quote Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent-orange/10 flex items-center justify-center mx-auto mb-6">
                  <Quote className="text-accent-orange" size={32} />
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-accent-silver/80 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Avatar with Initials */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[currentIndex].color} flex items-center justify-center border-2 border-white/10 flex-shrink-0`}
                  >
                    <span className="text-white font-bold text-xl">
                      {getInitials(testimonials[currentIndex].name)}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-white text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-accent-orange font-medium">
                      {testimonials[currentIndex].company}
                    </p>
                    <p className="text-sm text-accent-silver/40">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400"
                      size={20}
                    />
                  ))}
                </div>

                {/* Company Badge */}
                <span className="inline-block glass px-4 py-1.5 rounded-full text-xs text-accent-silver/60">
                  {testimonials[currentIndex].company}
                </span>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="glass p-3 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-2 bg-accent-orange"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="glass p-3 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "500+", label: "Google Reviews" },
            { value: "98%", label: "Client Retention" },
            { value: "200+", label: "Enterprise Clients" },
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
                <div className="font-display text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <p className="text-sm text-accent-silver/60 mt-1">
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
