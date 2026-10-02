export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatar?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Emeka Nwosu',
    role: 'Diaspora Investor (UK)',
    location: 'Abeokuta Property Owner',
    rating: 5,
    content:
      'Purchasing land from abroad used to give me anxiety until I met Kolade Daramola and the Olas Realtor team. Every document was verified, video inspections were seamless, and title documentation was delivered promptly. Truly 100% trustworthy!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'test-2',
    name: 'Mrs. Folake Adeyemi',
    role: 'Homeowner',
    location: 'Ibara GRA, Abeokuta',
    rating: 5,
    content:
      'Olas Realtor made my home buying journey completely stress-free. From scouting to final handover of the keys to our 4-bedroom duplex, their professional conduct and market insight were exceptional.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'test-3',
    name: 'Alhaji Tunde Balogun',
    role: 'Commercial Property Investor',
    location: 'Lagos & Ogun State',
    rating: 5,
    content:
      'I have partnered with Olas Realtor Consulting Ltd on multiple commercial property acquisitions along Abiola Way. Their property valuation accuracy and tenancy management have consistently yielded above-average returns.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'test-4',
    name: 'Oluwaseun Bakare',
    role: 'Graduate, ICT & Web Design Class',
    location: 'Abeokuta',
    rating: 5,
    content:
      'The ICT training program at Olas Realtor gave me hands-on skills that allowed me to transition into digital marketing and web design. The instructors are patient, practical, and truly invest in your growth.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
];
