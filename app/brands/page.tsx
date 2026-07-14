import type { Metadata } from 'next';
import BrandsPage from '../../src/views/BrandsPage';

export const metadata: Metadata = {
  title: 'Authorized Brands & Dealerships | Jagdamba Timber & Plywood',
  description: 'Authorized partner showroom for Century Ply, Action TESA, Virgo, Black Cobra, and HEPO. 100% genuine products sourced directly from manufacturers.',
};

export default function Page() {
  return <BrandsPage />;
}
