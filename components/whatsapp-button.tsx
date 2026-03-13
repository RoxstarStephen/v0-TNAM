'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/constants';

export function WhatsAppButton() {
  const handleWhatsAppClick = (): void => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300"
      whileHover={{
        scale: 1.15,
        boxShadow: '0 20px 40px rgba(34, 197, 94, 0.4)',
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 20 }}
      aria-label="Open WhatsApp chat"
    >
      {/* Pulsing Ring Animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{ scale: [1, 1.4], opacity: [0.7, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Icon */}
      <MessageCircle className="w-6 h-6 relative z-10" />
    </motion.button>
  );
}
