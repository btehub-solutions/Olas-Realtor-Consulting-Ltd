import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://olasrealtorconsulting.com'),
  title: {
    default: 'Olas Realtor Consulting Ltd | Premier Nigerian Real Estate Advisory',
    template: '%s | Olas Realtor Consulting Ltd',
  },
  description:
    'Executive real estate consulting, verified property acquisitions, statutory title regularization (C of O & Governor’s Consent), and asset management in Abeokuta, Ogun State, and Western Nigeria.',
  keywords: [
    'Olas Realtor Consulting Ltd',
    'Real Estate Consultant Abeokuta',
    'Property for sale Ogun State',
    'Certificate of Occupancy C of O Abeokuta',
    'Governor Consent Ogun State',
    'Verified land Abeokuta',
    'Real Estate Advisory Nigeria',
    'Diaspora property investment Nigeria',
    'Kolade Abiola Daramola',
    'Facility Management Abeokuta',
    'Land Title Regularization',
  ],
  authors: [{ name: 'Kolade Abiola Daramola', url: 'https://olasrealtorconsulting.com/about' }],
  creator: 'Olas Realtor Consulting Ltd',
  publisher: 'Olas Realtor Consulting Ltd',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Olas Realtor Consulting Ltd | Premier Nigerian Real Estate Advisory',
    description:
      'Guiding institutional investors, diaspora clients, and property owners through verified acquisitions, title perfection, and executive asset management across Nigeria.',
    url: 'https://olasrealtorconsulting.com',
    siteName: 'Olas Realtor Consulting Ltd',
    images: [
      {
        url: '/images/OLAS_UPDATED_LOGO-removebg-preview.png',
        width: 800,
        height: 600,
        alt: 'Olas Realtor Consulting Ltd — Real Estate Advisory',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olas Realtor Consulting Ltd | Premier Nigerian Real Estate Advisory',
    description:
      'Guiding institutional investors, diaspora clients, and property owners through verified acquisitions, title perfection, and executive asset management across Nigeria.',
    images: ['/images/OLAS_UPDATED_LOGO-removebg-preview.png'],
    creator: '@is_ola001',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'theme-color': '#00A86B',
    'geo.region': 'NG-OG',
    'geo.placename': 'Abeokuta',
    'geo.position': '7.1475;3.3619',
    'ICBM': '7.1475, 3.3619',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': 'https://olasrealtorconsulting.com/#organization',
        name: 'Olas Realtor Consulting Ltd',
        url: 'https://olasrealtorconsulting.com',
        logo: 'https://olasrealtorconsulting.com/images/OLAS_UPDATED_LOGO-removebg-preview.png',
        image: 'https://olasrealtorconsulting.com/images/hero-skyline.jpg',
        description:
          'Executive real estate advisory, verified property acquisitions, statutory title regularization (C of O & Governor’s Consent), and property asset management in Abeokuta, Ogun State, Nigeria.',
        telephone: '+2348164220387',
        email: 'olasarealtor@gmail.com',
        priceRange: '₦₦₦₦',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '48, Olayiwola Bankole Street, Oluwo',
          addressLocality: 'Abeokuta',
          addressRegion: 'Ogun State',
          postalCode: '110101',
          addressCountry: 'NG',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 7.1475,
          longitude: 3.3619,
        },
        founder: {
          '@type': 'Person',
          name: 'Kolade Abiola Daramola',
          jobTitle: 'Founder & CEO',
          url: 'https://olasrealtorconsulting.com/about',
          sameAs: [
            'https://x.com/is_ola001',
          ],
        },
        sameAs: [
          'https://www.facebook.com/share/19nuQcNWo4/',
          'https://www.instagram.com/is_olasrealtor',
          'http://tiktok.com/@is_olasrealtor',
          'https://x.com/is_ola001',
        ],
        areaServed: [
          {
            '@type': 'City',
            name: 'Abeokuta',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Ogun State',
          },
          {
            '@type': 'Country',
            name: 'Nigeria',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Real Estate Advisory Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Property Sales & Verified Acquisitions',
                description: 'Due diligence verification, survey coordinate matching, and verified land and home acquisitions.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Title Regularization & C of O Perfection',
                description: 'Processing State Certificates of Occupancy (C of O), Governor’s Consent, and Red Copy registered surveys.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Executive Asset & Facility Management',
                description: 'Tenant screening, maintenance oversight, yield optimization, and rent collection for commercial and residential estates.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Valuation & Advisory',
                description: 'Certified open-market real estate appraisals, feasibility studies, and diaspora portfolio planning.',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://olasrealtorconsulting.com/#website',
        url: 'https://olasrealtorconsulting.com',
        name: 'Olas Realtor Consulting Ltd',
        publisher: {
          '@id': 'https://olasrealtorconsulting.com/#organization',
        },
      },
    ],
  };

  return (
    <html lang="en-NG" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
