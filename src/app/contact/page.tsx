'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaLocationDot, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa6';

function ContactForm() {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get('subject') || '';
  const propertyParam = searchParams.get('property') || '';

  const defaultMessage = propertyParam
    ? `Hello, I am interested in inquiring about "${propertyParam}". Please share further details, availability, and inspection arrangements.`
    : '';

  return (
    <form action="https://formsubmit.co/olasarealtor@gmail.com" method="POST" className="contact-form">
      <input type="hidden" name="_subject" value="New Property Inquiry from Olas Realtor Website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="form-group" style={{ marginBottom: '1.25rem' }}>
        <label htmlFor="name" className="form-label" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1F2421', marginBottom: '0.4rem' }}>
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          required
          placeholder="e.g. Adebayo Johnson"
          style={{ width: '100%', height: '42px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.12)', padding: '0 0.85rem', fontSize: '0.875rem' }}
        />
      </div>

      <div className="form-group" style={{ marginBottom: '1.25rem' }}>
        <label htmlFor="email" className="form-label" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1F2421', marginBottom: '0.4rem' }}>
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          required
          placeholder="e.g. adebayo@example.com"
          style={{ width: '100%', height: '42px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.12)', padding: '0 0.85rem', fontSize: '0.875rem' }}
        />
      </div>

      <div className="form-group" style={{ marginBottom: '1.25rem' }}>
        <label htmlFor="phone" className="form-label" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1F2421', marginBottom: '0.4rem' }}>
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-input"
          required
          placeholder="+234 816 422 0387"
          style={{ width: '100%', height: '42px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.12)', padding: '0 0.85rem', fontSize: '0.875rem' }}
        />
      </div>

      <div className="form-group" style={{ marginBottom: '1.25rem' }}>
        <label htmlFor="subject" className="form-label" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1F2421', marginBottom: '0.4rem' }}>
          Inquiry Subject *
        </label>
        <select
          id="subject"
          name="subject"
          className="form-input"
          required
          defaultValue={subjectParam || 'Property Purchase'}
          style={{ width: '100%', height: '42px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.12)', padding: '0 0.85rem', fontSize: '0.875rem', backgroundColor: '#FFFFFF' }}
        >
          <option value="Portfolio Inquiry">Portfolio Asset Inquiry</option>
          <option value="Property Purchase">Property Acquisition Mandate</option>
          <option value="Rental Inquiry">Luxury Tenancy Inquiry</option>
          <option value="Property Management">Asset &amp; Facility Management</option>
          <option value="Valuation Services">Valuation &amp; Advisory</option>
          <option value="Title Documentation">Title Perfection &amp; C of O Processing</option>
          <option value="General Inquiry">General Consultation Inquiry</option>
        </select>
      </div>

      <div className="form-group" style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="message" className="form-label" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1F2421', marginBottom: '0.4rem' }}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          rows={4}
          required
          defaultValue={defaultMessage}
          placeholder="Briefly state your requirements, property specifications, or questions..."
          style={{ width: '100%', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.12)', padding: '0.75rem 0.85rem', fontSize: '0.875rem', resize: 'vertical' }}
        ></textarea>
      </div>

      <button
        type="submit"
        className="form-button"
        style={{
          width: '100%',
          height: '42px',
          background: 'var(--horse-blood)',
          color: '#FFFFFF',
          fontWeight: 600,
          fontSize: '0.875rem',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 3px 10px rgba(196, 30, 58, 0.25)',
          transition: 'all 0.2s ease',
        }}
      >
        Send Message
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <main id="main-content" className="contact-page">
      {/* Header Banner */}
      <section className="hero" style={{ padding: '60px 20px 50px 20px' }}>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our executive real estate advisory team</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section" style={{ padding: '75px 20px', backgroundColor: '#F6F5F2', borderTop: '1px solid rgba(0, 0, 0, 0.05)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
            }}
          >
            {/* Contact Form Card */}
            <div
              className="card contact-form-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                padding: '2rem',
              }}
            >
              <h2 style={{ color: 'var(--primary-green)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                Send Us an Inquiry
              </h2>
              <p style={{ color: 'var(--gray)', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.75rem' }}>
                Fill out the brief form below and our advisors will respond within 24 hours.
              </p>

              <Suspense fallback={<div>Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Contact Information & Action Card */}
            <div>
              <div
                className="card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                  padding: '2rem',
                  marginBottom: '1.5rem',
                }}
              >
                <h2 style={{ color: 'var(--primary-green)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                  Direct Channels
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Address */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        minWidth: '40px',
                        borderRadius: '8px',
                        background: 'rgba(0, 168, 107, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-green)',
                      }}
                    >
                      <FaLocationDot />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1F2421', margin: '0 0 0.2rem 0' }}>
                        Head Office
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--gray)', margin: 0, lineHeight: 1.4 }}>
                        48, Olayiwola Bankole Street, Oluwo, Abeokuta, Ogun State, Nigeria
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        minWidth: '40px',
                        borderRadius: '8px',
                        background: 'rgba(196, 30, 58, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--horse-blood)',
                      }}
                    >
                      <FaPhone />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1F2421', margin: '0 0 0.2rem 0' }}>
                        Phone Lines
                      </h4>
                      <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.4 }}>
                        <a href="tel:+2348164220387" style={{ color: 'var(--horse-blood)', textDecoration: 'none', fontWeight: 500 }}>
                          08164220387
                        </a>{' '}
                        /{' '}
                        <a href="tel:+2348055800325" style={{ color: 'var(--horse-blood)', textDecoration: 'none', fontWeight: 500 }}>
                          08055800325
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        minWidth: '40px',
                        borderRadius: '8px',
                        background: 'rgba(0, 168, 107, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-green)',
                      }}
                    >
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1F2421', margin: '0 0 0.2rem 0' }}>
                        Email Desk
                      </h4>
                      <p style={{ fontSize: '0.85rem', margin: 0 }}>
                        <a href="mailto:olasarealtor@gmail.com" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>
                          olasarealtor@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        minWidth: '40px',
                        borderRadius: '8px',
                        background: 'rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--gray)',
                      }}
                    >
                      <FaClock />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1F2421', margin: '0 0 0.2rem 0' }}>
                        Office Hours
                      </h4>
                      <p style={{ fontSize: '0.825rem', color: 'var(--gray)', margin: 0, lineHeight: 1.4 }}>
                        Mon – Fri: 9:00 AM – 6:00 PM | Sat: 10:00 AM – 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instant Action Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem' }}>
                  <a
                    href="https://wa.me/2348164220387"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      flex: 1,
                      height: '42px',
                      background: '#25D366',
                      color: '#FFFFFF',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none',
                    }}
                  >
                    <FaWhatsapp style={{ fontSize: '1.1rem' }} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+2348164220387"
                    className="btn"
                    style={{
                      flex: 1,
                      height: '42px',
                      background: 'var(--horse-blood)',
                      color: '#FFFFFF',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none',
                    }}
                  >
                    <FaPhone style={{ fontSize: '0.85rem' }} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Google Map Box */}
              <div
                className="card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                  padding: '1.25rem',
                }}
              >
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1F2421', marginBottom: '0.75rem' }}>
                  Office Location Map
                </h3>
                <div style={{ width: '100%', height: '220px', borderRadius: '8px', overflow: 'hidden' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0!2d3.35!3d7.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDknMDAuMCJOIDPCsDIxJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Olas Realtor Consulting Ltd Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standardized Light CTA Section */}
      <section className="home-cta-section" style={{ padding: '75px 20px', backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
        <div className="container">
          <h2 className="home-cta-title">Prefer an In-Person Consultation?</h2>
          <p className="home-cta-desc">
            Visit our Abeokuta corporate headquarters or schedule an on-site property inspection with our certified agents.
          </p>
          <div className="home-cta-btn-group">
            <a
              href="https://wa.me/2348164220387?text=Hello%20Olas%20Realtor,%20I%20would%20like%20to%20book%20an%20inspection"
              target="_blank"
              rel="noopener noreferrer"
              className="home-cta-btn"
            >
              Book Inspection on WhatsApp
            </a>
            <Link href="/properties" className="home-cta-btn" style={{ background: 'var(--primary-green)' }}>
              Browse Available Properties
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
