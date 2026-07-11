import { useState } from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Calendar,
  Clock,
  Package,
  Shield,
  ArrowRight,
  Check,
  Upload,
  CreditCard,
  MessageSquare,
  CheckCircle,
  XCircle,
} from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import MagneticButton from "../components/ui/MagneticButton";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    phone: "",
    email: "",
    pickupAddress: "",
    destinationAddress: "",
    pickupDate: "",
    pickupTime: "",
    truckType: "",
    cargoWeight: "",
    cargoType: "",
    dimensions: { length: "", width: "", height: "" },
    specialInstructions: "",
    insuranceRequired: false,
    paymentMethod: "invoice",
    cargoImages: [],
  });

  const totalSteps = 4;
  const whatsappNumber = "919644000090"; // Indian format: 91 + number

  const nextStep = () => setStep(Math.min(step + 1, totalSteps));
  const prevStep = () => setStep(Math.max(step - 1, 1));

  const getTruckTypeLabel = (type) => {
    const labels = {
      heavy_rigid: "Heavy Rigid",
      semi_trailer: "Semi Trailer",
      b_double: "B-Double",
      road_train: "Road Train",
      flatbed: "Flatbed",
      refrigerated: "Refrigerated",
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
      other: "Other",
    };
    return labels[type] || type;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Build comprehensive WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `*🚛 New Booking Request - Yours Trucking Australia*\n\n` +
        `*📋 Booking Summary*\n` +
        `Date: ${formData.pickupDate || "Not specified"}\n` +
        `Time: ${formData.pickupTime || "Not specified"}\n\n` +
        `*👤 Customer Information*\n` +
        `Name: ${formData.customerName}\n` +
        `Company: ${formData.company || "Not provided"}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n\n` +
        `*📍 Route Details*\n` +
        `Pickup: ${formData.pickupAddress}\n` +
        `Destination: ${formData.destinationAddress}\n\n` +
        `*📦 Cargo Information*\n` +
        `Truck Type: ${getTruckTypeLabel(formData.truckType)}\n` +
        `Cargo Type: ${getCargoTypeLabel(formData.cargoType)}\n` +
        `Weight: ${formData.cargoWeight || "Not specified"} kg\n` +
        `Insurance: ${formData.insuranceRequired ? "✅ Yes" : "❌ No"}\n` +
        `Special Instructions: ${formData.specialInstructions || "None"}\n\n` +
        `*💳 Payment Method*\n` +
        `${formData.paymentMethod === "invoice" ? "📄 Invoice (Net 30)" : "💳 Credit Card"}\n\n` +
        `---\n` +
        `📅 Submitted: ${new Date().toLocaleString()}\n` +
        `🌐 Source: Website Booking Form\n` +
        `💰 Pricing: To be discussed (Negotiable)`,
    );

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    try {
      window.open(whatsappUrl, "_blank");
      setSubmitStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          customerName: "",
          company: "",
          phone: "",
          email: "",
          pickupAddress: "",
          destinationAddress: "",
          pickupDate: "",
          pickupTime: "",
          truckType: "",
          cargoWeight: "",
          cargoType: "",
          dimensions: { length: "", width: "", height: "" },
          specialInstructions: "",
          insuranceRequired: false,
          paymentMethod: "invoice",
          cargoImages: [],
        });
        setStep(1);
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-5xl font-bold mb-4">
            Book Your <span className="gradient-text">Transport</span>
          </h1>
          <p className="text-accent-silver/60">
            Quick and easy booking - We'll contact you with pricing
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {["Details", "Route", "Cargo", "Confirm"].map((label, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    step > index + 1
                      ? "bg-accent-orange text-white"
                      : step === index + 1
                        ? "bg-accent-orange/20 text-accent-orange border-2 border-accent-orange"
                        : "bg-white/5 text-accent-silver/40"
                  }`}
                >
                  {step > index + 1 ? <Check size={20} /> : index + 1}
                </div>
                <span
                  className={`ml-2 text-sm hidden md:block ${
                    step >= index + 1 ? "text-white" : "text-accent-silver/40"
                  }`}
                >
                  {label}
                </span>
                {index < 3 && (
                  <div
                    className={`w-12 md:w-24 h-0.5 mx-2 transition-all duration-300 ${
                      step > index + 1 ? "bg-accent-orange" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <GlassCard>
          <form onSubmit={handleSubmit}>
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
                    Booking Request Sent!
                  </p>
                  <p className="text-green-400/70 text-xs mt-1">
                    WhatsApp opened with your details. We'll confirm pricing
                    shortly.
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
                    Please try again or call +61 9644000090
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 1: Customer Details */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl font-bold mb-6">
                  Customer Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-accent-silver mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none text-white"
                      placeholder="Enter your full name"
                      value={formData.customerName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          customerName: e.target.value,
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none text-white"
                      placeholder="Company name (optional)"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-accent-silver mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none text-white"
                      placeholder="+61 4XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-accent-silver mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none text-white"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Route Details */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl font-bold mb-6">
                  Route & Schedule
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-accent-silver mb-2">
                      Pickup Address *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none text-white"
                      placeholder="Enter full pickup address"
                      value={formData.pickupAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pickupAddress: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-accent-silver mb-2">
                      Destination Address *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none text-white"
                      placeholder="Enter full destination address"
                      value={formData.destinationAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          destinationAddress: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-accent-silver mb-2">
                        Pickup Date *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none text-white"
                        value={formData.pickupDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            pickupDate: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-accent-silver mb-2">
                        Pickup Time
                      </label>
                      <input
                        type="time"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none text-white"
                        value={formData.pickupTime}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            pickupTime: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Cargo Details */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl font-bold mb-6">
                  Cargo Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-accent-silver mb-2">
                      Truck Type *
                    </label>
                    <select
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none text-white"
                      value={formData.truckType}
                      onChange={(e) =>
                        setFormData({ ...formData, truckType: e.target.value })
                      }
                    >
                      <option value="">Select truck type</option>
                      <option value="heavy_rigid">
                        Heavy Rigid (25,000 kg)
                      </option>
                      <option value="semi_trailer">
                        Semi Trailer (34,000 kg)
                      </option>
                      <option value="b_double">B-Double (46,000 kg)</option>
                      <option value="road_train">Road Train (85,000 kg)</option>
                      <option value="flatbed">Flatbed (30,000 kg)</option>
                      <option value="refrigerated">
                        Refrigerated (24,000 kg)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-accent-silver mb-2">
                      Cargo Type
                    </label>
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none text-white"
                      value={formData.cargoType}
                      onChange={(e) =>
                        setFormData({ ...formData, cargoType: e.target.value })
                      }
                    >
                      <option value="">Select cargo type</option>
                      <option value="construction">
                        Construction Materials
                      </option>
                      <option value="industrial">Industrial Equipment</option>
                      <option value="mining">Mining Machinery</option>
                      <option value="container">Container Freight</option>
                      <option value="dangerous">Dangerous Goods</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-accent-silver mb-2">
                      Cargo Weight (kg)
                    </label>
                    <input
                      type="number"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none text-white"
                      placeholder="Approximate weight"
                      value={formData.cargoWeight}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          cargoWeight: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-accent-silver mb-2">
                    Special Instructions
                  </label>
                  <textarea
                    rows="3"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none resize-none text-white"
                    placeholder="Any special requirements or instructions..."
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
                    checked={formData.insuranceRequired}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        insuranceRequired: e.target.checked,
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
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl font-bold mb-6">
                  Booking Summary
                </h2>

                <div className="space-y-4">
                  {/* Customer Info */}
                  <div className="p-4 rounded-xl bg-white/5">
                    <h3 className="text-sm font-bold text-accent-orange mb-3">
                      👤 Customer Details
                    </h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-accent-silver/60">Name</p>
                        <p className="font-medium text-white">
                          {formData.customerName}
                        </p>
                      </div>
                      <div>
                        <p className="text-accent-silver/60">Company</p>
                        <p className="font-medium text-white">
                          {formData.company || "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-accent-silver/60">Phone</p>
                        <p className="font-medium text-white">
                          {formData.phone}
                        </p>
                      </div>
                      <div>
                        <p className="text-accent-silver/60">Email</p>
                        <p className="font-medium text-white">
                          {formData.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Route Info */}
                  <div className="p-4 rounded-xl bg-white/5">
                    <h3 className="text-sm font-bold text-accent-blue mb-3">
                      📍 Route Details
                    </h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-accent-silver/60">Pickup</p>
                        <p className="font-medium text-white">
                          {formData.pickupAddress}
                        </p>
                      </div>
                      <div>
                        <p className="text-accent-silver/60">Destination</p>
                        <p className="font-medium text-white">
                          {formData.destinationAddress}
                        </p>
                      </div>
                      <div>
                        <p className="text-accent-silver/60">Date</p>
                        <p className="font-medium text-white">
                          {formData.pickupDate || "TBD"}
                        </p>
                      </div>
                      <div>
                        <p className="text-accent-silver/60">Time</p>
                        <p className="font-medium text-white">
                          {formData.pickupTime || "TBD"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Cargo Info */}
                  <div className="p-4 rounded-xl bg-white/5">
                    <h3 className="text-sm font-bold text-green-400 mb-3">
                      📦 Cargo Details
                    </h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-accent-silver/60">Truck Type</p>
                        <p className="font-medium text-white">
                          {getTruckTypeLabel(formData.truckType)}
                        </p>
                      </div>
                      <div>
                        <p className="text-accent-silver/60">Cargo Type</p>
                        <p className="font-medium text-white">
                          {getCargoTypeLabel(formData.cargoType)}
                        </p>
                      </div>
                      <div>
                        <p className="text-accent-silver/60">Weight</p>
                        <p className="font-medium text-white">
                          {formData.cargoWeight || "TBD"} kg
                        </p>
                      </div>
                      <div>
                        <p className="text-accent-silver/60">Insurance</p>
                        <p className="font-medium text-white">
                          {formData.insuranceRequired ? "✅ Yes" : "❌ No"}
                        </p>
                      </div>
                    </div>
                    {formData.specialInstructions && (
                      <div className="mt-3 pt-3 border-t border-white/5">
                        <p className="text-accent-silver/60 text-xs">
                          Special Instructions
                        </p>
                        <p className="font-medium text-white text-sm">
                          {formData.specialInstructions}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Pricing Note */}
                  <div className="p-4 rounded-xl bg-accent-orange/5 border border-accent-orange/20 text-center">
                    <MessageSquare
                      className="text-accent-orange mx-auto mb-2"
                      size={24}
                    />
                    <p className="text-sm text-accent-silver mb-1">
                      Our team will contact you with the best pricing
                    </p>
                    <p className="text-lg font-bold gradient-text">
                      Competitive & Negotiable Rates
                    </p>
                    <p className="text-xs text-accent-silver/60 mt-2">
                      You'll receive a personalized quote via WhatsApp
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-white/5">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="glass glass-hover px-6 py-3 rounded-xl text-sm"
                >
                  Back
                </button>
              )}
              <div className="ml-auto">
                {step < totalSteps ? (
                  <MagneticButton
                    type="button"
                    variant="primary"
                    icon={ArrowRight}
                    onClick={nextStep}
                  >
                    Continue
                  </MagneticButton>
                ) : (
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    icon={MessageSquare}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                  </MagneticButton>
                )}
              </div>
            </div>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default Booking;
