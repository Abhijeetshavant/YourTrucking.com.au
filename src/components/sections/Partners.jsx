import { motion } from "framer-motion";
import { Factory, Package, ShoppingCart, Store, Landmark } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "BHP",
      icon: Factory,
      color: "text-blue-400",
    },
    {
      name: "ABBE Corrugated",
      icon: Package,
      color: "text-orange-400",
    },
    {
      name: "Amazon",
      icon: ShoppingCart,
      color: "text-yellow-400",
    },
    {
      name: "Woolworths",
      icon: Store,
      color: "text-green-400",
    },
    {
      name: "Coles",
      icon: Store,
      color: "text-red-400",
    },
    {
      name: "Government",
      icon: Landmark,
      color: "text-purple-400",
    },
  ];

  return (
    <section
      className="py-12 md:py-16 border-t border-b border-white/5"
      style={{ overflow: "hidden", maxWidth: "100vw" }}
    >
      <div
        className="max-w-7xl mx-auto px-4 lg:px-8"
        style={{ maxWidth: "100%" }}
      >
        {/* Section Title */}
        <motion.p
          className="text-center text-accent-silver/40 text-xs md:text-sm mb-8 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Trusted by Australia's Leading Organizations
        </motion.p>

        {/* Partners Grid - Simple flex wrap for mobile */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            maxWidth: "100%",
          }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              style={{
                flex: "0 1 auto",
                minWidth: "140px",
                maxWidth: "160px",
              }}
              className="sm:min-w-[150px] sm:max-w-[180px] md:min-w-[160px] md:max-w-[200px]"
            >
              <div
                className="text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "20px 16px",
                  height: "100%",
                }}
              >
                {/* Icon Circle */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                  }}
                >
                  <partner.icon className={partner.color} size={22} />
                </div>

                {/* Company Name */}
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0",
                    lineHeight: 1.3,
                    wordBreak: "break-word",
                  }}
                >
                  {partner.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          className="text-center text-accent-silver/30 text-xs mt-8"
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
