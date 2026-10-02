'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top fixed z-[9998] flex items-center justify-center w-12 h-12 rounded-full text-white cursor-pointer transition-all duration-400
        bg-gradient-to-br from-[#C41E3A] to-[#E63946] shadow-[0_8px_24px_rgba(196,30,58,0.4)]
        hover:scale-110 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(196,30,58,0.5)]
        bottom-5 left-5 md:bottom-8 md:left-auto md:right-8
        ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-5 pointer-events-none'}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={18} />
    </button>
  );
}
