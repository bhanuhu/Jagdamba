import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layers, Box, Compass, Shield, Coins, FileText } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('hdmr');

  const categories = [
    {
      id: 'hdmr',
      name: 'HDMR Boards',
      icon: <Layers className="w-4 h-4" />,
      desc: 'High-Density Moisture Resistant panels made by compressing fine wood fibers under extreme pressure. Highly recommended for wet zones, modular kitchens, and vanities.',
      brands: [
        { name: 'Century Prowud', specs: 'Premium high-density boards with official warranty certifications.' },
        { name: 'Action TESA HDMR', specs: 'Market leader in moisture-resistant green panels.' },
        { name: 'Novopan Panels', specs: 'Engineered wood sheets for structural modular cores.' },
        { name: 'Saptam Boards', specs: 'Solid engineered wood sheets for heavy-duty interiors.' }
      ],
      features: ['Absolute water resistance', 'High screw holding capacity', 'Termite & borer proof', '100% flat surface']
    },
    {
      id: 'laminates',
      name: 'Laminates & Veneers',
      icon: <Box className="w-4 h-4" />,
      desc: 'Decorative surface laminates and premium wood veneers that define your interior style, offering stunning high-gloss or natural wood textures.',
      brands: [
        { name: 'Black Cobra Laminates', specs: 'Stunning premium mica textures and matte options.' },
        { name: 'Virgo Laminates', specs: 'High-gloss acrylic designs and textured laminates.' },
        { name: 'Vidyalam Mica', specs: 'Economical yet highly durable surface sheets for backing.' }
      ],
      features: ['Scratch & heat resistant', 'Zero color fading over decades', 'Antibacterial surface layers', 'Wide texture catalogs']
    },
    {
      id: 'doors',
      name: 'Jagdamba Doors',
      icon: <Compass className="w-4 h-4" />,
      desc: 'Our signature, custom-sized doors manufactured locally in our studio workshop. Heavy solid core construction built to endure weather changes.',
      brands: [
        { name: 'Jagdamba Solid Flush Doors', specs: 'Engineered solid core timber entries cut to exact site specs.' },
        { name: 'Jagdamba Teak Veneer Doors', specs: 'Natural luxury teak overlays on solid cores with hand polishing.' },
        { name: 'Jagdamba Membranic Entries', specs: 'Modern CNC-engraved membrane doors for bedrooms and main doors.' }
      ],
      features: ['Zero swelling/warping', 'High impact resistance', 'Bespoke polish & veneers', 'Millimeter-accurate sizing']
    },
    {
      id: 'hinges',
      name: 'Cabinet Hardware & Hinges',
      icon: <Shield className="w-4 h-4" />,
      desc: 'Cabinet hinges, hydraulic drawer slides, and architectural hardware designed for smooth, silent operations in modern wardrobes and kitchen units.',
      brands: [
        { name: 'HEPO (by Hettich)', specs: 'Authorized dealer of silent hydraulic auto-hinges and channels.' },
        { name: 'Mazix Hinges', specs: 'Reliable cabinet brackets and structural hardware.' }
      ],
      features: ['Silent-close hydraulic buffers', 'Corrosion-resistant steel', 'Over 100,000 cycles tested', 'Easy 3D spatial alignment']
    },
    {
      id: 'plywood',
      name: 'Premium Plywood',
      icon: <Coins className="w-4 h-4" />,
      desc: 'High-density layered veneer plywood. Absolute core void minimization ensures maximum weight loading and structural integrity.',
      brands: [
        { name: 'Assam Plywood', specs: 'High-density local hardwood ply with borer-free certifications.' }
      ],
      features: ['Boiling Water Proof (BWP) grades', 'Moisture Resistant (MR) options', 'Core-void free veneers', 'High load-bearing index']
    }
  ];

  const activeCat = categories.find((cat) => cat.id === selectedCategory) || categories[0];

  return (
    <>
      <Helmet>
        <title>Premium Plywood & Building Materials Catalogue | Jagdamba Timber</title>
        <meta name="description" content="Explore our structured product categories for HDMR boards, laminates, custom doors, hardware hinges, and plywood. Sourcing Century, Action TESA, Virgo, and more." />
      </Helmet>

      <div className="bg-black pt-32 pb-24 text-left min-h-screen">
        
        {/* Page Header */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-medium font-sans">
            Our Inventory
          </div>
          <h1 className="font-serif-display text-5xl md:text-7xl font-light text-white leading-tight">
            Materials curated<br />for endurance.
          </h1>
        </section>

        {/* Tab Controls Selector */}
        <section className="max-w-6xl mx-auto px-6 mb-12">
          <div className="flex flex-wrap gap-2 pb-4 border-b border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-200 border-amber-200 text-black font-semibold shadow-lg shadow-amber-200/10'
                    : 'bg-white/2 border-white/5 text-white/60 hover:text-white hover:border-white/10'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Selected Category Detail Grid */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Left Box: Overview details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-8 rounded-2xl border border-white/5 bg-white/2 space-y-6">
                <h2 className="font-serif-display text-3xl text-amber-200 font-light">
                  {activeCat.name}
                </h2>
                <p className="text-xs text-white/60 leading-relaxed font-light font-sans">
                  {activeCat.desc}
                </p>
                <div className="space-y-3 border-t border-white/5 pt-6">
                  <div className="text-[9px] tracking-widest uppercase text-white/40 font-semibold font-sans">Key Features</div>
                  <ul className="space-y-2">
                    {activeCat.features.map((f, i) => (
                      <li key={i} className="text-xs text-white/70 font-light flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-200" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {activeCat.id === 'doors' && (
                <a 
                  href="/jd doors.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 rounded-2xl border border-amber-400/20 bg-amber-400/5 hover:bg-amber-400/10 hover:border-amber-400/30 transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.05)] w-full cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📄</span>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-white group-hover:text-amber-200 transition-colors font-serif-display">View Doors Catalogue</div>
                      <div className="text-[10px] text-white/40 font-sans font-light">Explore sizes, WPC specs &amp; designs</div>
                    </div>
                  </div>
                  <span className="text-amber-400 font-semibold text-xs tracking-wider transition-transform group-hover:translate-x-1 duration-300">→</span>
                </a>
              )}
            </div>

            {/* Right Box: Brands and sizing specifications */}
            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-xs tracking-widest uppercase text-white/40 font-semibold font-sans">Stocked Sourcing Brands</h3>
              <div className="space-y-4">
                {activeCat.brands.map((b, idx) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-amber-200/20 hover:bg-white/5 transition-all duration-300 flex flex-col justify-center group cursor-default"
                  >
                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-white group-hover:text-amber-200 transition-colors font-serif-display">{b.name}</div>
                      <div className="text-xs text-white/50 font-light font-sans">{b.specs}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call-to-action */}
              <div className="p-6 rounded-2xl border border-dashed border-amber-200/10 bg-amber-200/2 flex items-center justify-between mt-8">
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Need a custom sizing or batch price quote?</h4>
                  <p className="text-[10px] text-white/50 font-light">We offer special commercial trade discounts for local Rishikesh projects.</p>
                </div>
                <a 
                  href="/#contact" 
                  className="px-4 py-2.5 rounded-lg bg-amber-200 hover:bg-amber-100 text-black text-[10px] uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" /> Get Estimate
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
