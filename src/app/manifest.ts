import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Olas Realtor Consulting Ltd',
    short_name: 'Olas Realtor',
    description:
      'Premier Nigerian Real Estate Consulting, Verified Acquisitions, Title Regularization (C of O), and Executive Asset Management.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1F2421',
    theme_color: '#00A86B',
    icons: [
      {
        src: '/images/OLAS_UPDATED_LOGO-removebg-preview.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/OLAS_UPDATED_LOGO-removebg-preview.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
