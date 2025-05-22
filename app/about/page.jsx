// app/about/page.jsx
import AboutContent from './AboutContent';

export const metadata = {
  title: 'About Doctor Kays | Doctor Kays',
  description:
    'Meet Dr. Olayiwola Babatunde Emmanuel (Doctor Kays): a decade of global clinical experience, tech innovation, and community health advocacy.',
  openGraph: {
    title: 'About Doctor Kays',
    description:
      'Learn about Dr. Kays, his mission in preventive medicine, community outreach, and engaging health content.',
    url: '/about',
    images: [
      {
        url: '/assets/010b.jpg',
        width: 1200,
        height: 800,
        alt: 'Doctor Kays portrait',
      },
    ],
    siteName: 'Doctor Kays',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Doctor Kays',
    description:
      'Discover Dr. Kays: blending medical expertise, tech passion, and humor to make healthcare relatable.',
    images: ['/assets/010b.jpg'],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
