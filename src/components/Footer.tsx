import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 overflow-hidden text-left">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
        
        {/* Logo & Showroom Hours Column */}
        <div className="col-span-2 space-y-6">
          <div className="font-serif-display text-2xl tracking-wider text-amber-100 flex items-center gap-2">
            <img loading="lazy" decoding="async" 
              src="/favicon.png" 
              alt="Jagdamba Logo" 
              className="h-10 w-auto object-contain rounded border border-white/10 bg-neutral-950/20 p-0.5"
            />
            <span>
              Jagdamba
              <span className="text-[8px] tracking-[0.3em] ml-2 font-sans font-light uppercase block">
                TIMBER WORKS & PLYWOOD
              </span>
            </span>
          </div>
          <p className="text-xs text-white/50 font-light leading-relaxed max-w-sm">
            Providing premium lumber, plywood, laminates, and custom cabinetry since 2006. Devoted to master craftsmanship, structural durability, and design heritage.
          </p>
          <div className="text-xs text-white/40 font-light font-sans space-y-1">
            <div className="text-[9px] tracking-widest uppercase text-amber-200/60 font-semibold mb-1">Showroom Hours</div>
            <div>Mon - Sun: 9:00 AM - 8:00 PM</div>
          </div>
        </div>

        {/* Links Column 1: Core Offerings */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/80 font-semibold mb-6">Offerings</h4>
          <ul className="space-y-3 text-xs text-white/40 font-light">
            <li><Link href="/products" className="hover:text-amber-200 transition-colors">Premium Plywood</Link></li>
            <li><Link href="/products" className="hover:text-amber-200 transition-colors">HDMR Boards</Link></li>
            <li><Link href="/products" className="hover:text-amber-200 transition-colors">Teak Veneers</Link></li>
            <li><Link href="/products" className="hover:text-amber-200 transition-colors">Jagdamba Doors</Link></li>
            <li><Link href="/products" className="hover:text-amber-200 transition-colors">Cabinet Hardware</Link></li>
          </ul>
        </div>

        {/* Links Column 2: Partner Brands */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/80 font-semibold mb-6">Partner Brands</h4>
          <ul className="space-y-3 text-xs text-white/40 font-light font-sans">
            <li><Link href="/brands" className="hover:text-amber-200 transition-colors">Century Ply</Link></li>
            <li><Link href="/brands" className="hover:text-amber-200 transition-colors">Action TESA</Link></li>
            <li><Link href="/brands" className="hover:text-amber-200 transition-colors">Black Cobra</Link></li>
            <li><Link href="/brands" className="hover:text-amber-200 transition-colors">Virgo Laminates</Link></li>
            <li><Link href="/brands" className="hover:text-amber-200 transition-colors">HEPO & Mazix</Link></li>
          </ul>
        </div>

        {/* Links Column 3: Navigation */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/80 font-semibold mb-6">Heritage</h4>
          <ul className="space-y-3 text-xs text-white/40 font-light">
            <li><Link href="/about" className="hover:text-amber-200 transition-colors">About & Team</Link></li>
            <li><Link href="/projects" className="hover:text-amber-200 transition-colors">Project Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-amber-200 transition-colors">Knowledge Center</Link></li>
            <li><a href="/#contact" className="hover:text-amber-200 transition-colors">Request a Quote</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom row copyright links */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] tracking-widest text-white/30 uppercase font-light text-center md:text-left">
          © {new Date().getFullYear()} Jagdamba Timber Works & Plywood. 20+ Years of Showroom Heritage · 40+ Years of Master Woodworking.
        </div>
        <div className="flex gap-6 text-[10px] tracking-widest text-white/30 uppercase font-light">
          <Link href="/about" className="hover:text-amber-200 transition-colors">Privacy Policy</Link>
          <Link href="/about" className="hover:text-amber-200 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
