import Navbar from './components/Navbar';
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
import CustomCursor from './components/CustomCursor';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <main className="relative min-h-screen bg-black text-white antialiased selection:bg-amber-300/30 selection:text-amber-100">
      {/* Custom nail and hammer active cursor */}
      <CustomCursor />

      {/* Fixed Navigation bar */}
      <Navbar />

      {/* Hero scroll section */}
      <Hero />

      {/* Authorized brand trust showcase */}
      <Brands />

      {/* Living room hotspots */}
      <LivingRoom />

      {/* Kitchen board tab selector */}
      <Kitchen />

      {/* Dining parallax transition */}
      <Dining />

      {/* Bedroom scale-bound flagging doors */}
      <Bedroom />

      {/* Wardrobe 3D open hinges */}
      <Wardrobe />

      {/* Study deep work layout */}
      <Study />

      {/* Material studio hover rotate cards */}
      <MaterialStudio />

      {/* Interactive room configurator */}
      <Configurator />

      {/* Project Showcase gallery */}
      <Gallery />

      {/* Inquiry and contact details + footer */}
      <Contact />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />
    </main>
  );
}

export default App;
