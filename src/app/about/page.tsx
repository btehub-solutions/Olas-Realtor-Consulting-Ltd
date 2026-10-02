import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaArrowRight, FaEye, FaBullseye, FaHeart } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'About Us & Leadership | Olas Realtor Consulting Ltd',
  description:
    'Learn about Olas Realtor Consulting Ltd, our founder Kolade Abiola Daramola, and our 15+ year track record delivering verified real estate acquisitions, C of O processing, and asset management in Nigeria.',
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return (
    <main id="main-content" className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="slide-up">About Olas Realtor Consulting Ltd</h1>
          <p className="fade-in">Building Trust, Delivering Excellence in Nigerian Real Estate</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-image" style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)' }}>
              <Image
                src="/images/olas-branded-helmet.jpg"
                alt="Olas Realtor Consulting Ltd — Certified Engineering & Professional Real Estate Standards"
                width={800}
                height={600}
                style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%', borderRadius: '10px' }}
              />
            </div>
            <div className="about-text">
              <h2 style={{ color: 'var(--primary-green)', marginBottom: '1.25rem', fontSize: '2.25rem', fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Who We Are</h2>
              <p style={{ color: 'var(--dark-gray)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '1.05rem', fontWeight: 500 }}>
                Olas Realtor Consulting Ltd is an executive real estate advisory and property management firm headquartered in Abeokuta, Ogun State.
              </p>
              <p style={{ color: 'var(--gray)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                We eliminate uncertainty in Nigerian real estate through rigorously verified property acquisitions, structured commercial and residential management, and specialized professional training that empowers investors and homeowners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="section section-alt" style={{ background: 'linear-gradient(135deg, rgba(0, 107, 60, 0.02) 0%, rgba(88, 15, 15, 0.02) 100%)' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '2.25rem', fontWeight: 700, color: 'var(--primary-green)', marginBottom: '0.5rem' }}>Meet Our Founder</h2>
            <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, var(--primary-green) 0%, var(--horse-blood) 100%)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>
          <div className="about-content" style={{ background: 'white', padding: '2.5rem', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
            <div className="about-image" style={{ position: 'relative', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.12)', borderRadius: '10px', overflow: 'hidden' }}>
              <Image
                src="/images/founder-kolade.jpg"
                alt="Kolade Abiola Daramola - Founder & CEO"
                width={600}
                height={600}
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent)', padding: '1.25rem' }}>
                <h3 style={{ color: 'white', fontFamily: "'Poppins', sans-serif", fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>Kolade Abiola Daramola</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem', margin: '0.2rem 0 0 0' }}>Founder & CEO</p>
              </div>
            </div>
            <div className="about-text">
              <div style={{ borderLeft: '4px solid var(--primary-green)', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
                <p style={{ color: 'var(--dark-gray)', lineHeight: 1.8, fontSize: '1rem', fontStyle: 'italic', fontWeight: 500, margin: 0 }}>
                  "Real estate success is built on absolute transparency, uncompromising integrity, and creating generational wealth for every client we serve."
                </p>
              </div>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: '1.75rem', fontSize: '0.95rem' }}>
                Founded by Kolade Abiola Daramola, Olas Realtor Consulting Ltd combines deep Nigerian property intelligence with disciplined client advisory. Under his leadership, the firm has facilitated hundreds of verified acquisitions, secure title transfers, and high-yield property investments across Abeokuta and western Nigeria.
              </p>
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  Get In Touch <FaEnvelope style={{ fontSize: '0.75rem', marginLeft: '0.4rem' }} />
                </Link>
                <Link href="/services" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  Our Services <FaArrowRight style={{ fontSize: '0.75rem', marginLeft: '0.4rem' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Impact in Numbers</h2>
            <p>Proven track record of excellence and client satisfaction</p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years in Business</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-number">500+</div>
              <div className="stat-label">Properties Sold</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-number">200+</div>
              <div className="stat-label">Professionals Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Our Vision, Mission & Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><FaEye /></div>
              <h3 className="value-title">Our Vision</h3>
              <p className="value-text">
                To be Nigeria's most trusted real estate consultancy, setting industry standards for professionalism, transparency, and client empowerment in every transaction.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon"><FaBullseye /></div>
              <h3 className="value-title">Our Mission</h3>
              <p className="value-text">
                To deliver exceptional property solutions through expert guidance, verified listings, dedicated management, and training that creates lasting value for all clients.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon"><FaHeart /></div>
              <h3 className="value-title">Our Core Values</h3>
              <div className="value-text value-list">
                <p><strong>Integrity:</strong> Honesty and transparency in all dealings</p>
                <p><strong>Excellence:</strong> Superior service and client dedication</p>
                <p><strong>Innovation:</strong> Modern solutions and technology</p>
                <p><strong>Client-Focus:</strong> Putting client interests first always</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collage Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Team & Projects</h2>
            <p>Dedicated professionals delivering exceptional results</p>
          </div>
          
          <div className="card-grid">
            <div className="card">
              <div className="card-image">
                <Image src="/images/about-expert-team.jpg" alt="Expert Team — Olas Realtor Engineering & Advisory Team" width={800} height={600} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="card-content">
                <h3 className="card-title">Expert Team</h3>
                <p className="card-text">Certified consultants delivering tailored property acquisition strategies.</p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-image">
                <Image src="/images/about-completed-projects-family.jpg" alt="Completed Projects — Happy Homeowners Receiving Keys" width={800} height={600} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="card-content">
                <h3 className="card-title">Completed Projects</h3>
                <p className="card-text">Hundreds of verified property sales and land developments across Ogun State.</p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-image">
                <Image src="/images/about-training-programs.jpg" alt="Training Programs — Professional Real Estate Masterclasses" width={800} height={600} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="card-content">
                <h3 className="card-title">Training Programs</h3>
                <p className="card-text">Practical masterclasses equipping aspiring agents with market-ready skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="home-cta-section">
        <div className="container max-w-[850px] mx-auto px-4 sm:px-6">
          <h2 className="home-cta-title">
            Ready to Work With Us?
          </h2>
          <p className="home-cta-desc">
            Join hundreds of satisfied clients who have trusted us with their real estate needs across Nigeria.
          </p>
          <div className="home-cta-btn-group">
            <Link href="/contact" className="home-cta-btn">
              Get In Touch
            </Link>
            <Link href="/services" className="home-cta-btn">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
