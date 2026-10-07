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
                Properties
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

      {/* Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-side-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Side Navigation Drawer (100% Cloned from Reference Design) */}
      <aside 
        className={`mobile-side-drawer ${isMobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Top Header Banner in Brand Forest Green */}
        <div className="mobile-drawer-top-banner">
          <span className="mobile-drawer-title">MAIN MENU</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="mobile-drawer-close-btn"
            aria-label="Close navigation menu"
          >
            <FaXmark size={20} />
          </button>
        </div>

        {/* Clean Stacked Navigation Menu List */}
        <nav className="mobile-drawer-menu-list">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-menu-link ${isLinkActive('/') ? 'active' : ''}`}
          >
            <span>Home</span>
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-menu-link ${isLinkActive('/services') ? 'active' : ''}`}
          >
            <span>Services</span>
          </Link>
          <Link
            href="/properties"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-menu-link ${isLinkActive('/properties') ? 'active' : ''}`}
          >
            <span>Property Listings</span>
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-menu-link ${isLinkActive('/about') ? 'active' : ''}`}
          >
            <span>About Us</span>
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-menu-link ${isLinkActive('/contact') ? 'active' : ''}`}
          >
            <span>Contact Us</span>
          </Link>
        </nav>

        {/* Bottom Action Bar */}
        <div className="mobile-drawer-bottom">
          <a
            href="https://wa.me/2348164220387?text=Hello%20Olas%20Realtor%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-drawer-cta-btn"
          >
            <FaWhatsapp size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
}
