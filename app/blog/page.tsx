import type { Metadata } from 'next';
import BlogPage from '../../src/views/BlogPage';

export const metadata: Metadata = {
  title: 'Knowledge Center & Woodworking Resource Guides | Jagdamba Timber',
  description: 'Read expert guidelines on selecting plywood, moisture-resistant HDMR boards, luxury laminates, and silent drawer slides. Compiled in Rishikesh.',
};

export default function Page() {
  return <BlogPage />;
}
