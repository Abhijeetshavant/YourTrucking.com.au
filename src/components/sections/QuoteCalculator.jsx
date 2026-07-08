import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  MapPin,
  Package,
  Truck,
  Shield,
  Clock,
  Zap,
  ArrowRight,
  Check,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import MagneticButton from "../ui/MagneticButton";

const QuoteCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    cargoType: "",
    weight: "",
    truckType: "",
    urgency: "standard",
    insurance: false,
    date: "",
  });
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateEstimate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const basePrice = 1500;
      const weightMultiplier = parseInt(formData.weight) > 5000 ? 2 : 1;
      const urgencyMultiplier = formData.urgency === "express" ? 1.5 : 1;
      const insuranceCost = formData.insurance ? 350 : 0;

      setEstimatedPrice(
        basePrice * weightMultiplier * urgencyMultiplier + insuranceCost,
      );
      setIsCalculating(false);
    }, 2000);
  };

  const steps = [
    { number: 1, label: "Route" },
    { number: 2, label: "Cargo" },
    { number: 3, label: "Vehicle" },
    { number: 4, label: "Estimate" },
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,76,0,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
              Instant Quote
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Get Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-accent-silver/60 mb-8">
              Configure your shipment and receive an AI-powered estimate in
              seconds. No hidden fees, complete transparency.
            </p>

            {/* Progress Steps */}
            <div className="flex items-center gap-2 mb-12">
              {steps.map((s, i) => (
                <div key={s.number} className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold transition-all duration-300 ${
                      step >= s.number
                        ? "bg-accent-orange text-white"
                        : "bg-white/5 text-accent-silver/40"
                    }`}
                  >
                    {s.number}
                  </div>
                  <span
                    className={`text-sm hidden md:block ${
                      step >= s.number ? "text-white" : "text-accent-silver/40"
                    }`}
                  >
                    {s.label}
                  </span>
                  {i < steps.length - 1 && (
                    <div
                      className={`w-8 h-0.5 ${
                        step > s.number ? "bg-accent-orange" : "bg-white/10"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Form Steps */}
            <GlassCard>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="font-heading text-2xl font-bold flex items-center gap-3">
                      <MapPin className="text-accent-orange" />
                      Route Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-accent-silver mb-2">
                          Pickup Location
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors"
                          placeholder="Enter pickup address"
                          value={formData.pickup}
                          onChange={(e) =>
                            setFormData({ ...formData, pickup: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-accent-silver mb-2">
                          Destination
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors"
                          placeholder="Enter destination address"
                          value={formData.destination}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              destination: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="font-heading text-2xl font-bold flex items-center gap-3">
                      <Package className="text-accent-orange" />
                      Cargo Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-accent-silver mb-2">
                          Cargo Type
                        </label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors">
                          <option>Select cargo type</option>
                          <option>Construction Materials</option>
                          <option>Industrial Equipment</option>
                          <option>Mining Machinery</option>
                          <option>Container Freight</option>
                          <option>Dangerous Goods</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-accent-silver mb-2">
                          Weight (kg)
                        </label>
                        <input
                          type="number"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors"
                          placeholder="Enter weight"
                          value={formData.weight}
                          onChange={(e) =>
                            setFormData({ ...formData, weight: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="font-heading text-2xl font-bold flex items-center gap-3">
                      <Truck className="text-accent-orange" />
                      Vehicle Selection
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Heavy Rigid",
                        "Semi Trailer",
                        "B-Double",
                        "Road Train",
                      ].map((truck) => (
                        <button
                          key={truck}
                          className={`p-4 rounded-xl border transition-all duration-300 ${
                            formData.truckType === truck
                              ? "border-accent-orange bg-accent-orange/10"
                              : "border-white/10 hover:border-white/30"
                          }`}
                          onClick={() =>
                            setFormData({ ...formData, truckType: truck })
                          }
                        >
                          <Truck className="mx-auto mb-2" />
                          <span className="text-sm">{truck}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="font-heading text-2xl font-bold flex items-center gap-3">
                      <Calculator className="text-accent-orange" />
                      Your Estimate
                    </h3>
                    {isCalculating ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 border-4 border-accent-orange border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-accent-silver">
                          Calculating your premium...
                        </p>
                      </div>
                    ) : estimatedPrice ? (
                      <div className="text-center">
                        <div className="text-5xl font-display font-bold gradient-text mb-4">
                          ${estimatedPrice.toLocaleString()}
                        </div>
                        <p className="text-accent-silver mb-6">
                          Estimated total including all fees
                        </p>
                        <div className="space-y-3 text-left">
                          <div className="flex items-center gap-2 text-sm text-green-400">
                            <Check size={16} />
                            Real-time GPS tracking included
                          </div>
                          <div className="flex items-center gap-2 text-sm text-green-400">
                            <Check size={16} />
                            Insurance coverage up to $500,000
                          </div>
                          <div className="flex items-center gap-2 text-sm text-green-400">
                            <Check size={16} />
                            24/7 dedicated support
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-6">
                {step > 1 && (
                  <button
                    className="glass glass-hover px-6 py-3 rounded-xl text-sm"
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </button>
                )}
                {step < 4 ? (
                  <MagneticButton
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    onClick={() => setStep(step + 1)}
                    className="flex-1"
                  >
                    Continue
                  </MagneticButton>
                ) : (
                  <MagneticButton
                    variant="primary"
                    size="md"
                    icon={Zap}
                    onClick={calculateEstimate}
                    className="flex-1"
                  >
                    Calculate Now
                  </MagneticButton>
                )}
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="/images/quote-illustration.jpg"
                alt="Quote Calculator"
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent rounded-3xl" />

              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 right-10 glass p-4 rounded-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <Shield className="text-green-400" />
                  <div>
                    <p className="text-sm font-bold">100% Insured</p>
                    <p className="text-xs text-accent-silver">Full Coverage</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-10 glass p-4 rounded-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <Clock className="text-accent-blue" />
                  <div>
                    <p className="text-sm font-bold">24/7 Support</p>
                    <p className="text-xs text-accent-silver">
                      Always Available
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
