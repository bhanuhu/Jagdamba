import { useState } from 'react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export default function Gallery() {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'living', name: 'Living' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'bedroom', name: 'Bedroom' },
    { id: 'wardrobe', name: 'Wardrobe' },
    { id: 'dining', name: 'Dining' },
    { id: 'study', name: 'Study' },
  ];

  const items: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'Minimalist Walnut Living Space',
      category: 'living',
      image: 'https://images.unsplash.com/photo-1663811397207-418a92396ad5?auto=format&fit=crop&w=1800&q=85',
    },
    {
      id: 'gal-2',
      title: 'Contemporary Modular Kitchen',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1608626598070-2bb3615b6426?auto=format&fit=crop&w=1800&q=85',
    },
    {
      id: 'gal-3',
      title: 'Master Bedroom Cladded Wardrobes',
      category: 'bedroom',
      image: 'https://images.unsplash.com/photo-1656914871811-148cfdbb6ef4?auto=format&fit=crop&w=1800&q=85',
    },
    {
      id: 'gal-4',
      title: 'Luxury Walk-in Glass Wardrobe',
      category: 'wardrobe',
      image: 'https://images.unsplash.com/photo-1703922994719-fb2da3bfa977?auto=format&fit=crop&w=1800&q=85',
    },
    {
      id: 'gal-5',
      title: 'Warm Oak Dining Space',
      category: 'dining',
      image: 'https://images.unsplash.com/photo-1621963325509-9a1959c2343b?auto=format&fit=crop&w=1800&q=85',
    },
    {
      id: 'gal-6',
      title: 'Clean Minimal Floating Office',
      category: 'study',
      image: 'https://images.unsplash.com/photo-1709011399070-90601cac77c9?auto=format&fit=crop&w=1800&q=85',
    },
    {
      id: 'gal-7',
      title: 'Stained Ash Kitchen Veneers',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1608626597747-0d9b8884972c?auto=format&fit=crop&w=1800&q=85',
    },
    {
      id: 'gal-8',
      title: 'Veneered Dining Ceiling details',
      category: 'dining',
      image: 'https://images.unsplash.com/photo-1591814249948-0ed2395f3ddf?auto=format&fit=crop&w=1800&q=85',
    },
    {
      id: 'gal-9',
      title: 'Warm Charcoal Bedroom Inlays',
      category: 'bedroom',
      image: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=1800&q=85',
    },
  ];

  const [activeCat, setActiveCat] = useState('all');

  const filteredItems = activeCat === 'all'
    ? items
    : items.filter((item) => item.category === activeCat);

  return (
    <section id="gallery" className="relative min-h-screen bg-neutral-950 py-32 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium">
            09 · Showcase
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-white">
            Homes we've helped shape.
          </h2>
        </div>

        {/* Categories selector tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-12 max-w-2xl">
          {categories.map((cat) => {
            const isActive = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all font-semibold cursor-pointer ${
                  isActive
                    ? 'bg-amber-200 text-black shadow-lg shadow-amber-200/10'
                    : 'border border-white/10 text-white/60 hover:border-amber-200/40 hover:text-white bg-transparent'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Gallery grid panel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-4">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              {/* Photo Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:filter brightness-90 group-hover:brightness-75"
              />
              
              {/* Text Hover Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left pointer-events-none">
                <div className="text-[9px] tracking-[0.2em] uppercase text-amber-200/80 mb-2 font-semibold">
                  {item.category}
                </div>
                <div className="font-serif-display text-xl text-white font-light">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
