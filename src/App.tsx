import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Homepage Components
import Hero from './components/Hero';
import Brands from './components/Brands';
import LivingRoom from './components/LivingRoom';
import Kitchen from './components/Kitchen';
import Dining from './components/Dining';
import Bedroom from './components/Bedroom';
import Wardrobe from './components/Wardrobe';
import Study from './components/Study';
import MaterialStudio from './components/MaterialStudio';
import Configurator from './components/Configurator';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

// Supplementary Pages
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProjectsPage from './pages/ProjectsPage';
import BrandsPage from './pages/BrandsPage';
import BlogPage from './pages/BlogPage';

// Scroll to top helper on route navigation change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to homepage and there's a hash, let browser handle the anchor target
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Otherwise scroll cleanly to top of page
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

// Homepage layout wrapper
function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <LivingRoom />
      <Kitchen />
      <Dining />
      <Bedroom />
      <Wardrobe />
      <Study />
      <MaterialStudio />
      <Configurator />
      <Gallery />
      <Contact />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <main className="relative min-h-screen bg-black text-white antialiased selection:bg-amber-300/30 selection:text-amber-100 flex flex-col justify-between">
          
          {/* Custom nail and hammer active cursor */}
          <CustomCursor />

          {/* Fixed Navigation bar */}
          <Navbar />

          {/* Routed Views */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/brands" element={<BrandsPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </div>

          {/* Standalone clean global footer details */}
          <Footer />

          {/* Floating WhatsApp Action Widget */}
          <FloatingWhatsApp />

        </main>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
