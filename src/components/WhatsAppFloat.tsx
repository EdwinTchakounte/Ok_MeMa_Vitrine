import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const phoneNumber = '+237673071600';
  const message = encodeURIComponent('Bonjour, je souhaite en savoir plus sur MEMA.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
      aria-label="Contacter via WhatsApp"
    >
      {/* Animation de bord */}
      <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-75"></div>
      <div className="absolute inset-0 rounded-full border border-green-300 animate-pulse"></div>
      
      {/* Icône */}
      <div className="relative z-10">
      <MessageCircle className="w-5 h-5" />
      </div>
    </a>
  );
};

export default WhatsAppFloat;