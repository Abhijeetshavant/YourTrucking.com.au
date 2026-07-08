import WhatsAppButton from "./WhatsAppButton";
import AIChatbot from "./AIChatbot";

const FloatingActions = () => {
  return (
    <>
      {/* WhatsApp Button - Bottom Left (higher) */}
      <WhatsAppButton />

      {/* AI Chatbot - Bottom Left (lower) */}
      <AIChatbot />
    </>
  );
};

export default FloatingActions;
