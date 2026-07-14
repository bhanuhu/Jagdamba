import { Helmet } from 'react-helmet-async';
import { Award, ShieldCheck, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrandsPage() {
  const brands = [
    {
      name: 'Century Ply',
      category: 'Plywood & HDMR Panels',
      desc: 'Authorized dealership supplying Century Club Prime, Century Prowud, and architectural veneers. Backed by official manufacturing warranties and QR verification stamps.',
      stock: ['Club Prime PWP Plywood', 'Century Prowud HDMR', 'Century Teak Wood Veneers']
    },
    {
      name: 'Action TESA',
      category: 'HDMR & Particle Boards',
      desc: 'Top-tier dealership distributing Action TESA Moisture Resistant HDMR boards and laminated particle sheets. Ideal for kitchen modular cores and almirah boxes.',
      stock: ['Action TESA HDMR Panels', 'Laminated Particle Sheets', 'TESA Adhesive solutions']
    },
    {
      name: 'Novopan',
      category: 'Engineered Wood Panels',
      desc: 'Authorized partner supply routes distributing Novopan high-density wood boards and decorative particle overlays.',
      stock: ['Novopan Engineered Panels', 'Particle Core Sheets']
    },
    {
      name: 'Assam Plywood',
      category: 'Premium Local Plywood',
      desc: 'Direct log-sourcing timber partner supplying high-density borer-resistant local hardwood plywood for wardrobes and frames.',
      stock: ['Hardwood Plywood BWR', 'Commercial block boards']
    },
    {
      name: 'Black Cobra Laminates',
      category: 'Decorative Mica Sheets',
      desc: 'Distributing Black Cobra decorative laminates. Featuring premium textured, suede-finish, and scratch-resistant options.',
      stock: ['Textured Mica Laminates', 'Acrylic High-Gloss Sheets']
    },
    {
      name: 'Virgo Laminates',
      category: 'Acrylic & Gloss Sheets',
      desc: 'Authorized distribution channel for Virgo luxury mica lines, high gloss laminates, and matching edge band tapes.',
      stock: ['Virgo High-Gloss Panels', 'Suede Finish Laminates']
    },
    {
      name: 'Vidyalam',
      category: 'Backing Mica Sheets',
      desc: 'Economical, solid backing micas supplying local wood workshops and carpenters for wardrobe inner lining sheets.',
      stock: ['0.8mm Inner Lining Mica', 'Basic structural laminates']
    },
    {
      name: 'Mazix',
      category: 'Cabinet Hinges & Brackets',
      desc: 'Stocking Mazix auto-hinges, soft-close brackets, and structural architectural door handles.',
      stock: ['Hydraulic auto-hinges', 'Door handle sets']
    },
    {
      name: 'HEPO',
      category: 'Silent Hardware Fittings',
      desc: 'Authorized dealer of HEPO (a Hettich brand) hardware solutions, supplying silent drawer slides and hydraulic wardrobe lifts.',
      stock: ['HEPO Soft-Close Slides', 'Hydraulic Lift-Up brackets', 'Multi-slide wardrobe guides']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Authorized Brands & Dealerships | Jagdamba Timber & Plywood</title>
        <meta name="description" content="Authorized partner showroom for Century Ply, Action TESA, Virgo, Black Cobra, and HEPO. 100% genuine products sourced directly from manufacturers." />
      </Helmet>

      <div className="bg-black pt-32 pb-24 text-left min-h-screen">
        
        {/* Header */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-medium font-sans">
            Verified Partners
          </div>
          <h1 className="font-serif-display text-5xl md:text-7xl font-light text-white leading-tight">
            Authorized brands<br />you can rely on.
          </h1>
        </section>

        {/* Quality Banner */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="p-8 rounded-2xl border border-amber-200/10 bg-amber-200/2 flex flex-col md:flex-row gap-6 md:items-center justify-between">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-amber-200/10 flex items-center justify-center text-amber-200 border border-amber-200/20 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif-display text-lg text-white font-light">100% Direct Manufacturer Supply</h4>
                <p className="text-xs text-white/50 leading-relaxed font-light mt-1 font-sans">
                  We buy directly from the company depots to eliminate duplicate boards. Every panel shipped carries original invoices and official warranty stickers.
                </p>
              </div>
            </div>
            <Link 
              to="/products"
              className="px-5 py-3 rounded-xl bg-amber-200 hover:bg-amber-100 text-black text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 self-start md:self-auto flex-shrink-0"
            >
              <Award className="w-4 h-4" /> Browse Catalog
            </Link>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((b, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-amber-200/20 hover:bg-white/5 transition-all duration-500 flex flex-col justify-between space-y-6 shadow-2xl"
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] tracking-widest text-amber-200/80 uppercase font-semibold font-sans block mb-1">
                      {b.category}
                    </span>
                    <h3 className="font-serif-display text-2xl text-white font-light">
                      {b.name}
                    </h3>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed font-light font-sans">
                    {b.desc}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 space-y-2">
                  <div className="text-[9px] tracking-widest uppercase text-white/40 font-semibold font-sans">Available Inventory</div>
                  <ul className="space-y-1.5">
                    {b.stock.map((item, i) => (
                      <li key={i} className="text-xs text-white/70 font-light flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-200/80 flex-shrink-0" />
                        <span className="font-sans">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
