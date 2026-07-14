import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filters = [
    { id: 'all', name: 'All Work' },
    { id: 'kitchen', name: 'Kitchens' },
    { id: 'wardrobe', name: 'Wardrobes' },
    { id: 'living', name: 'Living Rooms' },
    { id: 'doors', name: 'Doors' }
  ];

  const projects = [
    {
      title: "Luxury Modular Kitchen",
      category: "kitchen",
      materials: ["Action TESA HDMR", "High-Gloss Acrylic Virgo Laminate", "HEPO Soft-Close Drawer Slides"],
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=85",
      desc: "Water-resistant kitchen unit tailored for a local villa near Tapovan, Rishikesh."
    },
    {
      title: "Teak Veneer TV console",
      category: "living",
      materials: ["Century Plywood BWP", "Natural Teak wood veneer", "Mazix Silent hinges"],
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=85",
      desc: "Clean-lined suspended TV console in a minimalist residential layout."
    },
    {
      title: "Walk-In Wardrobes",
      category: "wardrobe",
      materials: ["Action TESA HDMR", "Century Prime Ply", "Virgo Textural Laminates", "HEPO hardware"],
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=85",
      desc: "Premium grey textured almirah cabinets with dynamic glass layout framing."
    },
    {
      title: "Handcrafted Teak Entry Door",
      category: "doors",
      materials: ["Jagdamba Solid Core Flush Door", "Natural Teak wood veneer", "Premium Polish Coating"],
      image: "https://images.unsplash.com/photo-1652185396416-77aeccd1dce0?auto=format&fit=crop&w=800&q=85",
      desc: "Entrance door manufactured and custom-polished at our Rishikesh workshop."
    },
    {
      title: "Contemporary Living Wall",
      category: "living",
      materials: ["Action TESA HDMR", "Black Cobra Matt Laminate", "Teak veneer borders"],
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85",
      desc: "A custom wall panel framing a luxury fireplace structure."
    },
    {
      title: "Bespoke Glass Showcase Kitchen",
      category: "kitchen",
      materials: ["Century Prowud HDMR", "Virgo Matt Laminates", "HEPO glass profile hinges"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
      desc: "Modular setup with integrated profile handle channels and lighting trims."
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <>
      <Helmet>
        <title>Luxury Interior Design Projects Showcase | Jagdamba Timber</title>
        <meta name="description" content="Browse completed residential modular kitchens, almirah wardrobes, custom flush doors, and architectural panelings designed using Jagdamba materials in Rishikesh." />
      </Helmet>

      <div className="bg-black pt-32 pb-24 text-left min-h-screen">
        
        {/* Page Header */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-medium font-sans">
            Our Portfolio
          </div>
          <h1 className="font-serif-display text-5xl md:text-7xl font-light text-white leading-tight">
            Completed Projects<br />& installations.
          </h1>
        </section>

        {/* Filters Tab Selector */}
        <section className="max-w-6xl mx-auto px-6 mb-12">
          <div className="flex flex-wrap gap-2 pb-4 border-b border-white/10">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-5 py-2.5 rounded-full border text-[10px] tracking-wider uppercase font-medium transition-all duration-300 cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-amber-200 border-amber-200 text-black shadow-lg shadow-amber-200/10'
                    : 'bg-white/2 border-white/5 text-white/50 hover:text-white hover:border-white/10'
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Showcase Grid */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p, idx) => (
              <div 
                key={idx}
                className="group rounded-2xl border border-white/5 bg-white/2 overflow-hidden hover:border-amber-200/20 transition-all duration-500 flex flex-col justify-between shadow-2xl relative"
              >
                {/* Image panel */}
                <div className="aspect-[4/3] overflow-hidden relative bg-neutral-900">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Details Panel */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif-display text-xl text-white font-light group-hover:text-amber-200 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[11px] text-white/40 font-light mt-1 font-sans">
                      {p.desc}
                    </p>
                  </div>

                  {/* Materials Highlighted (User's high conversion suggestion) */}
                  <div className="border-t border-white/5 pt-4 space-y-2">
                    <div className="text-[9px] tracking-widest uppercase text-amber-200/70 font-semibold font-sans flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Materials Used
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.materials.map((m, i) => (
                        <span 
                          key={i} 
                          className="text-[9px] text-white/60 bg-white/5 px-2.5 py-1.5 rounded border border-white/5 font-sans"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
