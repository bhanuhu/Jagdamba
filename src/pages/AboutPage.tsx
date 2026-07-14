import { Helmet } from 'react-helmet-async';
import { Award, Compass, History, Star } from 'lucide-react';

export default function AboutPage() {
  const testimonials = [
    {
      quote: "Sourcing modular kitchen panels from Jagdamba was a breeze. Their Action TESA HDMR boards have lasted for years without swelling.",
      author: "Rajesh Rawat",
      role: "Homeowner, Rishikesh"
    },
    {
      quote: "As an architect, I demand high sizing accuracy and genuine plywood core voids. Jagdamba Timber has been our reliable partner for over 15 projects in Dehradun.",
      author: "Ar. Shruti Sharma",
      role: "Studio Design Lab"
    },
    {
      quote: "Their custom solid doors are top-tier. Sizing was perfect, and the teak veneers we picked look stunning.",
      author: "Vikram Negi",
      role: "Contractor, Haridwar"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Woodworking Heritage & Craftsmanship | About Jagdamba Timber</title>
        <meta name="description" content="Learn about our 40-year combined legacy of design craftsmanship, local heritage, and material sourcing in Rishikesh, Uttarakhand." />
      </Helmet>

      <div className="bg-black pt-32 pb-24 text-left min-h-screen">
        
        {/* Hero Section */}
        <section className="relative max-w-6xl mx-auto px-6 mb-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <div className="sunbeam" style={{ left: '20%', transform: 'skewX(-15deg)' }} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-medium font-sans">
              Our Journey
            </div>
            <h1 className="font-serif-display text-5xl md:text-7xl font-light text-white leading-tight mb-8">
              A legacy built<br />on trust and timber.
            </h1>
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-light font-sans max-w-xl">
              Since opening our showroom gates in Gumaniwala, Rishikesh, we have combined over 40 years of family woodworking experience with modern panel engineering. We specialize in sourcing plywood, HDMR boards, laminates, custom doors, and premium hinges.
            </p>
          </div>
        </section>

        {/* Brand Values Grid */}
        <section className="relative bg-neutral-950 py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            
            <div className="mb-16">
              <h2 className="font-serif-display text-3xl md:text-5xl font-light text-white mb-4">
                Core Workshop Values
              </h2>
              <p className="text-xs text-white/40 uppercase tracking-widest font-sans font-medium">
                How we build customer trust every single day
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl border border-white/5 bg-white/2 space-y-4">
                <div className="w-10 h-10 rounded-full bg-amber-200/10 flex items-center justify-center border border-amber-200/20 text-amber-200">
                  <History className="w-5 h-5" />
                </div>
                <h3 className="font-serif-display text-xl text-white font-light">HeritageSourcing</h3>
                <p className="text-xs text-white/50 leading-relaxed font-light font-sans">
                  We verify each log and panel. Only raw materials meeting moisture limits and structural thickness enter our inventory list.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-white/5 bg-white/2 space-y-4">
                <div className="w-10 h-10 rounded-full bg-amber-200/10 flex items-center justify-center border border-amber-200/20 text-amber-200">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif-display text-xl text-white font-light">Accurate Craftsmanship</h3>
                <p className="text-xs text-white/50 leading-relaxed font-light font-sans">
                  Our local doors manufacturing workshop cuts to exact millimeters. No splits, hollow voids, or rough surface margins.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-white/5 bg-white/2 space-y-4">
                <div className="w-10 h-10 rounded-full bg-amber-200/10 flex items-center justify-center border border-amber-200/20 text-amber-200">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif-display text-xl text-white font-light">Genuine Partnerships</h3>
                <p className="text-xs text-white/50 leading-relaxed font-light font-sans">
                  As authorized dealers of Century Ply, Action TESA, and Virgo, we guarantee 100% original invoices and manufacturer-backed warranties.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Heritage Timeline Stats */}
        <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif-display text-3xl md:text-5xl font-light text-white mb-6">
              Our Milestones
            </h2>
            <div className="space-y-8 font-sans">
              <div className="flex gap-4 items-start">
                <div className="text-amber-200 font-serif-display text-lg mt-0.5">1986</div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Founder's timber logging and timber distribution network launches, delivering bulk wholesale logs to regional carpenters and government depots.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-amber-200 font-serif-display text-lg mt-0.5">2006</div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Establishment of our dedicated showroom, **Jagdamba Timber Works & Plywood**, in Gumaniwala, Rishikesh. We expanded from bulk logs to finished interior boards.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-amber-200 font-serif-display text-lg mt-0.5">2018</div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Launched our signature doors workshop, creating solid core timber flush doors and teak veneer doors to order.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/5 bg-neutral-900 aspect-video shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85" 
              alt="Timber selection"
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative bg-neutral-950 py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 text-center md:text-left">
              <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-medium font-sans">
                Testimonials
              </div>
              <h2 className="font-serif-display text-3xl md:text-5xl font-light text-white leading-tight">
                Recommended by experts and clients.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-white/2 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex gap-1 text-amber-200">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-200" />
                      ))}
                    </div>
                    <p className="text-xs text-white/70 italic leading-relaxed font-light">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <div className="text-sm font-medium text-white/95 font-serif-display">{t.author}</div>
                    <div className="text-[10px] text-white/40 tracking-wider uppercase font-sans mt-0.5">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
