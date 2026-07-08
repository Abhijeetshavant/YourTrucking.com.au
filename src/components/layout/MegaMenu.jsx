import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Truck,
  Globe,
  Factory,
  Wrench,
  Flame,
  Thermometer,
  Ship,
  Warehouse,
  Zap,
  Package,
  Star,
  ArrowRight,
} from "lucide-react";

const MegaMenu = ({ onClose }) => {
  const serviceCategories = [
    {
      title: "Transport Services",
      items: [
        { icon: Truck, label: "Local Transport", path: "/services#local" },
        {
          icon: Globe,
          label: "Interstate Freight",
          path: "/services#interstate",
        },
        { icon: Zap, label: "Express Delivery", path: "/services#express" },
        {
          icon: Package,
          label: "Oversized Cargo",
          path: "/services#oversized",
        },
      ],
    },
    {
      title: "Specialized Services",
      items: [
        { icon: Factory, label: "Mining Logistics", path: "/services#mining" },
        { icon: Wrench, label: "Heavy Machinery", path: "/services#heavy" },
        { icon: Flame, label: "Dangerous Goods", path: "/services#dangerous" },
        { icon: Thermometer, label: "Cold Chain", path: "/services#cold" },
      ],
    },
    {
      title: "Business Solutions",
      items: [
        {
          icon: Ship,
          label: "Container Transport",
          path: "/services#container",
        },
        { icon: Warehouse, label: "Warehousing", path: "/services#warehouse" },
        {
          icon: Star,
          label: "Enterprise Logistics",
          path: "/services#enterprise",
        },
      ],
    },
  ];

  return (
    <motion.div
      className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-xl border-t border-b border-white/5 shadow-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h3 className="font-heading text-sm font-semibold text-accent-orange uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={item.path}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                      onClick={onClose}
                    >
                      <item.icon
                        className="text-accent-silver/60 group-hover:text-accent-orange transition-colors"
                        size={20}
                      />
                      <span className="text-sm text-accent-silver/80 group-hover:text-white transition-colors">
                        {item.label}
                      </span>
                      <ArrowRight
                        className="ml-auto text-accent-silver/20 group-hover:text-accent-orange transition-all opacity-0 group-hover:opacity-100"
                        size={16}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <p className="text-accent-silver/60 text-sm">
            Need a custom solution? Our team is ready to help.
          </p>
          <Link
            to="/contact"
            className="text-accent-orange text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            onClick={onClose}
          >
            Contact Sales
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
