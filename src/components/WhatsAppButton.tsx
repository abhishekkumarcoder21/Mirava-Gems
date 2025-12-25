import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Hi MIRAVA GEMS 💕\nI'd like to place an order. Please share designs & prices.");
    window.open(`https://wa.me/916001166308?text=${message}`, '_blank');
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-glow transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
      }}
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring' }}
      whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(37, 211, 102, 0.5)' }}
      whileTap={{ scale: 0.9 }}
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Ping animation */}
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-green-400"
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.button>
  );
};

export default WhatsAppButton;
