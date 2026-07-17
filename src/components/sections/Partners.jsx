import { motion } from "framer-motion";
import {
  Building2,
  Package,
  ShoppingCart,
  Store,
  Landmark,
  Factory,
} from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "BHP",
      icon: Factory,
      description: "Mining & Resources",
      color: "text-blue-400",
    },
    {
      name: "ABBE Corrugated",
      icon: Package,
      description: "Manufacturing",
      color: "text-orange-400",
    },
    {
      name: "Amazon",
      icon: ShoppingCart,
      description: "E-Commerce",
      color: "text-yellow-400",
    },
    {
      name: "Woolworths",
      icon: Store,
      description: "Retail",
      color: "text-green-400",
    },
    {
      name: "Coles",
      icon: Store,
      description: "Retail",
      color: "text-red-400",
    },
    {
      name: "Government",
      icon: Landmark,
      description: "Public Sector",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="py-16 border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <motion.p
          className="text-center text-accent-silver/40 text-xs sm:text-sm mb-8 md:mb-10 tracking-widest uppercase px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Trusted by Australia's Leading Organizations
        </motion.p>

        {/* Partners Grid - Fixed mobile layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-full">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="group cursor-default w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="glass glass-hover p-4 sm:p-5 md:p-6 rounded-2xl text-center h-full flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all duration-300 group-hover:border-accent-orange/30 group-hover:-translate-y-1">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <partner.icon
                    className={`${partner.color} transition-colors`}
                    size={22}
                  />
                </div>

                {/* Company Name */}
                <h3 className="font-heading text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white group-hover:gradient-text transition-all line-clamp-1">
                  {partner.name}
                </h3>

                {/* Industry */}
                <p className="text-[10px] sm:text-xs text-accent-silver/40 group-hover:text-accent-silver/60 transition-colors line-clamp-1">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          className="text-center text-accent-silver/30 text-[10px] sm:text-xs mt-6 md:mt-8 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          And 500+ more businesses across Australia
        </motion.p>
      </div>
    </section>
  );
};

export default Partners;
