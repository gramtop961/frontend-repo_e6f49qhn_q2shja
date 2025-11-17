import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative h-[70vh] sm:h-[75vh] w-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[rgba(20,20,20,0.45)]" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#F8F4EC] leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
                Caffebar Hölderlin
              </h1>
              <p className="mt-4 sm:mt-6 text-lg sm:text-2xl text-[#F1E9D2]">
                Super leckeres Frühstück und bester Cappuccino in town.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#speisekarte"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-[#A67C52] text-white hover:bg-[#8F6843] transition-colors shadow-lg shadow-black/20"
                >
                  Speisekarte
                </a>
                <a
                  href="tel:+491234567890"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-[#D4AF37] text-[#1A1A1A] hover:bg-[#C8A433] transition-colors shadow-lg shadow-black/20"
                >
                  Anrufen
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Vintage frame gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
