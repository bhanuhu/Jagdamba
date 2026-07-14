import { useState } from 'react';
import { Save, ShieldCheck } from 'lucide-react';

interface ConfigOption {
  id: string;
  name: string;
  desc: string;
  color?: string;
  filter: string; // CSS filters to apply to preview
}

export default function Configurator() {
  const boards: ConfigOption[] = [
    { id: 'century', name: 'Century HDMR', desc: 'Legendary strength', filter: 'contrast(1.15) brightness(0.9)' },
    { id: 'tesa', name: 'Action TESA', desc: 'Precision engineered', filter: 'contrast(1.0) brightness(1.05)' },
    { id: 'saptam', name: 'Saptam', desc: 'Contemporary craft', filter: 'contrast(1.1) brightness(0.85) sepia(0.2)' },
    { id: 'novopan', name: 'Novopan', desc: 'European finish', filter: 'contrast(0.95) brightness(1.1) saturate(0.8)' },
  ];

  const laminates: ConfigOption[] = [
    { id: 'black-cobra', name: 'Black Cobra', desc: 'Deep charcoal', color: '#1a1410', filter: 'hue-rotate(-10deg) brightness(0.8) saturate(0.9)' },
    { id: 'vidyalam', name: 'Vidyalam', desc: 'Rich espresso', color: '#3d2a18', filter: 'hue-rotate(10deg) brightness(0.9) saturate(1.1)' },
    { id: 'virgo', name: 'Virgo', desc: 'Golden honey oak', color: '#c9a878', filter: 'hue-rotate(25deg) brightness(1.15) saturate(1.0)' },
  ];

  const hinges: ConfigOption[] = [
    { id: 'mazix', name: 'Mazix', desc: '80,000 cycles tested', filter: '' },
    { id: 'hepo', name: 'Hepo', desc: '120,000 cycles tested', filter: '' },
  ];

  const doors: ConfigOption[] = [
    { id: 'jagdamba', name: 'Jagdamba Doors', desc: 'Flagship wood core', filter: '' },
    { id: 'oak-veneer', name: 'Oak Veneer Door', desc: 'Light structural core', filter: '' },
  ];

  const [selectedBoard, setSelectedBoard] = useState(boards[0]);
  const [selectedLaminate, setSelectedLaminate] = useState(laminates[0]);
  const [selectedHinge, setSelectedHinge] = useState(hinges[0]);
  const [selectedDoor, setSelectedDoor] = useState(doors[0]);
  
  const [saved, setSaved] = useState(false);

  // Combine filters for preview style
  const combinedFilter = `${selectedBoard.filter} ${selectedLaminate.filter}`;

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  };

  return (
    <section id="configurator" className="relative min-h-screen bg-black py-32 overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium">
            08 · Configurator
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-white">
            Design your room.
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
            Choose the elements. Watch it come alive. Save the design and we'll craft you a quote.
          </p>
        </div>

        {/* Configurator Interface Grid */}
        <div className="grid lg:grid-cols-5 gap-12 w-full mt-8 items-start">
          
          {/* Left Columns: Interactive Live Preview Board */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl bg-neutral-900">
              
              {/* Preview Image */}
              <img
                src="/images/configurator-base-room.jpg"
                alt="Room Customization Preview"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
                style={{ filter: combinedFilter }}
              />
              
              {/* Dynamic light gradient map based on laminate selection */}
              <div 
                className="absolute inset-0 mix-blend-overlay opacity-30 transition-all duration-1000"
                style={{
                  background: `linear-gradient(135deg, ${selectedLaminate.color} 0%, transparent 50%, #8a5a2b 100%)`
                }}
              />

              {/* Top-left Indicator badge */}
              <div className="absolute top-6 left-6 pin-badge rounded-full px-4 py-1.5 text-[9px] tracking-widest uppercase text-amber-200/80 font-semibold animate-pulse">
                Live Preview
              </div>

              {/* Bottom detail summary board overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="pin-badge rounded-2xl p-3 sm:p-4 w-full sm:flex-1 backdrop-blur-md">
                  <div className="text-[9px] tracking-[0.25em] text-amber-200/70 uppercase mb-1 font-semibold">
                    Current Selection
                  </div>
                  <div className="text-xs sm:text-sm font-serif-display text-white font-light truncate">
                    {selectedBoard.name} · {selectedLaminate.name}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-white/50 mt-0.5 truncate">
                    Hardware: {selectedHinge.name} · Door: {selectedDoor.name}
                  </div>
                </div>

                {/* Color swatches showcase */}
                <div className="flex gap-2 justify-end">
                  {laminates.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setSelectedLaminate(l)}
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 transition-all cursor-pointer ${
                        selectedLaminate.id === l.id ? 'border-amber-200 scale-110 shadow-lg' : 'border-white/20'
                      }`}
                      style={{ backgroundColor: l.color }}
                      title={l.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Success Banner */}
            {saved && (
              <div className="flex items-center gap-3 p-4 rounded-xl border border-amber-200/20 bg-amber-200/5 text-amber-200 text-sm animate-fade-in">
                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                <span>Design saved successfully! Our engineering team will review and contact you with a customized quote.</span>
              </div>
            )}
          </div>

          {/* Right Columns: Option Configurations list */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 1. Board Selector */}
            <div>
              <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-3 font-semibold">
                HDMR Board
              </div>
              <div className="grid grid-cols-2 gap-2">
                {boards.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBoard(b)}
                    className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      selectedBoard.id === b.id
                        ? 'border-amber-200/60 bg-amber-200/5'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">{b.name}</div>
                    <div className="text-[9px] text-white/40 tracking-wider truncate mt-0.5">{b.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Laminate Selector */}
            <div>
              <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-3 font-semibold">
                Laminate
              </div>
              <div className="grid grid-cols-1 gap-2">
                {laminates.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setSelectedLaminate(l)}
                    className={`text-left p-3 rounded-xl border transition-all flex items-center gap-3 cursor-pointer ${
                      selectedLaminate.id === l.id
                        ? 'border-amber-200/60 bg-amber-200/5'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-full border border-white/10 flex-shrink-0" style={{ backgroundColor: l.color }} />
                    <div>
                      <div className="text-xs font-semibold text-white">{l.name}</div>
                      <div className="text-[9px] text-white/40 tracking-wider mt-0.5">{l.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Hinges Selector */}
            <div>
              <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-3 font-semibold">
                Cabinet Hinges
              </div>
              <div className="grid grid-cols-2 gap-2">
                {hinges.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHinge(h)}
                    className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      selectedHinge.id === h.id
                        ? 'border-amber-200/60 bg-amber-200/5'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">{h.name}</div>
                    <div className="text-[9px] text-white/40 tracking-wider truncate mt-0.5">{h.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Doors Selector */}
            <div>
              <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-3 font-semibold">
                Doors
              </div>
              <div className="grid grid-cols-2 gap-2">
                {doors.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDoor(d)}
                    className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      selectedDoor.id === d.id
                        ? 'border-amber-200/60 bg-amber-200/5'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">{d.name}</div>
                    <div className="text-[9px] text-white/40 tracking-wider truncate mt-0.5">{d.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Request Button */}
            <button
              onClick={handleSave}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-amber-200 hover:bg-amber-100 text-black font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-amber-200/10 cursor-pointer"
            >
              <Save className="w-4 h-4" /> Save & Request Quote
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
