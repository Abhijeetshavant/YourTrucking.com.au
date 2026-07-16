import WhatsAppButton from "./WhatsAppButton";
import AIChatbot from "./AIChatbot";

const FloatingActions = () => {
  return (
    <div className="floating-actions">
      {/* WhatsApp Button - Bottom Left (higher) */}
      <WhatsAppButton />

      {/* AI Chatbot - Bottom Left (lower) */}
      <AIChatbot />
    </div>
  );
};

export default FloatingActions;
