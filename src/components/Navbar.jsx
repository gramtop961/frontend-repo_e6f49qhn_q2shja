import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#ueber-uns', label: 'Über uns' },
    { href: '#speisekarte', label: 'Speisekarte' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#oeffnungszeiten', label: 'Öffnungszeiten' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-[rgba(255,255,255,0.6)] border-b border-[#EAE1CF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-[#3A2F29] tracking-wide">Caffebar Hölderlin</a>

          <nav className="hidden md:flex items-center gap-6 text-[#3A2F29]">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[#A67C52] transition-colors">{l.label}</a>
            ))}
            <a href="tel:+491234567890" className="ml-2 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-[#D4AF37] text-[#1A1A1A] hover:bg-[#C8A433]">Anrufen</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-[#EAE1CF] text-[#3A2F29]">
            <span className="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-[#EAE1CF]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex flex-col gap-3 text-[#3A2F29]">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="tel:+491234567890" className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-[#D4AF37] text-[#1A1A1A] hover:bg-[#C8A433]">Anrufen</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
