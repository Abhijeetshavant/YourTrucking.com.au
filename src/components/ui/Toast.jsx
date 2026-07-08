import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const Toast = ({ message, type = "success", onClose, duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle className="text-green-400" size={24} />,
    error: <XCircle className="text-red-400" size={24} />,
    warning: <AlertCircle className="text-yellow-400" size={24} />,
  };

  const colors = {
    success: "border-green-400/30",
    error: "border-red-400/30",
    warning: "border-yellow-400/30",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-4 right-4 z-[9999]"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`glass border ${colors[type]} p-4 flex items-center gap-3 min-w-[300px]`}
          >
            {icons[type]}
            <p className="text-sm flex-1">{message}</p>
            <button
              onClick={() => {
                setIsVisible(false);
                onClose?.();
              }}
              className="text-accent-silver/40 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
