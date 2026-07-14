import type { Metadata } from 'next';
import ProductsPage from '../../src/views/ProductsPage';

export const metadata: Metadata = {
  title: 'Premium Plywood & Building Materials Catalogue | Jagdamba Timber',
  description: 'Explore our structured product categories for HDMR boards, laminates, custom doors, hardware hinges, and plywood. Sourcing Century, Action TESA, Virgo, and more.',
};

export default function Page() {
  return <ProductsPage />;
}
