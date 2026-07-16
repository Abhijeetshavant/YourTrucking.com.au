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
  MessageSquare,
  CheckCircle,
  XCircle,
  Send,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import MagneticButton from "../ui/MagneticButton";

const QuoteCalculator = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    pickup: "",
    destination: "",
    cargoType: "",
    weight: "",
    truckType: "",
    urgency: "standard",
    insurance: false,
    date: "",
    specialInstructions: "",
  });

  const whatsappNumber = "+61416879499"; // Your WhatsApp number

  const getTruckTypeLabel = (type) => {
    const labels = {
      heavy_rigid: "Heavy Rigid (25,000 kg)",
      semi_trailer: "Semi Trailer (34,000 kg)",
      b_double: "B-Double (46,000 kg)",
      road_train: "Road Train (85,000 kg)",
      flatbed: "Flatbed (30,000 kg)",
      refrigerated: "Refrigerated (24,000 kg)",
    };
    return labels[type] || type;
  };

  const getCargoTypeLabel = (type) => {
    const labels = {
      construction: "Construction Materials",
      industrial: "Industrial Equipment",
      mining: "Mining Machinery",
      container: "Container Freight",
      dangerous: "Dangerous Goods",
      perishable: "Perishable Goods",
      general: "General Freight",
      other: "Other",
    };
    return labels[type] || type;
  };

  const getUrgencyLabel = (urgency) => {
    const labels = {
      standard: "Standard (3-5 days)",
      priority: "Priority (2-3 days)",
      express: "Express (1-2 days)",
      same_day: "Same Day",
    };
    return labels[urgency] || urgency;
  };

  const handleSubmitQuote = () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Build WhatsApp message with all quote details
    const whatsappMessage = encodeURIComponent(
      `*💰 Quote Request - Yours Trucking Australia*\n\n` +
        `*👤 Contact Information*\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || "Not provided"}\n` +
        `Company: ${formData.company || "Not provided"}\n\n` +
        `*📍 Route Details*\n` +
        `Pickup: ${formData.pickup}\n` +
        `Destination: ${formData.destination}\n` +
        `Preferred Date: ${formData.date || "Flexible"}\n\n` +
        `*📦 Cargo Information*\n` +
        `Cargo Type: ${getCargoTypeLabel(formData.cargoType)}\n` +
        `Weight: ${formData.weight || "Not specified"} kg\n` +
        `Truck Type: ${getTruckTypeLabel(formData.truckType)}\n` +
        `Urgency: ${getUrgencyLabel(formData.urgency)}\n` +
        `Insurance: ${formData.insurance ? "✅ Yes" : "❌ No"}\n` +
        `Special Instructions: ${formData.specialInstructions || "None"}\n\n` +
        `---\n` +
        `📅 Submitted: ${new Date().toLocaleString()}\n` +
        `🌐 Source: Website Quote Calculator\n` +
        `💰 Status: Awaiting pricing from team`,
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    try {
      window.open(whatsappUrl, "_blank");
      setSubmitStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          pickup: "",
          destination: "",
          cargoType: "",
          weight: "",
          truckType: "",
          urgency: "standard",
          insurance: false,
          date: "",
          specialInstructions: "",
        });
        setStep(1);
        setSubmitStatus(null);
      }, 4000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, label: "Contact" },
    { number: 2, label: "Route" },
    { number: 3, label: "Cargo" },
    { number: 4, label: "Submit" },
  ];

  const canProceedStep1 = formData.name && formData.email;
  const canProceedStep2 = formData.pickup && formData.destination;
  const canProceedStep3 = formData.truckType;

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
              Get Your <span className="gradient-text">Personalized Quote</span>
            </h2>
            <p className="text-accent-silver/60 mb-8">
              Fill in the details and receive a customized quote via WhatsApp.
              Our team will get back to you with the best competitive rates.
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
                    {step > s.number ? <Check size={18} /> : s.number}
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

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <motion.div
                className="mb-6 p-4 rounded-xl bg-green-400/10 border border-green-400/30 flex items-center gap-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle
                  className="text-green-400 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="text-green-400 font-medium text-sm">
                    Quote Request Sent! ✅
                  </p>
                  <p className="text-green-400/70 text-xs mt-1">
                    WhatsApp opened. Our team will respond with pricing shortly.
                  </p>
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="mb-6 p-4 rounded-xl bg-red-400/10 border border-red-400/30 flex items-center gap-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <XCircle className="text-red-400 flex-shrink-0" size={20} />
                <div>
                  <p className="text-red-400 font-medium text-sm">
                    Failed to send
                  </p>
                  <p className="text-red-400/70 text-xs mt-1">
                    Please try again or call +61 0416879499
                  </p>
                </div>
              </motion.div>
            )}

            {/* Form Steps */}
            <GlassCard>
              <AnimatePresence mode="wait">
                {/* Step 1: Contact Information */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="font-heading text-2xl font-bold flex items-center gap-3">
                      <MessageSquare className="text-accent-orange" />
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-accent-silver mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-accent-silver mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-accent-silver mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
                            placeholder="+61 4XX XXX XXX"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-accent-silver mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
                            placeholder="Company name"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Route Details */}
                {step === 2 && (
                  <motion.div
                    key="step2"
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
                          Pickup Location *
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
                          placeholder="Enter pickup address"
                          value={formData.pickup}
                          onChange={(e) =>
                            setFormData({ ...formData, pickup: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-accent-silver mb-2">
                          Destination *
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
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
                      <div>
                        <label className="block text-sm text-accent-silver mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Cargo Details */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="font-heading text-2xl font-bold flex items-center gap-3">
                      <Package className="text-accent-orange" />
                      Cargo & Vehicle
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-accent-silver mb-2">
                            Cargo Type
                          </label>
                          <select
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
                            value={formData.cargoType}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                cargoType: e.target.value,
                              })
                            }
                          >
                            <option value="">Select cargo type</option>
                            <option value="construction">
                              Construction Materials
                            </option>
                            <option value="industrial">
                              Industrial Equipment
                            </option>
                            <option value="mining">Mining Machinery</option>
                            <option value="container">Container Freight</option>
                            <option value="dangerous">Dangerous Goods</option>
                            <option value="perishable">Perishable Goods</option>
                            <option value="general">General Freight</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-accent-silver mb-2">
                            Weight (kg)
                          </label>
                          <input
                            type="number"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
                            placeholder="Approximate weight"
                            value={formData.weight}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                weight: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-accent-silver mb-2">
                          Truck Type *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            {
                              value: "heavy_rigid",
                              label: "Heavy Rigid",
                              capacity: "25T",
                            },
                            {
                              value: "semi_trailer",
                              label: "Semi Trailer",
                              capacity: "34T",
                            },
                            {
                              value: "b_double",
                              label: "B-Double",
                              capacity: "46T",
                            },
                            {
                              value: "road_train",
                              label: "Road Train",
                              capacity: "85T",
                            },
                            {
                              value: "flatbed",
                              label: "Flatbed",
                              capacity: "30T",
                            },
                            {
                              value: "refrigerated",
                              label: "Refrigerated",
                              capacity: "24T",
                            },
                          ].map((truck) => (
                            <button
                              key={truck.value}
                              type="button"
                              className={`p-3 rounded-xl border text-left transition-all duration-300 ${
                                formData.truckType === truck.value
                                  ? "border-accent-orange bg-accent-orange/10"
                                  : "border-white/10 hover:border-white/30"
                              }`}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  truckType: truck.value,
                                })
                              }
                            >
                              <Truck
                                className={`mb-1 ${formData.truckType === truck.value ? "text-accent-orange" : "text-accent-silver/60"}`}
                                size={20}
                              />
                              <span className="text-sm font-medium block">
                                {truck.label}
                              </span>
                              <span className="text-xs text-accent-silver/40">
                                {truck.capacity}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-accent-silver mb-2">
                            Urgency
                          </label>
                          <select
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
                            value={formData.urgency}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                urgency: e.target.value,
                              })
                            }
                          >
                            <option value="standard">
                              Standard (3-5 days)
                            </option>
                            <option value="priority">
                              Priority (2-3 days)
                            </option>
                            <option value="express">Express (1-2 days)</option>
                            <option value="same_day">Same Day</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-accent-silver mb-2">
                          Special Instructions
                        </label>
                        <textarea
                          rows="2"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors resize-none text-white"
                          placeholder="Any special requirements..."
                          value={formData.specialInstructions}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              specialInstructions: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="insurance"
                          className="w-4 h-4 rounded border-white/10 bg-white/5 accent-accent-orange"
                          checked={formData.insurance}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              insurance: e.target.checked,
                            })
                          }
                        />
                        <label
                          htmlFor="insurance"
                          className="text-sm text-accent-silver"
                        >
                          Add insurance coverage (Recommended)
                        </label>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Review & Submit */}
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
                      Review & Submit
                    </h3>

                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-white/5">
                        <p className="text-xs text-accent-silver/60">Contact</p>
                        <p className="text-sm font-medium">
                          {formData.name} • {formData.email}
                        </p>
                        {formData.phone && (
                          <p className="text-sm text-accent-silver">
                            {formData.phone}
                          </p>
                        )}
                      </div>
                      <div className="p-3 rounded-xl bg-white/5">
                        <p className="text-xs text-accent-silver/60">Route</p>
                        <p className="text-sm font-medium">
                          {formData.pickup} → {formData.destination}
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5">
                        <p className="text-xs text-accent-silver/60">Cargo</p>
                        <p className="text-sm font-medium">
                          {getCargoTypeLabel(formData.cargoType)} •{" "}
                          {formData.weight || "TBD"} kg
                        </p>
                        <p className="text-sm text-accent-silver">
                          {getTruckTypeLabel(formData.truckType)} •{" "}
                          {getUrgencyLabel(formData.urgency)}
                        </p>
                      </div>
                    </div>

                    {/* No Price - WhatsApp Message */}
                    <div className="p-4 rounded-xl bg-accent-orange/5 border border-accent-orange/20 text-center">
                      <MessageSquare
                        className="text-accent-orange mx-auto mb-2"
                        size={24}
                      />
                      <p className="text-sm font-medium text-white mb-1">
                        Ready to receive your quote!
                      </p>
                      <p className="text-xs text-accent-silver/60">
                        Submit and we'll send pricing via WhatsApp
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="glass glass-hover px-6 py-3 rounded-xl text-sm"
                  >
                    Back
                  </button>
                )}
                {step < 4 ? (
                  <MagneticButton
                    type="button"
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    onClick={() => setStep(step + 1)}
                    className="flex-1"
                    disabled={
                      (step === 1 && !canProceedStep1) ||
                      (step === 2 && !canProceedStep2) ||
                      (step === 3 && !canProceedStep3)
                    }
                  >
                    Continue
                  </MagneticButton>
                ) : (
                  <MagneticButton
                    type="button"
                    variant="primary"
                    size="md"
                    icon={Send}
                    onClick={handleSubmitQuote}
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get Quote via WhatsApp"}
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
              <div className="w-full h-[600px] rounded-3xl bg-gradient-to-br from-accent-orange/10 to-accent-blue/10 border border-white/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <Calculator
                    className="text-accent-orange mx-auto mb-6"
                    size={64}
                  />
                  <h3 className="font-display text-2xl font-bold mb-4">
                    How It Works
                  </h3>
                  <div className="space-y-4 text-left">
                    {[
                      { step: 1, text: "Fill in your transport details" },
                      { step: 2, text: "Submit the form to our team" },
                      { step: 3, text: "Receive pricing via WhatsApp" },
                      { step: 4, text: "Confirm booking at negotiated rate" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-sm">
                          {item.step}
                        </div>
                        <span className="text-accent-silver/80 text-sm">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 -right-5 glass p-4 rounded-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <Shield className="text-green-400" />
                  <div>
                    <p className="text-sm font-bold">Best Rates</p>
                    <p className="text-xs text-accent-silver">
                      Negotiable Pricing
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 -left-5 glass p-4 rounded-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <Clock className="text-accent-blue" />
                  <div>
                    <p className="text-sm font-bold">Quick Response</p>
                    <p className="text-xs text-accent-silver">
                      Reply within 1 hour
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
