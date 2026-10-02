'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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

  // Close mobile menu on page navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container flex items-center justify-between h-[68px] max-w-[1240px] mx-auto px-6">
        {/* Brand Logo - Optically Centered on the same baseline as the nav text */}
        <Link 
          href="/" 
          className="logo inline-flex items-center justify-center shrink-0 pt-1 hover:opacity-95 transition-opacity" 
          aria-label="Olas Realtor Consulting Ltd Home"
        >
          <Image
            src="/images/logo-trimmed.png"
            alt="Olas Realtor Consulting Ltd"
            width={170}
            height={44}
            className="logo-image"
            priority
            style={{ 
              height: '42px', 
              width: 'auto', 
              maxHeight: '42px', 
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          id="mobileToggle"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <li>
            <Link
              href="/"
              className={`nav-link ${isLinkActive('/') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`nav-link ${isLinkActive('/about') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`nav-link ${isLinkActive('/services') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/properties"
              className={`nav-link ${isLinkActive('/properties') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`nav-link ${isLinkActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
