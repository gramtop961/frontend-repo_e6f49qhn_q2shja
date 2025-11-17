import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1521017432531-fbd92d1cf1d9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523906630133-f6934a1ab3a1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517004866645-8f6f08e1e2b1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1600&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section id="galerie" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#2A2A2A] mb-8">Galerie</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl border border-[#EAE1CF] bg-[#FFFBF2]">
              <img src={src} alt="Café Impression" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
