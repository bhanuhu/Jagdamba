import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/919412678698?text=Hi%20Jagdamba%20Timber%20Works,%20I'm%20interested%20in%20a%20home%20design%20consultation.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-neutral-950/95 hover:bg-neutral-900 border border-emerald-500/30 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl hover:shadow-emerald-950/20 hover:border-emerald-500 transition-all duration-300 group cursor-pointer"
      style={{
        boxShadow: '0 10px 30px -10px rgba(16, 185, 129, 0.2)'
      }}
    >
      {/* Pulse notification dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>

      {/* Label */}
      <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-white/90 group-hover:text-emerald-400 transition-colors">
        Chat on WhatsApp
      </span>

      {/* WhatsApp Icon wrapper */}
      <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
        <MessageCircle className="w-4 h-4 fill-emerald-400/10" />
      </div>
    </a>
  );
}
