import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a truck for transport?",
      answer:
        "You can book online through our website, call us at 1300 TRUCKING, or email info@yourstrucking.com.au. Our team will help you select the right vehicle and schedule your pickup.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We provide comprehensive coverage across all Australian states and territories, including metro, regional, and remote areas. Our network spans over 100 cities nationwide.",
    },
    {
      question: "How is pricing calculated?",
      answer:
        "Our pricing is based on distance, cargo type, weight, truck size, and urgency. Use our instant quote calculator or contact us for a detailed breakdown.",
    },
    {
      question: "Is my cargo insured during transport?",
      answer:
        "Yes, all shipments are covered by our comprehensive insurance. Additional coverage options are available for high-value items.",
    },
    {
      question: "Can I track my shipment in real-time?",
      answer:
        "Absolutely! Every shipment comes with a unique tracking ID. Use our online tracking portal or mobile app to monitor your cargo's location in real-time.",
    },
    {
      question: "What types of trucks do you have?",
      answer:
        "Our fleet includes Heavy Rigid, Semi Trailers, B-Doubles, Road Trains, Flatbeds, Refrigerated trucks, and specialized vehicles for dangerous goods and oversized cargo.",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="font-display text-5xl font-bold mt-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard
                className="cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <Minus
                        className="text-accent-orange flex-shrink-0"
                        size={24}
                      />
                    ) : (
                      <Plus
                        className="text-accent-silver/60 flex-shrink-0"
                        size={24}
                      />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-accent-silver/60 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
