import type { Metadata } from 'next';
import AboutPage from '../../src/views/AboutPage';

export const metadata: Metadata = {
  title: 'Woodworking Heritage & Craftsmanship | About Jagdamba Timber',
  description: 'Learn about our 40-year combined legacy of design craftsmanship, local heritage, and material sourcing in Rishikesh, Uttarakhand.',
};

export default function Page() {
  return <AboutPage />;
}
