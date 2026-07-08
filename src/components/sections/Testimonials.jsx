import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "David Thompson",
      company: "BHP Mining Operations",
      role: "Supply Chain Director",
      image: "/images/testimonials/david.jpg",
      rating: 5,
      text: "Yours Trucking has been instrumental in keeping our mining operations running smoothly. Their reliability and professionalism are unmatched in the industry.",
    },
    {
      name: "Sarah Williams",
      company: "BlueScope Steel",
      role: "Logistics Manager",
      image: "/images/testimonials/sarah.jpg",
      rating: 5,
      text: "The real-time tracking and transparent pricing have transformed how we manage our supply chain. A truly premium logistics partner.",
    },
    {
      name: "Michael Chen",
      company: "Woolworths Group",
      role: "National Transport Manager",
      image: "/images/testimonials/michael.jpg",
      rating: 5,
      text: "Exceptional service quality and attention to detail. Their cold chain logistics have been flawless for our perishable goods transport.",
    },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section className="py-24 bg-primary-200/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-5xl font-bold mt-4 mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="text-center">
                <Quote
                  className="text-accent-orange/20 mx-auto mb-6"
                  size={48}
                />

                <p className="text-lg text-accent-silver/80 mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-orange/30">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-accent-orange">
                      {testimonials[currentIndex].company}
                    </p>
                    <p className="text-sm text-accent-silver/40">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400"
                      size={20}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="glass p-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="glass p-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
