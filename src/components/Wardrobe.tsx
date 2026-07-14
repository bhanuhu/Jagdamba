import { useState } from 'react';

interface HingeHardware {
  id: string;
  name: string;
  slogan: string;
  cycles: string;
  desc: string;
}

export default function Wardrobe() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHingeId, setActiveHingeId] = useState('mazix');

  const hardware: HingeHardware[] = [
    {
      id: 'mazix',
      name: 'Mazix',
      slogan: 'Silent luxury',
      cycles: '80,000 cycles tested',
      desc: 'Every Mazix hinge is torque-tested for 80,000 open-close cycles. That\'s roughly 20 open-closes a day for 15 years — silent, precise, uncompromising luxury.',
    },
    {
      id: 'hepo',
      name: 'Hepo',
      slogan: 'German precision',
      cycles: '120,000 cycles tested',
      desc: 'Hepo hinges are built with premium German engineering standards, certified for 120,000 cycles. Perfect for heavy doors requiring robust performance and zero sag.',
    },
  ];

  const activeHardware = hardware.find((h) => h.id === activeHingeId) || hardware[0];

  return (
    <section className="relative min-h-screen bg-neutral-950 py-32 overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium">
            05 · Wardrobe
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-white">
            Silence is the finest hardware.
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
            Inspect our hinges. Feel the softness of a well-engineered close.
          </p>
        </div>

        {/* 3D Showcase and Tabs Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full mt-8">
          
          {/* Left Column: 3D Wardrobe Simulator */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl flex flex-col justify-between p-6">
            
            {/* Perspective Box */}
            <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ perspective: '1500px' }}>
              
              {/* Wardrobe Interior (Visible when door is open) */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: 'url(/images/wardrobe-interior-design.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(0.5)'
                }}
              />
              
              {/* Left Static Panel */}
              <div className="absolute left-0 top-[10%] w-[45%] h-[80%] rounded-l-lg overflow-hidden border-r border-black/35 shadow-lg">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'url(/images/wardrobe-exterior-veneer.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.85) contrast(1.05)'
                  }}
                />
              </div>

              {/* 3D Rotating Right Door Panel */}
              <div 
                className="absolute right-[5%] top-[10%] w-[45%] h-[80%] rounded-r-lg overflow-hidden shadow-2xl origin-left"
                style={{
                  transform: `rotateY(${isOpen ? '115deg' : '0deg'})`,
                  transition: 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  backfaceVisibility: 'hidden',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'url(/images/wardrobe-exterior-veneer.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.95)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/60" />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-amber-200/60 rounded-full" />
              </div>
            </div>

            {/* Dummy spacer */}
            <div />
            
            {/* Open trigger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-20 self-center pin-badge text-white px-6 py-3 rounded-full text-[10px] tracking-[0.25em] font-semibold uppercase hover:bg-amber-200 hover:text-black transition-colors cursor-pointer"
            >
              {isOpen ? 'Close Wardrobe' : 'Open Wardrobe'}
            </button>
          </div>

          {/* Right Column: Hardware comparisons */}
          <div className="flex flex-col justify-center">
            <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-semibold">
              Hardware
            </div>

            {/* Comparison Selector tabs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {hardware.map((h) => {
                const isActive = activeHingeId === h.id;
                return (
                  <button
                    key={h.id}
                    onClick={() => setActiveHingeId(h.id)}
                    className={`p-6 rounded-2xl border text-left transition-all cursor-pointer ${
                      isActive
                        ? 'border-amber-200/60 bg-amber-200/5'
                        : 'border-white/10 hover:border-white/20 bg-transparent'
                    }`}
                  >
                    <div className="font-serif-display text-3xl mb-1 text-white font-light">
                      {h.name}
                    </div>
                    <div className="text-xs text-white/50 tracking-wider">
                      {h.slogan}
                    </div>
                    <div className="text-[9px] text-amber-200/70 mt-4 tracking-widest uppercase font-semibold">
                      {h.cycles}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Description details card */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
              <p className="text-white/70 leading-relaxed font-light text-sm md:text-base">
                {activeHardware.desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
