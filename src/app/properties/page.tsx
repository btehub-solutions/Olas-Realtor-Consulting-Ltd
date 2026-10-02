import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Portfolio & Proof of Work',
  description:
    'A curated showcase of verified developments, site inspections, project media, founder credentials, and institutional milestones by Olas Realtor Consulting Ltd.',
  alternates: {
    canonical: '/properties',
  },
  openGraph: {
    title: 'Portfolio & Proof of Work | Olas Realtor Consulting Ltd',
    description:
      'Verified developments, site inspections, and institutional real estate milestones in Abeokuta, Ogun State, and Nigeria.',
    url: 'https://olasrealtorconsulting.com/properties',
  },
};

export default function Properties() {
  return (
    <main id="main-content" className="properties-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="slide-up">Portfolio &amp; Proof of Work</h1>
          <p className="fade-in">
            A comprehensive gallery of verified property developments, on-site video inspections, founder credentials, and institutional milestones.
          </p>
        </div>
      </section>

      {/* Portfolio Media Showcase */}
      <section className="section" style={{ padding: '50px 20px', backgroundColor: '#FFFFFF' }}>
        <div className="container max-w-[1300px] mx-auto">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            {/* National Outstanding Performance Award Plaque */}
            <div
              style={{
                width: '460px',
                maxWidth: '100%',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.12)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Image
                src="/images/olas-naps-national-award.jpg"
                alt="National Outstanding Performance Award — Olas Realtor Consulting Limited as Outstanding Real Estate Development Firm in Nigeria"
                width={1024}
                height={1024}
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '1 / 1',
                  objectFit: 'contain',
                  display: 'block',
                }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
