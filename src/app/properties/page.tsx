import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaAward, FaWhatsapp } from 'react-icons/fa6';
import PropertyShowcaseGrid from '@/components/properties/PropertyShowcaseGrid';

export const metadata: Metadata = {
  title: 'Portfolio & Verified Properties Across Nigeria',
  description:
    'Explore verified luxury residential duplexes, terraces, contemporary homes, and commercial developments across Abeokuta, Ogun State, and Nigeria by Olas Realtor Consulting Ltd.',
  alternates: {
    canonical: '/properties',
  },
  openGraph: {
    title: 'Portfolio & Verified Properties Across Nigeria | Olas Realtor Consulting Ltd',
    description:
      'Delivering real estate excellence across Nigeria. Verified luxury residences, prime terraces, and institutional commercial developments.',
    url: 'https://olasrealtorconsulting.com/properties',
  },
};

export default function Properties() {
  return (
    <main id="main-content" className="property-showcase-page">
      {/* Standard Inner Page Hero Banner (Full Parity with About, Services & Contact) */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="slide-up">Properties &amp; Portfolio</h1>
          <p className="fade-in">
            Verified Residential Homes, Luxury Terraces, and Commercial Investments Across Nigeria
          </p>
        </div>
      </section>

      {/* Editorial Section (100% Clone of Reference Screenshot Header) */}
      <section className="property-hero-section">
        <div className="property-hero-container">
          <div>
            <h2 className="property-hero-title">
              Delivering <span className="property-brand-text">Real Estate</span>
              <br />
              <span className="property-brand-text">Excellence</span> Across Nigeria
            </h2>
          </div>
          <div>
            <p className="property-hero-description">
              From property valuation and investment advisory to project management and development consultancy,{' '}
              <strong>Olas Realtor Consulting Ltd</strong> has successfully partnered with individuals, businesses,
              developers, financial institutions, and government agencies to deliver real estate solutions that create
              lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Property Showcase Grid (3-Column Layout with Distinct Brand Palette Flip Cards) */}
      <PropertyShowcaseGrid />

      {/* Institutional Track Record & National Award Credential */}
      <section
        style={{
          backgroundColor: '#F8F9FA',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          padding: '65px 24px',
        }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div style={{ flex: '1 1 500px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#00A86B',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.75rem',
                }}
              >
                <FaAward style={{ fontSize: '1.1rem' }} />
                <span>Institutional Credential</span>
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 700,
                  color: '#1F2421',
                  marginBottom: '1rem',
                  lineHeight: 1.25,
                }}
              >
                National Outstanding Performance Recognition
              </h3>
              <p
                style={{
                  color: '#4B5563',
                  fontSize: '0.95rem',
                  lineHeight: 1.65,
                  marginBottom: '1.5rem',
                  maxWidth: '580px',
                }}
              >
                Honored nationally by the National Association of Polytechnic Students (NAPS) as an Outstanding Real
                Estate Development Firm in Nigeria. Every portfolio acquisition undergoes rigorous statutory registry
                investigation, ensuring 100% encumbrance-free ownership.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '42px',
                    padding: '0 1.5rem',
                    borderRadius: '6px',
                    backgroundColor: '#C41E3A',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                  }}
                >
                  Schedule Due Diligence
                </Link>
                <a
                  href="https://wa.me/2348164220387?text=Hello%20Olas%20Realtor,%20I%20would%20like%20to%20discuss%20property%20due%20diligence."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    height: '42px',
                    padding: '0 1.5rem',
                    borderRadius: '6px',
                    backgroundColor: '#25D366',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                  }}
                >
                  <FaWhatsapp />
                  <span>WhatsApp Consultant</span>
                </a>
              </div>
            </div>

            <div
              style={{
                flex: '0 0 280px',
                maxWidth: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
                backgroundColor: '#FAFAFA',
              }}
            >
              <Image
                src="/images/olas-naps-national-award.jpg"
                alt="National Outstanding Performance Award — Olas Realtor Consulting Limited"
                width={600}
                height={600}
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '1 / 1',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Standardized Light CTA Section */}
      <section className="home-cta-section" style={{ backgroundColor: '#FAFBFC', padding: '80px 24px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <h2 className="home-cta-title" style={{ color: '#00A86B', fontSize: '2.1rem', fontWeight: 700, marginBottom: '1rem' }}>
            Ready to Acquire or Develop in Nigeria?
          </h2>
          <p className="home-cta-desc" style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Connect directly with Principal Consultant Kolade Abiola Daramola and our senior advisory desk for transparent, verified transactions.
          </p>
          <div className="home-cta-btn-group" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '42px',
                padding: '0 2rem',
                borderRadius: '6px',
                backgroundColor: '#C41E3A',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.875rem',
              }}
            >
              Inquire About Properties
            </Link>
            <a
              href="https://wa.me/2348164220387?text=Hello%20Olas%20Realtor,%20I%20am%20ready%20to%20discuss%20property%20investment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                justifyContent: 'center',
                height: '42px',
                padding: '0 2rem',
                borderRadius: '6px',
                backgroundColor: '#1F2421',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}
            >
              <FaWhatsapp />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
