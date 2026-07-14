"use client";

import { useState } from 'react';
import { BookOpen, ArrowLeft, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  recommendation: string;
  specs?: { label: string; value: string }[];
}

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: "HDMR vs Plywood: Which is Best for Bathroom Vanities?",
      category: "Material Comparison",
      readTime: "6 min read",
      summary: "Bathroom vanities face constant humidity, water splashes, and high moisture. Learn why High-Density Moisture Resistant (HDMR) boards have emerged as a superior alternative to traditional BWP plywood.",
      content: [
        "Bathroom vanities are subjected to the harshest interior conditions—constant humidity, direct water exposure, and moisture vapor. Traditionally, Boiling Water Proof (BWP) blockboards and marine plywood were the default materials. However, High Density Moisture Resistant (HDMR) boards represent a significant leap forward in engineered wood technology.",
        "HDMR is manufactured by combining homogeneous eucalyptus wood fibers with special water-resistant resins, compressed under extreme high pressure. This results in a density of 850 kg/m³, which is far higher than standard plywood (~700 kg/m³). Because HDMR is highly compressed, it has virtually no internal core voids.",
        "When exposed to moisture, plywood can absorb water through microscopic gaps between its veneer layers, leading to layer separation (delamination) and warping over time. HDMR, being a single homogeneous block, absorbs moisture uniformly. In independent water immersion tests, high-quality HDMR shows less than 5% thickness swelling after 2 hours of direct submersion, recovering its original thickness upon drying."
      ],
      recommendation: "Use high-density HDMR (like Century Prowud or Action TESA) for vanities with intricate CNC designs, profile drawer handles, and wall-hung cabinets. Choose BWP Plywood for heavy vanity countertops requiring massive weight support over long spans.",
      specs: [
        { label: 'Density Indicator', value: '850 kg/m³ (High Density)' },
        { label: 'Water Swelling Rate', value: '< 5% over 2 hrs immersion' },
        { label: 'Core Integrity', value: 'Homogeneous (No voids or layers)' }
      ]
    },
    {
      id: 2,
      title: "Best Laminate for Modular Kitchen: Suede vs. High Gloss Acrylics",
      category: "Interior Guides",
      readTime: "5 min read",
      summary: "Choosing between high-gloss acrylic sheets and matte suede laminates determines the aesthetic and maintenance of your modular kitchen. We break down scratch resistance and smudges.",
      content: [
        "Your kitchen cabinets occupy the largest visual area of the space and undergo the most handling. The laminate you choose dictates both the style of your home and how much time you will spend cleaning.",
        "High-Gloss Acrylic laminates provide a stunning, mirror-like finish with a 90%+ light reflection rate. They are perfect for small kitchens as they make the room feel larger. However, acrylics are highly sensitive to fingerprints, oil smudges, and cleaning scratches. Even dust can become visible on dark glossy surfaces under direct lighting.",
        "Suede and Matte laminates, on the other hand, offer a modern, warm, and sophisticated look. Premium matte laminates feature anti-fingerprint technology that resists sweat, grease, and micro-scratches. They are incredibly low maintenance and can be wiped down with a simple damp cloth without leaving streak marks."
      ],
      recommendation: "For the ideal balance, implement a dual-tone layout: use High-Gloss Acrylics (from Virgo or Black Cobra) for the top wall cabinets to reflect light, and Suede/Matte finishes for base cabinets and drawers where handling, splashes, and daily wear are highest.",
      specs: [
        { label: 'Acrylic Reflection', value: '90%+ (Mirror Finish)' },
        { label: 'Matte Maintenance', value: 'Extremely Low (Smudge Proof)' },
        { label: 'Thickness Standard', value: '1.0mm - 1.2mm for cabinets' }
      ]
    },
    {
      id: 3,
      title: "Century Prowud vs. Action TESA HDMR: Density & Moisture Testing",
      category: "Brand Sourcing",
      readTime: "8 min read",
      summary: "An in-depth analysis of India's two leading HDMR boards. We compare Action TESA's signature green core with Century Prowud's natural wood-fiber composition.",
      content: [
        "When purchasing HDMR boards for modular wardrobes or kitchens, carpenters and homeowners are frequently presented with two main options: Action TESA HDHMR and Century Prowud HDMR. Both are excellent products, but they utilize different manufacturing ideologies.",
        "Action TESA HDHMR is famous for its green core. The green color is added during manufacturing as a marker to identify the moisture-resistant grade. Action TESA uses Eucalyptus chips and specialized resins to achieve a dense core of ~850 kg/m³, making it incredibly tough and borer-proof.",
        "Century Prowud HDMR does not use artificial coloring dye; it retains the natural golden-brown color of eucalyptus wood fibers. Century focuses on high polymer resin bonding. Century Prowud is highly favored by CNC craftsmen because the absence of color pigments makes it slightly smoother on router blades, resulting in cleaner grooving edges."
      ],
      recommendation: "Both boards are highly reliable. Select Action TESA HDHMR for kitchen carcass boxes, sink bases, and bathroom panels. Choose Century Prowud HDMR for clean CNC routing panels, wardrobe shutters, and decorative wall claddings.",
      specs: [
        { label: 'Action TESA Core', value: 'Signature Green Color' },
        { label: 'Century Prowud Core', value: 'Natural Brown Wood Fiber' },
        { label: 'Termite Protection', value: '100% Resistant (Both Brands)' }
      ]
    },
    {
      id: 4,
      title: "How to Choose Interior Doors: Flush Core vs. CNC Membranic Styles",
      category: "Jagdamba Doors",
      readTime: "7 min read",
      summary: "Understand the structural differences between heavy solid-core flush doors and modern seamless CNC membrane doors to pick the right option for your layout.",
      content: [
        "Your interior doors are touched dozens of times daily and act as barriers for noise, temperature, and privacy. Selecting the wrong core can lead to sagging hinges, warping doors, and poor acoustics.",
        "Solid Flush Doors are made with a core of solid pine wood fillers cladded with face veneers or laminate overlays. They are heavy, provide excellent sound insulation (~30dB reduction), and offer a satisfying premium weight when operated. They are ideal for bedrooms and entrances.",
        "CNC Membrane Doors feature a solid engineered HDF core with custom grooves engraved by computer-guided routers, vacuum-wrapped in a single seamless PVC sheet. Because there are no edge bands, the corners are 100% waterproof. They are easy to wash and come in modern, striking patterns."
      ],
      recommendation: "Use solid core flush doors (polished or laminated) for main doors and bedrooms where privacy and weight are preferred. Use CNC Membrane doors for bathrooms, pooja rooms, and kitchen balconies where waterproof qualities and unique panels are required.",
      specs: [
        { label: 'Flush Door weight', value: 'Heavy Timber Core (Premium)' },
        { label: 'Membrane Finish', value: 'Seamless PVC (No Edge Bands)' },
        { label: 'Sound Insulation', value: 'Excellent (Solid Core)' }
      ]
    },
    {
      id: 5,
      title: "Best Hinges for Heavy Wardrobes: Sizing Hydraulic Soft-Close Buffers",
      category: "Cabinet Hardware",
      readTime: "5 min read",
      summary: "Wardrobe doors finished with 1mm laminate sheets carry significant weight. Sizing your hinges and picking hydraulic cylinders ensures smooth closing.",
      content: [
        "A wardrobe's life is defined by its hardware. While plywood and laminates last decades, a cheap hinge will fail in a few years, causing doors to sag, scratch the floor, or fail to close properly.",
        "Modern soft-close hinges contain a small hydraulic cylinder filled with silicon oil. As the door closes, the cylinder cushions the impact, closing the door silently. This silent operation prevents vibrations from loosening screw threads in the wood over time.",
        "Hinge placement is critical. For standard 7-foot almirah doors, you must install 3 hinges (one at the top, one at the bottom, and one in the middle to prevent bowing). For premium 8-foot doors cladded with heavy mirrors or thick laminates, install 4 hinges to distribute the weight evenly."
      ],
      recommendation: "Settle for certified hardware brands (like HEPO or Hettich) that are tested for over 100,000 cycles. Do not mix brands on a single door, and always use stainless steel hinges in humid areas to avoid rust.",
      specs: [
        { label: 'Hettich HEPO Cycles', value: '120,000 Open/Close Certified' },
        { label: 'Hinge Requirement', value: '3 for 7ft doors; 4 for 8ft doors' },
        { label: 'Hinge Material', value: 'SS-304 (Rust-resistant grade)' }
      ]
    }
  ];

  const currentArticle = selectedArticle !== null ? articles.find(a => a.id === selectedArticle) : null;

  return (
    <>
      <div className="bg-black pt-32 pb-24 text-left min-h-screen">
        
        {/* Header */}
        <section className="max-w-6xl mx-auto px-6 mb-12">
          <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-medium font-sans">
            Woodworking Guidebook
          </div>
          <h1 className="font-serif-display text-5xl md:text-7xl font-light text-white leading-tight">
            Knowledge Center
          </h1>
        </section>

        {!currentArticle ? (
          <>
            {/* Overview / Welcoming Header */}
            <section className="max-w-6xl mx-auto px-6 mb-12">
              <div className="p-8 rounded-3xl border border-white/5 bg-white/2 relative overflow-hidden shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="space-y-3 max-w-2xl text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/10 border border-amber-200/20 text-amber-200 text-[10px] tracking-wider uppercase font-sans font-semibold">
                    <BookOpen className="w-3.5 h-3.5" /> Reference Library
                  </div>
                  <h2 className="font-serif-display text-2xl md:text-3xl text-white font-light">
                    Sourcing materials directly from our Rishikesh workshop.
                  </h2>
                  <p className="text-xs text-white/50 leading-relaxed font-light font-sans">
                    Make informed interior decisions. We have compiled technical density ratings, laminate selection criteria, and custom door selection checklists to guide your carpentry.
                  </p>
                </div>
              </div>
            </section>

            {/* Articles Grid list */}
            <section className="max-w-4xl mx-auto px-6">
              <h3 className="text-xs tracking-widest uppercase text-white/40 font-semibold font-sans mb-6">Read Material Guides</h3>
              <div className="space-y-4">
                {articles.map((article) => (
                  <div 
                    key={article.id}
                    onClick={() => setSelectedArticle(article.id)}
                    className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-amber-200/20 hover:bg-white/5 transition-all duration-300 flex justify-between items-center group cursor-pointer"
                  >
                    <div className="space-y-2 text-left pr-4">
                      <div className="flex gap-4 items-center">
                        <span className="text-[9px] tracking-wider uppercase text-amber-200/80 bg-amber-200/5 px-2 py-0.5 rounded border border-amber-200/10">
                          {article.category}
                        </span>
                        <span className="text-[10px] text-white/30 font-light font-sans">
                          {article.readTime}
                        </span>
                      </div>
                      <h4 className="text-base md:text-lg font-serif-display text-white group-hover:text-amber-200 transition-colors font-light">
                        {article.title}
                      </h4>
                      <p className="text-xs text-white/40 font-sans line-clamp-2 max-w-2xl font-light">
                        {article.summary}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/30 group-hover:border-amber-200 group-hover:text-amber-200 transition-all flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          /* Single Article Detail View */
          <section className="max-w-4xl mx-auto px-6">
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-2 text-xs text-white/60 hover:text-amber-200 transition-colors mb-8 cursor-pointer uppercase tracking-wider font-semibold font-sans"
            >
              <ArrowLeft className="w-4 h-4" /> Back to library
            </button>

            <div className="space-y-8">
              {/* Category, Read Time, and Title */}
              <div className="space-y-4">
                <span className="inline-block text-[10px] tracking-widest uppercase text-amber-200 bg-amber-200/10 px-3 py-1 rounded border border-amber-200/20 font-semibold font-sans">
                  {currentArticle.category}
                </span>
                <h2 className="font-serif-display text-3xl md:text-5xl text-white leading-tight font-light">
                  {currentArticle.title}
                </h2>
                <div className="text-xs text-white/40 font-sans font-light">
                  Estimated read: {currentArticle.readTime}
                </div>
              </div>

              {/* Technical specifications box if available */}
              {currentArticle.specs && (
                <div className="p-6 rounded-2xl border border-white/5 bg-white/2 space-y-4">
                  <h4 className="text-[10px] tracking-widest uppercase text-white/40 font-semibold font-sans">Technical Benchmarks</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {currentArticle.specs.map((s, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/2">
                        <div className="text-[9px] tracking-wider uppercase text-white/45 mb-1 font-sans">{s.label}</div>
                        <div className="text-xs text-amber-200 font-semibold">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Article content panels */}
              <div className="space-y-6 text-sm md:text-base text-white/70 leading-relaxed font-light font-sans max-w-3xl">
                {currentArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Sourcing / Expert Recommendations Box */}
              <div className="p-6 rounded-2xl border border-dashed border-amber-400/20 bg-amber-400/5 max-w-3xl space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-serif-display text-sm font-semibold">
                  <ShieldCheck className="w-5 h-5 flex-shrink-0 text-amber-400" />
                  Sourcing Recommendation
                </div>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed font-sans font-light">
                  {currentArticle.recommendation}
                </p>
              </div>

              {/* Back to library button under article */}
              <div className="pt-8 border-t border-white/5 max-w-3xl">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="flex items-center gap-2 text-xs text-white/60 hover:text-amber-200 transition-colors cursor-pointer uppercase tracking-wider font-semibold font-sans"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to library
                </button>
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
}
