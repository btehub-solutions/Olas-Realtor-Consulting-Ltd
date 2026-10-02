export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  priceFormatted: string;
  category: 'Commercial' | 'Duplex' | 'Mansion' | 'Flat' | 'Terrace' | 'Land' | 'Multi-Unit';
  status: 'For Sale' | 'Sold' | 'Featured' | 'For Rent';
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  parking?: number;
  units?: string;
  titleDeed: string;
  image: string;
  description: string;
  features: string[];
}

export const propertiesData: Property[] = [
  {
    id: 'prop-multi-unit',
    title: 'Multi-Unit Investment Property with Dual Gates',
    location: 'Dubai Destiny Estate, Abeokuta, Ogun State',
    price: 45000000,
    priceFormatted: '₦45,000,000',
    category: 'Multi-Unit',
    status: 'Featured',
    area: 'Corner Piece Plot',
    titleDeed: 'Purchase Receipt & Land Agreement',
    image: '/images/multi-unit-property-with-gate.jpg',
    description:
      'High-yield investment opportunity featuring 7 units of self-contained flats, 1 unit 2-bedroom detached apartment, and 1 unit room & parlour self-contained. Fully equipped with dual gate entrances, expansive compound, and excellent access road network.',
    features: [
      '7 Units Self-Contained',
      '1 Unit 2-Bedroom Detached Flat',
      '1 Unit Room & Parlour',
      '2 Gated Entrances',
      'Corner Piece Plot',
      'Good Road Network',
    ],
  },
  {
    id: 'prop-luxury-duplex',
    title: 'Luxury 4-Bedroom Contemporary Duplex',
    location: 'Oluwo, Abeokuta, Ogun State',
    price: 85000000,
    priceFormatted: '₦85,000,000',
    category: 'Duplex',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 3,
    area: '350 sqm',
    parking: 2,
    titleDeed: 'Governor’s Consent & Survey Plan',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&auto=format&fit=crop&q=80',
    description:
      'Impeccably finished 4-bedroom duplex situated in prime Oluwo. Features contemporary architecture, all en-suite rooms, gourmet fitted kitchen with marble countertops, POP ceilings, and 24/7 security.',
    features: [
      'All Rooms En-suite',
      'Fitted Chef Kitchen',
      'Security Post & CCTV',
      'POP Ceilings with Ambient Lighting',
      'Paved Compound',
    ],
  },
  {
    id: 'prop-executive-villa',
    title: 'Executive 5-Bedroom Hilltop Villa',
    location: 'Osoba Hilltop, Abeokuta, Ogun State',
    price: 250000000,
    priceFormatted: '₦250,000,000',
    category: 'Mansion',
    status: 'Featured',
    bedrooms: 5,
    bathrooms: 4,
    area: '500 sqm',
    parking: 3,
    titleDeed: 'Certificate of Occupancy (C of O)',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000&auto=format&fit=crop&q=80',
    description:
      'Panoramic hilltop luxury estate with breathtaking elevated views over Abeokuta. Sprawling 5 bedrooms, private swimming pool, home cinema room, expansive masters suite with walk-in closet and jacuzzi, and dedicated transformer.',
    features: [
      'Hilltop Panoramic Views',
      'Private Swimming Pool',
      'Smart Home Automation Ready',
      'Dedicated Power Infrastructure',
      '3-Car Covered Portico',
    ],
  },
  {
    id: 'prop-modern-flat',
    title: 'Modern 3-Bedroom Serviced Apartment',
    location: 'Ibara GRA, Abeokuta, Ogun State',
    price: 65000000,
    priceFormatted: '₦65,000,000',
    category: 'Flat',
    status: 'For Sale',
    bedrooms: 3,
    bathrooms: 2,
    area: '180 sqm',
    parking: 2,
    titleDeed: 'C of O / Registered Conveyance',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=80',
    description:
      'Elegantly crafted 3-bedroom apartment in the heart of prestigious Ibara GRA. Ideal for young executives or investors seeking prime rental yields in central Abeokuta.',
    features: [
      'Gated Secure Community',
      'Continuous Clean Water Supply',
      'Spacious Balcony',
      'High Rental Demand Area',
    ],
  },
  {
    id: 'prop-kuto-mansion',
    title: 'Palatial 6-Bedroom Family Mansion',
    location: 'Kuto, Abeokuta, Ogun State',
    price: 320000000,
    priceFormatted: '₦320,000,000',
    category: 'Mansion',
    status: 'For Sale',
    bedrooms: 6,
    bathrooms: 5,
    area: '600 sqm',
    parking: 4,
    titleDeed: 'Certificate of Occupancy (C of O)',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1000&auto=format&fit=crop&q=80',
    description:
      'Grand architectural masterpiece with 6 palatial bedrooms, twin anterooms, sprawling compound accommodating over 6 vehicles, luxury chandeliers, and staff quarters.',
    features: [
      'Twin Anterooms',
      'Detached Boys Quarters (BQ)',
      'Water Treatment Plant',
      'Grand Chandelier Foyer',
      'Perimeter Electric Fencing',
    ],
  },
  {
    id: 'prop-terrace-isale',
    title: 'Elegant 4-Bedroom Contemporary Terrace',
    location: 'Isale Igbein, Abeokuta, Ogun State',
    price: 45000000,
    priceFormatted: '₦45,000,000',
    category: 'Terrace',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 3,
    area: '280 sqm',
    parking: 2,
    titleDeed: 'Registered Deed & Survey',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1000&auto=format&fit=crop&q=80',
    description:
      'Contemporary designed 4-bedroom terrace house combining urban aesthetic with functional living space. Located minutes away from top schools, hospitals, and central commercial hubs.',
    features: [
      'Contemporary Open Floor Plan',
      'Master Penthouse Bedroom',
      'Paved Driveway',
      'Serene Neighborhood',
    ],
  },
  {
    id: 'prop-commercial-abiola',
    title: 'Prime Commercial Hub & Office Complex',
    location: 'Abiola Way, Abeokuta, Ogun State',
    price: 150000000,
    priceFormatted: '₦150,000,000',
    category: 'Commercial',
    status: 'Featured',
    area: '450 sqm',
    parking: 10,
    titleDeed: 'Commercial C of O',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80',
    description:
      'Strategic commercial building positioned along the bustling Abiola Way corridor. High pedestrian and vehicular traffic, modular open-plan office spaces, and generous client parking.',
    features: [
      'High Traffic Commercial Corridor',
      '10-Car Designated Parking',
      'Multiple Executive Suites',
      'Dedicated Generator Bay',
    ],
  },
  {
    id: 'prop-saraki-adigbe',
    title: 'Twin 2-Bedroom Flats Block',
    location: 'Saraki, Adigbe, Abeokuta, Ogun State',
    price: 38000000,
    priceFormatted: '₦38,000,000',
    category: 'Flat',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 4,
    area: '320 sqm',
    parking: 4,
    titleDeed: 'Registered Conveyance & Survey',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&auto=format&fit=crop&q=80',
    description:
      'Solidly built block of two units of 2-bedroom flats in high-demand residential Adigbe. Ready for immediate tenancy generation or owner-occupier setup.',
    features: [
      'Separate Prepaid Meters',
      'Gated Fenced Compound',
      'Borehole Water System',
      'High Rental Yield',
    ],
  },
];
