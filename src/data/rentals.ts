export interface RentalProperty {
  id: string;
  title: string;
  location: string;
  pricePerYear: number;
  priceFormatted: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  parking: number;
  image: string;
  status: 'Available' | 'Reserved';
  features: string[];
  description: string;
}

export const rentalsData: RentalProperty[] = [
  {
    id: 'rent-ibara-3bed',
    title: 'Modern 3-Bedroom Serviced Apartment',
    location: 'Ibara GRA, Abeokuta, Ogun State',
    pricePerYear: 3500000,
    priceFormatted: '₦3,500,000 / year',
    type: 'Apartment',
    bedrooms: 3,
    bathrooms: 2,
    area: '180 sqm',
    parking: 2,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=80',
    status: 'Available',
    features: ['All Rooms En-suite', '24/7 Security Guard', 'Dedicated Prepaid Meter', 'Balcony View'],
    description: 'Immaculately maintained 3-bedroom apartment situated in a gated residential enclave in Ibara GRA with continuous water supply.',
  },
  {
    id: 'rent-oluwo-duplex',
    title: 'Luxury 4-Bedroom Semi-Detached Duplex',
    location: 'Oluwo, Abeokuta, Ogun State',
    pricePerYear: 5000000,
    priceFormatted: '₦5,000,000 / year',
    type: 'Duplex',
    bedrooms: 4,
    bathrooms: 3,
    area: '300 sqm',
    parking: 3,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&auto=format&fit=crop&q=80',
    status: 'Available',
    features: ['Fitted Kitchen', 'Spacious Living Room', 'Master Jacuzzi Bath', 'Interlocked Compound'],
    description: 'Executive family duplex offering privacy, expansive living spaces, and top-tier security in serene Oluwo.',
  },
  {
    id: 'rent-adigbe-2bed',
    title: 'Cozy 2-Bedroom Flat',
    location: 'Adigbe, Abeokuta, Ogun State',
    pricePerYear: 1800000,
    priceFormatted: '₦1,800,000 / year',
    type: 'Flat',
    bedrooms: 2,
    bathrooms: 2,
    area: '120 sqm',
    parking: 1,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&auto=format&fit=crop&q=80',
    status: 'Available',
    features: ['Water Heater', 'Tiled Floors', 'Wardrobes Installed', 'Gated Compound'],
    description: 'Affordable, secure, and easily accessible 2-bedroom flat ideal for small families or working professionals.',
  },
  {
    id: 'rent-kemta-mini',
    title: 'Executive Mini-Flat (Room & Parlour)',
    location: 'Kemta Housing Estate, Abeokuta, Ogun State',
    pricePerYear: 1200000,
    priceFormatted: '₦1,200,000 / year',
    type: 'Mini Flat',
    bedrooms: 1,
    bathrooms: 1,
    area: '85 sqm',
    parking: 1,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1000&auto=format&fit=crop&q=80',
    status: 'Available',
    features: ['Modern Kitchenette', 'Constant Water Flow', 'Prepaid Meter', 'Secured Estate Gate'],
    description: 'Chic and neat room and parlour mini-flat in prestigious Kemta Estate with calm surroundings and strict gate control.',
  },
];
