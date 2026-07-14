export default function Study() {
  const specs = [
    { title: 'Core', value: 'Assam Plywood' },
    { title: 'Face', value: 'Virgo Laminate' },
    { title: 'Hinges', value: 'Hepo German' },
    { title: 'Structure', value: 'Century HDMR' },
  ];

  return (
    <section id="study" className="relative min-h-screen bg-black py-32 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium">
            06 · Study
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl font-light text-white">
            A room for deep work.
          </h2>
        </div>

        {/* Content Columns */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left: Study Room Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/5 shadow-2xl bg-neutral-900">
            <img
              src="/images/study-workspace-cabinet.jpg"
              alt="Study Room Layout"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Right: Spec grid and content description */}
          <div className="flex flex-col justify-center">
            <h3 className="font-serif-display text-3xl md:text-4xl text-white font-light mb-6">
              Floating shelves.<br />Grounded thought.
            </h3>
            
            <p className="text-white/60 leading-relaxed font-light text-sm md:text-base mb-10">
              Assam plywood core, Virgo laminate face, invisible cable channels. A workspace built to disappear so the work can take the stage.
            </p>

            {/* Spec Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {specs.map((s, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-xl border border-white/5 bg-neutral-950 hover:border-amber-200/20 transition-colors"
                >
                  <div className="text-[9px] tracking-[0.3em] text-amber-200/70 uppercase mb-1.5 font-medium">
                    {s.title}
                  </div>
                  <div className="font-serif-display text-lg text-white font-light">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
