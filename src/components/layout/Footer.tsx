'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTiktok,
  FaXTwitter,
  FaInstagram,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa6';

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  const handleLinkedInClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Coming soon: We are yet to connect our LinkedIn.');
  };

  return (
    <footer className="footer bg-[#1F2421] text-white pt-9 pb-6 px-6 sm:px-8 relative text-left" style={{ overflow: 'visible' }}>
      {/* Single Clean Tricolor Top Line */}
      <div className="footer-top-stripe" />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
        {/* Column 1: Brand Info & Social Icons */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="footer-logo-wrap" style={{ width: '135px', maxWidth: '135px', height: '42px', marginBottom: '0.75rem' }}>
            <Image
              src="/images/OLAS_UPDATED_LOGO-removebg-preview.png"
              alt="Olas Realtor Consulting Ltd"
              width={135}
              height={42}
              style={{ width: '135px', height: '42px', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <p className="footer-desc">
            Your trusted partner in luxury real estate solutions across Nigeria. We provide professional property sales, management, and strategic advisory.
          </p>
          <div className="footer-social-row" style={{ justifyContent: 'flex-start' }}>
            <a
              href="#linkedin"
              onClick={handleLinkedInClick}
              aria-label="LinkedIn (Coming Soon)"
              title="Coming Soon: We are yet to connect our LinkedIn"
              className="footer-social-box cursor-pointer"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              href="https://www.facebook.com/share/19nuQcNWo4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social-box"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="http://tiktok.com/@is_olasrealtor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="footer-social-box"
            >
              <FaTiktok size={14} />
            </a>
            <a
              href="https://x.com/is_ola001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="footer-social-box"
            >
              <FaXTwitter size={14} />
            </a>
            <a
              href="https://www.instagram.com/is_olasrealtor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social-box"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="col-span-1">
          <h3 className="footer-heading">
            Quick Links
          </h3>
          <ul className="footer-link-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/properties">Properties</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Our Capabilities */}
        <div className="col-span-1">
          <h3 className="footer-heading">
            Our Capabilities
          </h3>
          <ul className="footer-link-list">
            <li><Link href="/services#sales">Property Acquisitions</Link></li>
            <li><Link href="/services#management">Asset &amp; Facility Management</Link></li>
            <li><Link href="/services#title">Title Perfection &amp; C of O</Link></li>
            <li><Link href="/services#advisory">Valuation &amp; Advisory</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Us & Newsletter */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="footer-heading">
            Contact Us
          </h3>
          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <FaLocationDot />
              <span>48, Olayiwola Bankole Street, Oluwo, Abeokuta, Ogun State</span>
            </li>
            <li className="footer-contact-item">
              <FaEnvelope />
              <a href="mailto:olasarealtor@gmail.com">olasarealtor@gmail.com</a>
            </li>
            <li className="footer-contact-item">
              <FaPhone />
              <span>
                <a href="tel:+2348164220387">08164220387</a> / <a href="tel:+2348055800325">08055800325</a>
              </span>
            </li>
            <li className="footer-contact-item">
              <FaWhatsapp />
              <a href="https://wa.me/2348164220387" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </li>
          </ul>

          {/* Newsletter Form */}
          <div className="footer-newsletter-wrap">
            <h4>Newsletter</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email"
                required
                className="footer-newsletter-input"
              />
              <button
                type="submit"
                className="footer-newsletter-btn"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-copyright max-w-[1200px] mx-auto border-t border-white/10">
        <p>&copy; 2025 Olas Realtor Consulting Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
