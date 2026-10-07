'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FaLocationDot,
  FaWhatsapp,
  FaFileContract,
  FaCircleCheck,
} from 'react-icons/fa6';

export interface PropertyItem {
  id: string;
  title: string;
  category: 'RESIDENTIAL' | 'COMMERCIAL';
  badge?: string;
  image: string;
  location: string;
  shortLocation: string;
  subtitle: string;
  docLabel?: string;
  titleDoc: string;
  highlights: string;
  paletteClass: string;
  btnClass: string;
}

const propertiesData: PropertyItem[] = [
  {
    id: 'olosun-flat',
    title: 'Standard 2-Bedroom Flat',
    category: 'RESIDENTIAL',
    badge: 'TO LET',
    image: '/images/projects/project-olosun-ita-oshin-flat.jpg',
    location: 'Olosun, Ita-Oshin, Abeokuta, Ogun State',
    shortLocation: 'Ita-Oshin, Abeokuta',
    subtitle: 'Standard 2-Bed Flat • To Let',
    docLabel: 'Rent',
    titleDoc: '₦700,000 / Annum (Married Couple Only)',
    highlights: 'CCTV & Gated • POP Finish • Fitted Kitchen • Water Heater',
    paletteClass: 'palette-forest',
    btnClass: 'btn-green-cta',
  },
  {
    id: 'adeniyi-jones',
    title: 'Adeniyi Jones',
    category: 'RESIDENTIAL',
    image: '/images/projects/project-contemporary-mansion.jpg',
    location: 'Adeniyi Jones, Ikeja & Environs',
    shortLocation: 'Ikeja, Lagos',
    subtitle: '5-Bed Contemporary Smart Duplex',
    titleDoc: 'Governor’s Consent & Registered Deed',
    highlights: 'Private Pool • Smart Home • 4-Car Parking',
    paletteClass: 'palette-slate',
    btnClass: 'btn-green-cta',
  },
  {
    id: 'hilda',
    title: 'Hilda Heights',
    category: 'RESIDENTIAL',
    image: '/images/projects/project-modern-duplex-palms.jpg',
    location: 'Hilda Heights, Ibara GRA, Abeokuta',
    shortLocation: 'Ibara GRA, Abeokuta',
    subtitle: '4-Bed Executive Terraces + BQ',
    titleDoc: 'Certificate of Occupancy (C of O)',
    highlights: '24/7 Gated Security • Serene Enclave • Paved Access',
    paletteClass: 'palette-emerald',
    btnClass: 'btn-dark-cta',
  },
  {
    id: 'buifort-homes',
    title: 'Buifort Homes',
    category: 'RESIDENTIAL',
    image: '/images/projects/project-terrace-duplex.jpg',
    location: 'Buifort Terraces, Oke-Mosan, Abeokuta',
    shortLocation: 'Oke-Mosan, Abeokuta',
    subtitle: 'Executive Semi-Detached Duplexes',
    titleDoc: 'Approved Layout & Registered Survey Plan',
    highlights: 'Fitted Kitchen • High Ceilings • Dedicated Power',
    paletteClass: 'palette-crimson',
    btnClass: 'btn-dark-cta',
  },
  {
    id: 'greenwich',
    title: 'Greenwich Court',
    category: 'RESIDENTIAL',
    image: '/images/projects/project-charcoal-duplex.jpg',
    location: 'Greenwich Court, Abeokuta',
    shortLocation: 'Abeokuta, Ogun State',
    subtitle: '4-Bed Contemporary Urban Villas',
    titleDoc: 'Governor’s Consent Documented',
    highlights: 'Perimeter Security • Paved Streets • Central Drainage',
    paletteClass: 'palette-charcoal',
    btnClass: 'btn-green-cta',
  },
  {
    id: 'presidential-boulevard',
    title: 'Presidential Boulevard',
    category: 'RESIDENTIAL',
    image: '/images/projects/project-gated-residence.jpg',
    location: 'Presidential Boulevard, Abeokuta',
    shortLocation: 'Presidential Blvd, Abeokuta',
    subtitle: '6-Bed Ambassadorial Mansion',
    titleDoc: 'Direct Allocation & C of O',
    highlights: 'Penthouse Terrace • Landscaped Grounds • Gatehouse',
    paletteClass: 'palette-slate',
    btnClass: 'btn-green-cta',
  },
  {
    id: 'parkview-villa',
    title: 'Parkview Villa',
    category: 'RESIDENTIAL',
    image: '/images/projects/project-glass-villa-pool.jpg',
    location: 'Parkview Enclave, Ogun State',
    shortLocation: 'Parkview, Ogun State',
    subtitle: '5-Bed Architectural Glass Villa',
    titleDoc: 'Registered Deed of Assignment',
    highlights: 'Private Swimming Pool • Rooftop Terrace • Marble Finishes',
    paletteClass: 'palette-black',
    btnClass: 'btn-red-cta',
  },
  {
    id: 'waterfront-commercial',
    title: 'Waterfront Plaza',
    category: 'COMMERCIAL',
    image: '/images/projects/project-commercial-waterfront-aerial.jpg',
    location: 'Marina & Waterfront Commercial Plaza',
    shortLocation: 'Waterfront Corridor',
    subtitle: 'Grade-A Office & Commercial Suites',
    titleDoc: 'Commercial C of O & Development Approval',
    highlights: 'High-Speed Elevators • 100+ Parking • 24/7 Power',
    paletteClass: 'palette-coolgray',
    btnClass: 'btn-green-cta',
  },
  {
    id: 'ibara-executive',
    title: 'Ibara Executive GRA',
    category: 'RESIDENTIAL',
    image: '/images/projects/project-executive-estate.jpg',
    location: 'Ibara GRA, Abeokuta',
    shortLocation: 'Ibara GRA, Abeokuta',
    subtitle: '4-Bed Classic Detached Residence',
    titleDoc: 'Valid C of O with Clean Title Search',
    highlights: 'Diplomatic Neighbourhood • Mature Trees • Quiet Street',
    paletteClass: 'palette-emerald',
    btnClass: 'btn-dark-cta',
  },
  {
    id: 'heritage-luxury',
    title: 'Heritage Enclave',
    category: 'RESIDENTIAL',
    image: '/images/projects/project-luxury-villa.jpg',
    location: 'Hilltop GRA, Abeokuta',
    shortLocation: 'Hilltop GRA, Abeokuta',
    subtitle: 'Hilltop Luxury Detached Duplexes',
    titleDoc: 'Governor’s Consent Documented',
    highlights: 'Hilltop Panoramic Views • Solar-Ready • Private Compound',
    paletteClass: 'palette-crimson',
    btnClass: 'btn-dark-cta',
  },
];

