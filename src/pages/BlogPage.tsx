import { Helmet } from 'react-helmet-async';
import { BookOpen, Calendar, Hourglass, ArrowUpRight } from 'lucide-react';

export default function BlogPage() {
  const incomingArticles = [
    {
      title: "HDMR vs Plywood: Which is Best for Bathroom Vanities?",
      category: "Material Comparison",
      readTime: "6 min read"
    },
    {
      title: "Best Laminate for Modular Kitchen: Suede vs. High Gloss Acrylics",
      category: "Interior Guides",
      readTime: "5 min read"
    },
    {
      title: "Century Prowud vs. Action TESA HDMR: Density & Moisture Testing",
      category: "Brand Sourcing",
      readTime: "8 min read"
    },
    {
      title: "How to Choose Interior Doors: Flush Core vs. CNC Membranic Styles",
      category: "Jagdamba Doors",
      readTime: "7 min read"
    },
    {
      title: "Best Hinges for Heavy Wardrobes: Sizing Hydraulic Soft-Close Buffers",
      category: "Cabinet Hardware",
      readTime: "5 min read"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Knowledge Center & Woodworking Resource Guides | Jagdamba Timber</title>
        <meta name="description" content="Read expert guidelines on selecting plywood, moisture-resistant HDMR boards, luxury laminates, and silent drawer slides. Coming soon to Rishikesh." />
      </Helmet>

      <div className="bg-black pt-32 pb-24 text-left min-h-screen">
        
        {/* Header */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-medium font-sans">
            Woodworking Guidebook
          </div>
          <h1 className="font-serif-display text-5xl md:text-7xl font-light text-white leading-tight">
            Knowledge Center
          </h1>
        </section>

        {/* Teaser Coming Soon Billboard */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="p-12 rounded-3xl border border-white/5 bg-white/2 relative overflow-hidden text-center md:text-left shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4 max-w-lg z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/10 border border-amber-200/20 text-amber-200 text-[10px] tracking-wider uppercase font-sans">
                <Hourglass className="w-3.5 h-3.5 animate-pulse" /> Launching Soon
              </div>
              <h2 className="font-serif-display text-3xl md:text-4xl text-white font-light">
                Expert sourcing guidelines directly from Rishikesh.
              </h2>
              <p className="text-xs text-white/50 leading-relaxed font-light font-sans">
                We are compiling detailed material density charts, laminate scratch-testing videos, and wardrobe spatial guidelines to help you make informed interior decisions.
              </p>
            </div>
            <div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-200 flex-shrink-0 animate-bounce">
              <BookOpen className="w-10 h-10" />
            </div>
          </div>
        </section>

        {/* Future Articles List */}
        <section className="max-w-4xl mx-auto px-6">
          <h3 className="text-xs tracking-widest uppercase text-white/40 font-semibold font-sans mb-8">Planned Woodworking Articles</h3>
          <div className="space-y-4">
            {incomingArticles.map((article, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-amber-200/20 hover:bg-white/5 transition-all duration-300 flex justify-between items-center group cursor-default"
              >
                <div className="space-y-2">
                  <div className="flex gap-4 items-center">
                    <span className="text-[9px] tracking-wider uppercase text-amber-200/80 bg-amber-200/5 px-2 py-0.5 rounded border border-amber-200/10">
                      {article.category}
                    </span>
                    <span className="text-[10px] text-white/30 font-light flex items-center gap-1 font-sans">
                      <Calendar className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>
                  <h4 className="text-base font-serif-display text-white/95 group-hover:text-amber-200 transition-colors font-light">
                    {article.title}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/30 group-hover:border-amber-200 group-hover:text-amber-200 transition-all flex-shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
