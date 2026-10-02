'use client';
import { FaWhatsapp } from 'react-icons/fa6';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348164220387"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed z-[9999] bottom-5 right-5 md:bottom-8 md:right-8 w-14 h-14 rounded-full flex items-center justify-center text-white 
      bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-[0_8px_24px_rgba(37,211,102,0.4)]
      transition-all duration-400 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)]
      animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