export default function PropertyShowcaseGrid() {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'RESIDENTIAL' | 'COMMERCIAL'>('ALL');
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const filteredProperties = propertiesData.filter((item) => {
    if (selectedFilter === 'ALL') return true;
    return item.category === selectedFilter;
  });

  const getWhatsAppLink = (property: PropertyItem) => {
    const text = `Hello Olas Realtor, I would like to inquire about ${property.title} (${property.subtitle}) located at ${property.location}.`;
    return `https://wa.me/2348164220387?text=${encodeURIComponent(text)}`;
  };

  const handleCardClick = (id: string) => {
    setFlippedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {/* Clean Category Filter */}
      <div className="property-filter-container">
        <button
          type="button"
          className={`property-filter-btn ${selectedFilter === 'ALL' ? 'active' : ''}`}
          onClick={() => {
            setSelectedFilter('ALL');
            setFlippedCardId(null);
          }}
        >
          All Developments ({propertiesData.length})
        </button>
        <button
          type="button"
          className={`property-filter-btn ${selectedFilter === 'RESIDENTIAL' ? 'active' : ''}`}
          onClick={() => {
            setSelectedFilter('RESIDENTIAL');
            setFlippedCardId(null);
          }}
        >
          Residential
        </button>
        <button
          type="button"
          className={`property-filter-btn ${selectedFilter === 'COMMERCIAL' ? 'active' : ''}`}
          onClick={() => {
            setSelectedFilter('COMMERCIAL');
            setFlippedCardId(null);
          }}
        >
          Commercial
        </button>
      </div>

      {/* 3-Column Cloned Grid with Distinct Brand Palette Flip Cards */}
      <section className="property-grid-section">
        <div className="property-grid-container">
          {filteredProperties.map((property) => {
            const isFlipped = flippedCardId === property.id;

            return (
              <div
                key={property.id}
                className="property-item-card"
                onClick={() => handleCardClick(property.id)}
                role="region"
                aria-label={`Property card for ${property.title}`}
              >
                {/* 3D Flip Card Container */}
                <div className="property-flip-card-container">
                  <div className={`property-card-flipper ${isFlipped ? 'is-flipped' : ''}`}>
                    {/* Front Face: Clean Architectural Showcase */}
                    <div className="property-card-front">
                      <span className="property-badge-pill">{property.badge || property.category}</span>
                      <Image
                        src={property.image}
                        alt={property.title}
                        width={800}
                        height={950}
                        priority={property.id === 'olosun-flat'}
                        style={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
                          display: 'block',
                        }}
                      />
                    </div>

                    {/* Back Face: Distinct Brand Palette Flip Card */}
                    <div className={`property-card-back ${property.paletteClass}`}>
                      {/* Top Header */}
                      <div className="flip-back-header">
                        <span className="flip-badge-category">{property.badge || property.category}</span>
                        <span className="flip-location-tag">
                          <FaLocationDot style={{ fontSize: '0.75rem' }} />
                          <span>{property.shortLocation}</span>
                        </span>
                      </div>

                      {/* Clean Human-Curated Specifications */}
                      <div className="flip-back-body">
                        <div>
                          <h3 className="flip-prop-title">{property.title}</h3>
                          <p className="flip-prop-subtitle">{property.subtitle}</p>
                        </div>

                        <div className="flip-details-group">
                          <div className="flip-detail-row">
                            <FaFileContract className="flip-detail-icon" />
                            <div>
                              <span className="flip-detail-label">{property.docLabel || 'Title'}:</span>
                              <span>{property.titleDoc}</span>
                            </div>
                          </div>

                          <div className="flip-detail-row">
                            <FaCircleCheck className="flip-detail-icon" />
                            <div>
                              <span className="flip-detail-label">Features:</span>
                              <span>{property.highlights}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Direct WhatsApp Action Button with Contrast Styling */}
                      <div className="flip-back-footer" onClick={(e) => e.stopPropagation()}>
                        <a
                          href={getWhatsAppLink(property)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flip-whatsapp-btn ${property.btnClass}`}
                          title={`Inquire about ${property.title} on WhatsApp`}
                        >
                          <FaWhatsapp style={{ fontSize: '1.1rem' }} />
                          <span>Inquire on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Title & Location (Below Media) */}
                <h2 className="property-card-title">{property.title}</h2>
                <p className="property-card-location">
                  <FaLocationDot style={{ color: '#00A86B', fontSize: '0.8rem', flexShrink: 0 }} />
                  <span>{property.location}</span>
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
