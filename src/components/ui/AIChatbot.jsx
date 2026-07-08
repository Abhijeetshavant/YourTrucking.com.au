import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  User,
  Sparkles,
  Truck,
  MapPin,
  Calculator,
  Phone,
} from "lucide-react";

// AI Configuration
const AI_CONFIG = {
  useAI: false,
  provider: "openai",
  apiKeys: {
    openai: import.meta.env.VITE_OPENAI_API_KEY || "",
    gemini: import.meta.env.VITE_GEMINI_API_KEY || "",
    claude: import.meta.env.VITE_CLAUDE_API_KEY || "",
  },
  endpoints: {
    openai: "https://api.openai.com/v1/chat/completions",
    gemini:
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
    claude: "https://api.anthropic.com/v1/messages",
  },
  systemPrompt: `You are a helpful AI assistant for Yours Trucking Australia, a premium logistics company. Be professional, friendly, and concise.`,
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: `👋 Hello! I'm your AI logistics assistant.\n\nI can help with:\n🚛 Booking | 💰 Quotes\n📍 Tracking | 📋 Services\n\nHow can I assist you today?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateLocalResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();

    if (msg.includes("book") || msg.includes("truck")) {
      return {
        text: "To book a truck, I'll need:\n\n📍 Pickup & Delivery location\n📅 Preferred date\n📦 Cargo type & weight\n\nYou can also book directly on our booking page!",
        action: { text: "🚛 Go to Booking →", link: "/booking" },
      };
    }

    if (
      msg.includes("quote") ||
      msg.includes("price") ||
      msg.includes("cost")
    ) {
      return {
        text: "Use our instant quote calculator!\n\nFactors: Distance, Weight, Truck Type, Urgency\n\nGet an estimate in seconds.",
        action: { text: "💰 Get Quote →", link: "/booking" },
      };
    }

    if (msg.includes("track")) {
      return {
        text: "Track your shipment with your tracking ID (e.g., YT2024AU789456) on our tracking page.",
        action: { text: "📍 Track Now →", link: "/tracking" },
      };
    }

    if (msg.includes("service") || msg.includes("offer")) {
      return {
        text: "We offer: Local Transport, Interstate Freight, Express Delivery, Mining Logistics, Heavy Machinery, Cold Chain & more!",
        action: { text: "📋 View Services →", link: "/services" },
      };
    }

    if (
      msg.includes("contact") ||
      msg.includes("phone") ||
      msg.includes("call")
    ) {
      return {
        text: "📞 1300 TRUCKING (24/7)\n📧 info@yourstrucking.com.au\n\nWe're always here to help!",
        action: { text: "📞 Call Now →", link: "tel:1300878254" },
      };
    }

    if (msg.includes("fleet") || msg.includes("vehicle")) {
      return {
        text: "Our fleet: Light Commercial to Road Trains (4,500 kg - 85,000 kg capacity).",
        action: { text: "🚛 View Fleet →", link: "/fleet" },
      };
    }

    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
      return {
        text: "Hello! 👋 Ask me about booking, quotes, tracking, or our services. I'm here to help!",
      };
    }

    if (msg.includes("thank")) {
      return {
        text: "You're welcome! 😊 Anything else I can help with? Safe travels! 🚛",
      };
    }

    return {
      text: "I can help with: Booking | Quotes | Tracking | Services | Fleet\n\nCall us: 1300 TRUCKING\nEmail: info@yourstrucking.com.au",
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      type: "user",
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    const botResponse = generateLocalResponse(input);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { ...botResponse, type: "bot", timestamp: new Date() },
      ]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickAction = (text) => {
    setInput(text);
    // Auto send after setting input
    setTimeout(() => {
      const userMessage = {
        type: "user",
        text: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setIsTyping(true);

      const botResponse = generateLocalResponse(text);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { ...botResponse, type: "bot", timestamp: new Date() },
        ]);
        setIsTyping(false);
      }, 800);
    }, 100);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[360px] max-w-[calc(100vw-2rem)] bg-[#0A0E17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: "calc(100vh - 120px)" }}
          >
            {/* Header - Compact */}
            <div className="bg-gradient-to-r from-accent-orange to-orange-600 px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center relative flex-shrink-0">
                  <Sparkles className="text-white" size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-sm flex items-center gap-2">
                    AI Assistant
                    <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full">
                      AI
                    </span>
                  </h3>
                  <p className="text-white/70 text-[11px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="truncate">Online • Instant replies</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors flex-shrink-0 ml-2"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages - Scrollable */}
            <div
              className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
              style={{ minHeight: "200px", maxHeight: "350px" }}
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.type === "user" ? "flex-row-reverse" : ""}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.type === "bot"
                        ? "bg-gradient-to-br from-accent-orange to-orange-600"
                        : "bg-accent-blue/20"
                    }`}
                  >
                    {msg.type === "bot" ? (
                      <Sparkles className="text-white" size={14} />
                    ) : (
                      <User className="text-accent-blue" size={14} />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[78%] ${
                      msg.type === "bot"
                        ? "bg-white/5 rounded-2xl rounded-tl-none"
                        : "bg-accent-orange/10 rounded-2xl rounded-tr-none"
                    } px-3 py-2`}
                  >
                    <p className="text-[13px] text-white whitespace-pre-line leading-relaxed">
                      {msg.text}
                    </p>
                    {msg.action && (
                      <a
                        href={msg.action.link}
                        className="inline-block mt-1.5 text-accent-orange text-[12px] font-medium hover:underline"
                      >
                        {msg.action.text}
                      </a>
                    )}
                    <p className="text-[10px] text-accent-silver/40 mt-1">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-orange to-orange-600 flex items-center justify-center">
                    <Sparkles className="text-white" size={14} />
                  </div>
                  <div className="bg-white/5 rounded-2xl rounded-tl-none px-4 py-3">
                    <div className="flex gap-1">
                      <span
                        className="w-1.5 h-1.5 bg-accent-orange/60 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-1.5 h-1.5 bg-accent-orange/60 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-1.5 h-1.5 bg-accent-orange/60 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions - Compact */}
            <div className="border-t border-white/5 px-3 py-2 flex gap-1.5 overflow-x-auto flex-shrink-0">
              {[
                { icon: Truck, text: "Book" },
                { icon: Calculator, text: "Quote" },
                { icon: MapPin, text: "Track" },
                { icon: Phone, text: "Call" },
              ].map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.text)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/10 hover:border-accent-orange/50 hover:bg-accent-orange/5 transition-all text-[11px] text-accent-silver whitespace-nowrap flex-shrink-0"
                >
                  <action.icon size={12} className="text-accent-orange" />
                  {action.text}
                </button>
              ))}
            </div>

            {/* Input - Compact */}
            <div className="border-t border-white/5 px-3 py-2.5 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[13px] focus:border-accent-orange focus:outline-none transition-colors text-white placeholder:text-accent-silver/40"
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-accent-orange text-white w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-gradient-to-br from-accent-orange to-orange-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(255, 76, 0, 0.4)",
            "0 0 0 15px rgba(255, 76, 0, 0)",
            "0 0 0 0 rgba(255, 76, 0, 0)",
          ],
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity },
        }}
      >
        {isOpen ? (
          <X size={22} className="text-white" />
        ) : (
          <Sparkles size={22} className="text-white" />
        )}

        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          AI Assistant
        </span>
      </motion.button>
    </div>
  );
};

export default AIChatbot;
