import { motion } from "framer-motion";
import { Truck, Users, Star, Award } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";

const Stats = () => {
  const stats = [
    { icon: Truck, value: 2500, suffix: "+", label: "Verified Trucks" },
    { icon: Users, value: 5000, suffix: "+", label: "Happy Clients" },
    { icon: Star, value: 4.9, suffix: "/5", label: "Client Rating" },
    { icon: Award, value: 35, suffix: "+", label: "Years Experience" },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/5 via-transparent to-accent-blue/5" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon
                className="text-accent-orange mx-auto mb-4"
                size={32}
              />
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-accent-silver/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
