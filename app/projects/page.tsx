import type { Metadata } from 'next';
import ProjectsPage from '../../src/views/ProjectsPage';

export const metadata: Metadata = {
  title: 'Luxury Interior Design Projects Showcase | Jagdamba Timber',
  description: 'Browse completed residential modular kitchens, almirah wardrobes, custom flush doors, and architectural panelings designed using Jagdamba materials in Rishikesh.',
};

export default function Page() {
  return <ProjectsPage />;
}
