import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact & Advisory Booking',
  description:
    'Schedule a consultation with our principal consultant Kolade Abiola Daramola. Contact Olas Realtor Consulting Ltd for verified property transactions, title regularization, and advisory services.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact & Advisory Booking | Olas Realtor Consulting Ltd',
    description:
      'Schedule a strategic real estate advisory consultation. Offices at Suite 12, Olusegun Osoba Complex, Lalubu Street, Oke-Ilewo, Abeokuta, Ogun State.',
    url: 'https://olasrealtorconsulting.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
