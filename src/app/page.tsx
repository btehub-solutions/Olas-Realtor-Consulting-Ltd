import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaLandmark,
  FaBuilding,
  FaFileContract,
  FaCalculator,
  FaUserTie,
  FaShieldHalved,
  FaHandshake,
  FaHeadset,
  FaLocationDot,
  FaQuoteLeft,
  FaCheckDouble,
  FaWhatsapp,
} from 'react-icons/fa6';

export default function Home() {

  return (
    <main id="main-content" className="home-page">
      {/* SECTION 1: HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="slide-up">Premier Real Estate Consulting &amp; Strategic Advisory</h1>
          <p className="fade-in">Guiding institutional investors, diaspora clients, and property owners through verified acquisitions, title perfection, and executive asset management across Nigeria.</p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/properties" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center' }}>
              Explore Portfolio <FaArrowRight style={{ fontSize: '0.75rem', marginLeft: '0.4rem' }} />
            </Link>
            <Link href="/contact" className="btn btn-secondary">Schedule Consultation</Link>
          </div>
        </div>
      </section>

      {/* Spacer for fixed hero — pushes content below the viewport-height hero */}
      <div className="hero-spacer" aria-hidden="true" />

      {/* SECTION 2: CORE CAPABILITIES */}
      <section className="section" style={{ padding: '70px 20px', backgroundColor: '#FFFFFF' }}>
          <div className="container max-w-[1200px] mx-auto">
            <div className="section-title">
              <h2>Our Core Capabilities</h2>
              <p>Strategic, end-to-end real estate solutions built on trust and legal security</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Capability 1: Property Sales */}
              <div className="card" style={{ borderRadius: '10px', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
                <div className="card-image" style={{ height: '160px', position: 'relative' }}>
                  <Image
                    src="/images/projects/acquisitions-for-sale.jpg"
                    alt="Verified Property Acquisitions & Developments"
                    width={600}
                    height={380}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="card-content" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div>
                    <h3 className="card-title" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1F2421', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaLandmark style={{ color: '#00A86B', flexShrink: 0 }} />
                      <span>Acquisitions</span>
                    </h3>
                    <p className="card-text" style={{ fontSize: '0.84rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1rem' }}>
                      Verified land banks and developments with thorough legal searches and contract negotiation.
                    </p>
                  </div>
                  <Link href="/properties" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '42px', borderRadius: '6px', backgroundColor: '#C41E3A', color: '#FFFFFF', fontWeight: 600, fontSize: '0.85rem' }}>
                    Explore Portfolio
                  </Link>
                </div>
              </div>

              {/* Capability 2: Property Management */}
              <div className="card" style={{ borderRadius: '10px', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
                <div className="card-image" style={{ height: '160px', position: 'relative' }}>
                  <Image
                    src="/images/projects/asset-management-facility.jpg"
                    alt="Property & Facility Asset Management"
                    width={600}
                    height={380}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="card-content" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div>
                    <h3 className="card-title" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1F2421', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaBuilding style={{ color: '#00A86B', flexShrink: 0 }} />
                      <span>Asset Management</span>
                    </h3>
                    <p className="card-text" style={{ fontSize: '0.84rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1rem' }}>
                      Complete tenant vetting, routine maintenance, rent collection, and facility oversight.
                    </p>
                  </div>
                  <Link href="/services#management" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '42px', borderRadius: '6px', backgroundColor: '#C41E3A', color: '#FFFFFF', fontWeight: 600, fontSize: '0.85rem' }}>
                    Inquire Management
                  </Link>
                </div>
              </div>

              {/* Capability 3: Title Perfection */}
              <div className="card" style={{ borderRadius: '10px', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
                <div className="card-image" style={{ height: '160px', position: 'relative' }}>
                  <Image
                    src="/images/projects/title-regularization-signing.jpg"
                    alt="Title Perfection & C of O Regularization Documentation"
                    width={600}
                    height={380}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="card-content" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div>
                    <h3 className="card-title" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1F2421', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaFileContract style={{ color: '#00A86B', flexShrink: 0 }} />
                      <span>Title Regularization</span>
                    </h3>
                    <p className="card-text" style={{ fontSize: '0.84rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1rem' }}>
                      Expedited processing of land titles, Governor’s Consent, C of O, and registered survey plans.
                    </p>
                  </div>
                  <Link href="/services#title" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '42px', borderRadius: '6px', backgroundColor: '#C41E3A', color: '#FFFFFF', fontWeight: 600, fontSize: '0.85rem' }}>
                    Title Assistance
                  </Link>
                </div>
              </div>

              {/* Capability 4: Valuation & Advisory */}
              <div className="card" style={{ borderRadius: '10px', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
                <div className="card-image" style={{ height: '160px', position: 'relative' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&auto=format&fit=crop&q=80"
                    alt="Valuation & Advisory"
                    width={600}
                    height={380}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="card-content" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div>
                    <h3 className="card-title" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1F2421', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaCalculator style={{ color: '#00A86B', flexShrink: 0 }} />
                      <span>Valuation &amp; Advisory</span>
                    </h3>
                    <p className="card-text" style={{ fontSize: '0.84rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1rem' }}>
                      Certified real estate market appraisals, feasibility studies, and strategic diaspora portfolio planning.
                    </p>
                  </div>
                  <Link href="/services#advisory" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '42px', borderRadius: '6px', backgroundColor: '#C41E3A', color: '#FFFFFF', fontWeight: 600, fontSize: '0.85rem' }}>
                    Request Valuation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ADVISORY CASE STUDIES & TRACK RECORD */}
        <section className="section" style={{ padding: '70px 20px', backgroundColor: '#F6F5F2', borderTop: '1px solid rgba(0, 0, 0, 0.05)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
          <div className="container max-w-[1200px] mx-auto">
            <div className="section-title">
              <h2>Advisory Case Studies &amp; Track Record</h2>
              <p>Proven transaction outcomes, corporate advisory mandates, and title regularization successes across Nigeria</p>
            </div>

            <div className="olas-property-showcase">
              {/* Case Study 1 */}
              <div
                className="property-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="property-image" style={{ height: '160px', position: 'relative' }}>
                  <Image
                    src="/images/projects/project-commercial-waterfront-aerial.jpg"
                    alt="Commercial Portfolio Advisory — Prime Commercial & Waterfront Developments"
                    width={600}
                    height={380}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="property-content" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 className="property-title" style={{ fontSize: '1rem', fontWeight: 700, color: '#1F2421', marginBottom: '0.4rem', lineHeight: 1.35 }}>
                    Commercial Asset Advisory
                  </h3>
                  <p className="property-location" style={{ fontSize: '0.8rem', color: '#6B7280', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <FaLocationDot style={{ color: '#00A86B', flexShrink: 0, fontSize: '0.75rem' }} />
                    <span>Abeokuta Commercial Hub</span>
                  </p>
                  <p className="property-description" style={{ fontSize: '0.84rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1rem' }}>
                    Structured legal due diligence and turnkey acquisition advisory for institutional multi-unit assets with verified registry filings.
                  </p>
                  <Link
                    href="/contact?subject=Commercial%20Asset%20Advisory"
                    className="btn btn-primary"
                    style={{
                      marginTop: 'auto',
                      width: '100%',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '42px',
                      borderRadius: '6px',
                      backgroundColor: '#C41E3A',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                    }}
                  >
                    Consult on Mandate
                  </Link>
                </div>
              </div>

              {/* Case Study 2 */}
              <div
                className="property-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="property-image" style={{ height: '160px', position: 'relative' }}>
                  <Image
                    src="/images/projects/real-estate-consultants.jpg"
                    alt="Professional Real Estate Consultants — Olas Realtor Consulting Ltd"
                    width={600}
                    height={380}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="property-content" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 className="property-title" style={{ fontSize: '1rem', fontWeight: 700, color: '#1F2421', marginBottom: '0.4rem', lineHeight: 1.35 }}>
                    Real Estate Consultants
                  </h3>
                  <p className="property-location" style={{ fontSize: '0.8rem', color: '#6B7280', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <FaLocationDot style={{ color: '#00A86B', flexShrink: 0, fontSize: '0.75rem' }} />
                    <span>Ogun State &amp; Western Nigeria</span>
                  </p>
                  <p className="property-description" style={{ fontSize: '0.84rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1rem' }}>
                    Experienced property consultants and site specialists providing strategic development advisory, rigorous project assessments, and trusted acquisition guidance.
                  </p>
                  <Link
                    href="/contact?subject=Real%20Estate%20Consultants%20Inquiry"
                    className="btn btn-primary"
                    style={{
                      marginTop: 'auto',
                      width: '100%',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '42px',
                      borderRadius: '6px',
                      backgroundColor: '#C41E3A',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                    }}
                  >
                    Consult on Mandate
                  </Link>
                </div>
              </div>

              {/* Case Study 3 */}
              <div
                className="property-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="property-image" style={{ height: '160px', position: 'relative' }}>
                  <Image
                    src="/images/projects/diaspora-acquisition-advisory.jpg"
                    alt="Diaspora Acquisition Advisory & Verified Closings"
                    width={600}
                    height={380}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="property-content" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 className="property-title" style={{ fontSize: '1rem', fontWeight: 700, color: '#1F2421', marginBottom: '0.4rem', lineHeight: 1.35 }}>
                    Diaspora Acquisition Advisory
                  </h3>
                  <p className="property-location" style={{ fontSize: '0.8rem', color: '#6B7280', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <FaLocationDot style={{ color: '#00A86B', flexShrink: 0, fontSize: '0.75rem' }} />
                    <span>Western Nigeria &amp; Diaspora Clients</span>
                  </p>
                  <p className="property-description" style={{ fontSize: '0.84rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1rem' }}>
                    End-to-end verified acquisitions, legal representation, and post-closing management for overseas investors across the UK, US, and Canada.
                  </p>
                  <Link
                    href="/contact?subject=Diaspora%20Acquisition%20Advisory"
                    className="btn btn-primary"
                    style={{
                      marginTop: 'auto',
                      width: '100%',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '42px',
                      borderRadius: '6px',
                      backgroundColor: '#C41E3A',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                    }}
                  >
                    Consult on Mandate
                  </Link>
                </div>
              </div>

              {/* Case Study 4 */}
              <div
                className="property-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="property-image" style={{ height: '160px', position: 'relative' }}>
                  <Image
                    src="/images/projects/corporate-land-banking-surveyor.jpg"
                    alt="Corporate Land Banking & Certified Site Surveys"
                    width={600}
                    height={380}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="property-content" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 className="property-title" style={{ fontSize: '1rem', fontWeight: 700, color: '#1F2421', marginBottom: '0.4rem', lineHeight: 1.35 }}>
                    Corporate Land Banking
                  </h3>
                  <p className="property-location" style={{ fontSize: '0.8rem', color: '#6B7280', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <FaLocationDot style={{ color: '#00A86B', flexShrink: 0, fontSize: '0.75rem' }} />
                    <span>Abeokuta Growth Corridors</span>
                  </p>
                  <p className="property-description" style={{ fontSize: '0.84rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1rem' }}>
                    Secured 50+ hectares of zero-encumbrance strategic land banks with certified perimeter surveys and government excision filings.
                  </p>
                  <Link
                    href="/contact?subject=Land%20Banking%20Advisory"
                    className="btn btn-primary"
                    style={{
                      marginTop: 'auto',
                      width: '100%',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '42px',
                      borderRadius: '6px',
                      backgroundColor: '#C41E3A',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                    }}
                  >
                    Consult on Mandate
                  </Link>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link
                href="/services"
                className="btn btn-primary"
                style={{
                  height: '42px',
                  padding: '0 2rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  backgroundColor: '#C41E3A',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                }}
              >
                Explore Advisory Services <FaArrowRight style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: FOUNDER SPOTLIGHT & TITLE SECURITY GUARANTEE */}
        <section className="section" style={{ padding: '75px 20px', backgroundColor: '#141815', color: '#FFFFFF' }}>
          <div className="container max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Left Box: Founder Quote */}
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '2.25rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#00A86B' }}>Leadership Spotlight</span>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.4rem', marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>
                    Driven by Transparency &amp; Generational Wealth
                  </h3>
                  <blockquote style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#D1D5DB', lineHeight: 1.7, borderLeft: '3px solid #00A86B', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                    &ldquo;Real estate success in Nigeria is built on absolute transparency, uncompromising title due diligence, and creating generational value for every client we serve.&rdquo;
                  </blockquote>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#00A86B', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.2rem', boxShadow: '0 0 16px rgba(0, 168, 107, 0.4)' }}>
                    KD
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>Kolade Abiola Daramola</h4>
                    <p style={{ fontSize: '0.8rem', color: '#9CA3AF', margin: 0 }}>Founder &amp; Managing Director</p>
                  </div>
                </div>
              </div>

              {/* Right Box: Title Security Guarantee */}
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '2.25rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#C41E3A' }}>Title Security Assurance</span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.4rem', marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>
                  100% Legal Due Diligence Guarantee
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#D1D5DB', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Every parcel of land and developed property listed under Olas Realtor Consulting undergoes rigorous land registry searches, survey verification, and title validation before onboarding.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: '#F3F4F6', fontWeight: 500 }}>
                    <FaCheckDouble style={{ color: '#00A86B', flexShrink: 0 }} />
                    <span>State Ministry Land Registry Verification</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: '#F3F4F6', fontWeight: 500 }}>
                    <FaCheckDouble style={{ color: '#00A86B', flexShrink: 0 }} />
                    <span>Registered Surveyor Coordinate Matching</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: '#F3F4F6', fontWeight: 500 }}>
                    <FaCheckDouble style={{ color: '#00A86B', flexShrink: 0 }} />
                    <span>Governor’s Consent &amp; C of O Regularization Support</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: '#F3F4F6', fontWeight: 500 }}>
                    <FaCheckDouble style={{ color: '#00A86B', flexShrink: 0 }} />
                    <span>Zero Encumbrance &amp; Third-Party Claim Guarantee</span>
                  </li>
                </ul>
                <Link 
                  href="/about" 
                  className="btn" 
                  style={{ 
                    marginTop: 'auto', 
                    textAlign: 'center', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '42px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Learn About Our Governance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: THE OLAS ADVANTAGE */}
        <section className="section" style={{ padding: '70px 20px', backgroundColor: '#FFFFFF' }}>
          <div className="container max-w-[1200px] mx-auto">
            <div className="section-title">
              <h2>Why Choose Olas Realtor</h2>
              <p>Proven reliability and institutional excellence in every transaction</p>
            </div>

            <div className="features-grid">
              <div className="feature-box">
                <div className="feature-icon"><FaUserTie style={{ color: '#00A86B' }} /></div>
                <h3 className="feature-title">Expert Guidance</h3>
                <p className="feature-text">Strategic advisory from seasoned Nigerian market specialists with local intelligence.</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon"><FaShieldHalved style={{ color: '#C41E3A' }} /></div>
                <h3 className="feature-title">Verified Due Diligence</h3>
                <p className="feature-text">Strict title verification and thorough registry investigations on all assets.</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon"><FaHandshake style={{ color: '#00A86B' }} /></div>
                <h3 className="feature-title">Direct Transactions</h3>
                <p className="feature-text">Transparent negotiations and transparent closings with zero hidden agency markups.</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon"><FaHeadset style={{ color: '#C41E3A' }} /></div>
                <h3 className="feature-title">Dedicated Advisory</h3>
                <p className="feature-text">Continuous post-transaction support, property management, and remittances.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CLIENT ENDORSEMENTS */}
        <section className="section" style={{ padding: '70px 20px', backgroundColor: '#F6F5F2', borderTop: '1px solid rgba(0, 0, 0, 0.05)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
          <div className="container max-w-[1200px] mx-auto">
            <div className="section-title">
              <h2>What Our Clients Say</h2>
              <p>Real feedback from property buyers, diaspora investors, and commercial owners</p>
            </div>

            <div className="olas-testimonial-showcase">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon"><FaQuoteLeft /></div>
                  <p className="testimonial-text">
                    &ldquo;Olas Realtor helped us secure our dream home in Abeokuta with complete legal transparency. Seamless from due diligence to closing.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <Image src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=100&h=100&fit=crop&q=80" alt="Mr. Adebayo Johnson" width={100} height={100} />
                    </div>
                    <div>
                      <h4 className="author-name">Mr. Adebayo Johnson</h4>
                      <p className="author-title">Property Buyer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon"><FaQuoteLeft /></div>
                  <p className="testimonial-text">
                    &ldquo;As a diaspora investor, acquiring land in Ogun State remotely was daunting. Kolade and his team handled survey lodging and verification flawlessly.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <Image src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&q=80" alt="Miss Chioma Okafor" width={100} height={100} />
                    </div>
                    <div>
                      <h4 className="author-name">Miss Chioma Okafor</h4>
                      <p className="author-title">Diaspora Investor</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon"><FaQuoteLeft /></div>
                  <p className="testimonial-text">
                    &ldquo;Outstanding property management. Reliable monthly rent remittances and swift maintenance give me absolute peace of mind.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <div style={{ width: 50, height: 50, borderRadius: '50%', backgroundColor: '#00A86B', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                        EN
                      </div>
                    </div>
                    <div>
                      <h4 className="author-name">Dr. Emeka Nwosu</h4>
                      <p className="author-title">Commercial Landlord</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: FINAL CTA BANNER */}
        <section className="home-cta-section" style={{ padding: '75px 20px', backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
          <div className="container max-w-[850px] mx-auto text-center px-4 sm:px-6">
            <h2 className="home-cta-title" style={{ color: '#00A86B', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>
              Start Your Property Journey Today
            </h2>
            <p className="home-cta-desc" style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              Let our expert advisory team guide you through verified acquisitions, title perfection, and high-yield property investments with zero hassle.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '0.85rem 2.25rem', height: '42px', fontSize: '0.875rem', fontWeight: 700, backgroundColor: '#C41E3A', color: '#FFFFFF', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Schedule Consultation
              </Link>
              <a
                href="https://wa.me/2348164220387"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ padding: '0.85rem 2.25rem', height: '42px', fontSize: '0.875rem', fontWeight: 700, backgroundColor: '#00A86B', color: '#FFFFFF', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none' }}
              >
                <FaWhatsapp style={{ fontSize: '1.1rem' }} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
    </main>
  );
}
