import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Custom WhatsApp Icon SVG
const WhatsAppIcon = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [step, setStep] = useState(1);

  // CHANGE THIS TO YOUR ACTUAL WHATSAPP NUMBER
  const phoneNumber = "9644000090";
  const companyName = "Yours Trucking Australia";

  const handleQuickMessage = (text) => {
    const encodedMessage = encodeURIComponent(text);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
    setIsOpen(false);
    setStep(1);
  };

  const handleSendMessage = () => {
    if (!name.trim() || !message.trim()) return;
    const encodedMessage = encodeURIComponent(
      `*Name:* ${name}\n*Message:* ${message}\n\n_Sent from Yours Trucking Website_`,
    );
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
    setIsOpen(false);
    setStep(1);
    setName("");
    setMessage("");
  };

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-16 right-0 w-80 bg-[#0A0E17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <WhatsAppIcon size={28} className="text-white" />
                <div>
                  <h3 className="text-white font-bold text-sm">
                    {companyName}
                  </h3>
                  <p className="text-white/80 text-xs">
                    Typically replies within 5 minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setStep(1);
                }}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 max-h-80 overflow-y-auto">
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon size={16} className="text-white" />
                </div>
                <div className="bg-white/5 rounded-2xl rounded-tl-none px-4 py-3">
                  <p className="text-sm text-white">
                    👋 Hi! Welcome to {companyName}. How can we help you today?
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2 mb-4">
                {[
                  {
                    emoji: "🚛",
                    text: "Book a Truck Now",
                    message:
                      "Hi! I want to book a truck for freight transport.",
                  },
                  {
                    emoji: "💰",
                    text: "Get Instant Quote",
                    message: "Hi! I need a quote for freight transport.",
                  },
                  {
                    emoji: "📍",
                    text: "Track My Shipment",
                    message: "Hi! I want to track my shipment.",
                  },
                  {
                    emoji: "💬",
                    text: "Talk to Support",
                    message: "Hi! I need customer support assistance.",
                  },
                ].map((action, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleQuickMessage(action.message)}
                    className="w-full text-left px-4 py-3 rounded-xl border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all text-sm text-white flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-lg">{action.emoji}</span>
                    <span>{action.text}</span>
                  </motion.button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full text-center text-accent-blue text-sm hover:underline mb-4"
              >
                Or write a custom message →
              </button>

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:border-[#25D366] focus:outline-none transition-colors text-white"
                  />
                  <textarea
                    placeholder="Your Message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="3"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:border-[#25D366] focus:outline-none transition-colors text-white resize-none"
                  />
                  <motion.button
                    onClick={handleSendMessage}
                    className="w-full bg-[#25D366] text-white py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#20BD5C] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <WhatsAppIcon size={18} />
                    Send via WhatsApp
                  </motion.button>
                </motion.div>
              )}
            </div>

            <div className="border-t border-white/5 px-4 py-3 flex items-center justify-between">
              <span className="text-xs text-accent-silver/40">
                Powered by WhatsApp
              </span>
              <span className="text-xs text-[#25D366] flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
                Online
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-[#20BD5C] transition-colors group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.4)",
            "0 0 0 15px rgba(37, 211, 102, 0)",
            "0 0 0 0 rgba(37, 211, 102, 0)",
          ],
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity },
        }}
      >
        <WhatsAppIcon size={28} className="text-white" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-white text-gray-900 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>

        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] flex items-center justify-center font-bold">
          1
        </span>
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
