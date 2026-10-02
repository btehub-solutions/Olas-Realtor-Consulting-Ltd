import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaHouse,
  FaBuilding,
  FaKey,
  FaCalculator,
  FaFileContract,
  FaCompassDrafting,
  FaCircleCheck,
  FaUserShield,
  FaChartLine,
  FaHandshake,
  FaHeadset,
} from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Real Estate Services & Core Capabilities',
  description:
    'Comprehensive real estate consulting across Abeokuta, Ogun State, and Nigeria. Specializing in verified property sales, statutory title perfection (C of O & Governor’s Consent), valuation, and asset management.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Real Estate Services & Core Capabilities | Olas Realtor Consulting Ltd',
    description:
      'Property sales, statutory title perfection, facility management, and investment advisory in Abeokuta, Ogun State, and Western Nigeria.',
    url: 'https://olasrealtorconsulting.com/services',
  },
};

export default function Services() {
  const services = [
    {
      id: 'sales',
      title: 'Property Sales & Acquisitions',
      icon: FaHouse,
      image: '/images/projects/project-charcoal-duplex.jpg',
      desc: 'Seamless acquisition and disposal of premium residential homes, commercial complexes, and investment lands with comprehensive due diligence.',
      highlights: ['Title Due Diligence & Search', 'Price Negotiation & Contracting', 'Closing & Escrow Support'],
      link: '/properties',
      btnText: 'Explore Portfolio',
    },
    {
      id: 'management',
      title: 'Property & Asset Management',
      icon: FaBuilding,
      image: '/images/projects/project-terrace-duplex.jpg',
      desc: 'End-to-end facility oversight, tenant screening, preventive maintenance, and steady rental yield collection to maximize asset values.',
      highlights: ['Strict Tenant Vetting', 'Prompt Rent Remittance', 'Routine Facility Maintenance'],
      link: '/contact?subject=Property%20Management',
      btnText: 'Inquire Management',
    },
    {
      id: 'letting',
      title: 'Luxury Letting & Asset Tenancy',
      icon: FaKey,
      image: '/images/projects/project-glass-villa-pool.jpg',
      desc: 'Connecting discerning tenants with executive serviced apartments, family duplexes, and prime commercial suites across top Nigerian enclaves.',
      highlights: ['Curated Rental Inventory', 'Standard Lease Agreements', 'Move-in Inspection Support'],
      link: '/contact?subject=Tenancy%20Advisory',
      btnText: 'Consult on Tenancy',
    },
    {
      id: 'advisory',
      title: 'Valuation & Advisory',
      icon: FaCalculator,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      desc: 'Certified real estate valuations for open-market assessment, mortgage security, capital gains, insurance, and investment feasibility.',
      highlights: ['Open Market Valuations', 'Mortgage & Loan Appraisals', 'Portfolio Feasibility Studies'],
      link: '/contact?subject=Valuation%20Services',
      btnText: 'Request Valuation',
    },
    {
      id: 'title',
      title: 'Title Documentation & Regularization',
      icon: FaFileContract,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
      desc: 'Expedited processing of official land titles, Governor’s Consent, C of O, Deed of Assignment, and registered survey documentation.',
      highlights: ['C of O & Consent Processing', 'Registered Survey Plans', 'Land Registry Lodgment'],
      link: '/contact?subject=Title%20Documentation',
      btnText: 'Get Title Assistance',
    },
    {
      id: 'architectural',
      title: 'Architectural & Planning Advisory',
      icon: FaCompassDrafting,
      image: '/images/projects/project-modern-duplex-palms.jpg',
      desc: 'Technical architectural design, 2D/3D floor layouts, structural specifications, and municipal planning approvals for developers.',
      highlights: ['2D/3D Architectural Blueprints', 'Structural & MEP Drawings', 'Building Approvals Support'],
      link: '/contact?subject=Architectural%20Services',
      btnText: 'Consult an Architect',
    },
  ];

  return (
    <main id="main-content" className="services-page">
      {/* Header Banner */}
      <section className="hero" style={{ padding: '60px 20px 50px 20px' }}>
        <div className="hero-content">
          <h1>Real Estate Services</h1>
          <p>Professional solutions tailored for property owners, buyers, and investors</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ padding: '75px 20px', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Core Capabilities</h2>
            <p>Comprehensive, reliable real estate expertise delivered with utmost integrity</p>
          </div>

          <div
            className="card-grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {services.map((srv) => (
              <div key={srv.id} id={srv.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="card-image" style={{ height: '175px', position: 'relative' }}>
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    width={600}
                    height={380}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="card-content" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div>
                    <h3
                      className="card-title"
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        marginBottom: '0.45rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <srv.icon style={{ color: 'var(--primary-green)', fontSize: '1rem', flexShrink: 0 }} />
                      <span>{srv.title}</span>
                    </h3>
                    <p
                      className="card-text"
                      style={{
                        fontSize: '0.85rem',
                        lineHeight: 1.55,
                        color: '#4B5563',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {srv.desc}
                    </p>

                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '0 0 1.25rem 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem',
                      }}
                    >
                      {srv.highlights.map((h, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: '0.8rem',
                            color: '#1F2421',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                          }}
                        >
                          <FaCircleCheck style={{ color: 'var(--primary-green)', fontSize: '0.75rem', flexShrink: 0 }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginTop: 'auto' }}>
                    <Link
                      href={srv.link}
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '42px',
                      }}
                    >
                      {srv.btnText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services (Parity with Homepage) */}
      <section className="section" style={{ backgroundColor: '#F6F5F2', borderTop: '1px solid rgba(0, 0, 0, 0.05)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)', padding: '75px 20px' }}>
        <div className="container">
          <div className="section-title">
            <h2>The Olas Realtor Advantage</h2>
            <p>Built on institutional standards, legal security, and transparent client relations</p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">
                <FaUserShield style={{ color: 'var(--primary-green)' }} />
              </div>
              <h3 className="feature-title">Verified Due Diligence</h3>
              <p className="feature-text">Rigorous registry investigations protecting you against encumbrances.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <FaChartLine style={{ color: 'var(--horse-blood)' }} />
              </div>
              <h3 className="feature-title">High-Yield Assets</h3>
              <p className="feature-text">Selective inventory chosen for strong capital appreciation and rental yield.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <FaHandshake style={{ color: 'var(--primary-green)' }} />
              </div>
              <h3 className="feature-title">Direct Transactions</h3>
              <p className="feature-text">Transparent negotiations and transparent closings with no hidden fees.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <FaHeadset style={{ color: 'var(--horse-blood)' }} />
              </div>
              <h3 className="feature-title">Dedicated Advisory</h3>
              <p className="feature-text">Continuous post-transaction support and ongoing asset management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Standardized Light CTA Section */}
      <section className="home-cta-section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0, 0, 0, 0.06)', padding: '75px 20px' }}>
        <div className="container">
          <h2 className="home-cta-title">Ready to Discuss Your Property Needs?</h2>
          <p className="home-cta-desc">
            Speak directly with our senior consultants for bespoke advice on acquisitions, leasing, or property valuation.
          </p>
          <div className="home-cta-btn-group">
            <Link href="/contact" className="home-cta-btn">
              Schedule Consultation
            </Link>
            <a
              href="https://wa.me/2348164220387?text=Hello%20Olas%20Realtor,%20I%20would%20like%20to%20inquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="home-cta-btn"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
