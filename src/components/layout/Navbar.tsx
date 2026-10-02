'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaXmark, FaWhatsapp } from 'react-icons/fa6';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on page navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const navLinks = [
    { number: '01', label: 'Home', href: '/' },
    { number: '02', label: 'About', href: '/about' },
    { number: '03', label: 'Services', href: '/services' },
    { number: '04', label: 'Properties', href: '/properties' },
    { number: '05', label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-container flex items-center justify-between h-[68px] max-w-[1240px] mx-auto px-6">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="logo inline-flex items-center justify-center shrink-0 pt-1 hover:opacity-95 transition-opacity" 
            aria-label="Olas Realtor Consulting Ltd Home"
          >
            <Image
              src="/images/logo-trimmed.png"
              alt="Olas Realtor Consulting Ltd"
              width={150}
              height={38}
              className="logo-image"
              priority
              style={{ 
                height: '36px', 
                width: 'auto', 
                maxHeight: '36px', 
                objectFit: 'contain', 
                display: 'block' 
              }}
            />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            id="mobileToggle"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>

          {/* Desktop Navigation Menu */}
          <ul className="nav-menu" id="navMenu">
            <li>
              <Link
                href="/"
                className={`nav-link ${isLinkActive('/') ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`nav-link ${isLinkActive('/about') ? 'active' : ''}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`nav-link ${isLinkActive('/services') ? 'active' : ''}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/properties"
                className={`nav-link ${isLinkActive('/properties') ? 'active' : ''}`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`nav-link ${isLinkActive('/contact') ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Luxury Editorial Mobile Drawer Overlay (Matches Reference Design) */}
      <div 
        className={`mobile-luxury-drawer ${isMobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-drawer-inner">
          {/* Top Bar: Brand Logo & Close Button */}
          <div className="mobile-drawer-header">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-drawer-logo"
              aria-label="Olas Realtor Consulting Ltd Home"
            >
              <Image
                src="/images/logo-trimmed.png"
                alt="Olas Realtor Consulting Ltd"
                width={140}
                height={36}
                style={{ height: '34px', width: 'auto', maxHeight: '34px', objectFit: 'contain', display: 'block' }}
              />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-drawer-close"
              aria-label="Close navigation menu"
            >
              <FaXmark size={22} />
            </button>
          </div>

          {/* Numbered Luxury Navigation Links */}
          <div className="mobile-drawer-links-wrap">
            <nav className="mobile-drawer-nav" aria-label="Mobile Navigation">
              {navLinks.map((item) => {
                const active = isLinkActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`mobile-nav-item ${active ? 'active' : ''}`}
                  >
                    <span className="mobile-nav-num">{item.number}</span>
                    <span className="mobile-nav-label">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Information Block & Action Button */}
          <div className="mobile-drawer-footer">
            <div className="mobile-drawer-meta-grid">
              <div className="mobile-drawer-meta-col">
                <span className="mobile-meta-title">SAY HELLO</span>
                <a 
                  href="mailto:olasarealtor@gmail.com" 
                  className="mobile-meta-value text-link"
                >
                  olasarealtor@gmail.com
                </a>
              </div>
              <div className="mobile-drawer-meta-col">
                <span className="mobile-meta-title">OPEN HOURS</span>
                <span className="mobile-meta-value">
                  Mon – Sat: 8AM – 6PM
                </span>
              </div>
            </div>

            {/* Prominent Full-Width WhatsApp CTA Button */}
            <a
              href="https://wa.me/2348164220387?text=Hello%20Olas%20Realtor%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-drawer-whatsapp-btn"
            >
              <FaWhatsapp size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
