import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    { name: "BHP", logo: "/images/partners/bhp.png" },
    { name: "Rio Tinto", logo: "/images/partners/rio-tinto.png" },
    { name: "BlueScope", logo: "/images/partners/bluescope.png" },
    { name: "Woolworths", logo: "/images/partners/woolworths.png" },
    { name: "Coles", logo: "/images/partners/coles.png" },
    { name: "Government", logo: "/images/partners/government.png" },
  ];

  return (
    <section className="py-16 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.p
          className="text-center text-accent-silver/40 text-sm mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          TRUSTED BY AUSTRALIA'S LEADING ORGANIZATIONS
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 opacity-50 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
