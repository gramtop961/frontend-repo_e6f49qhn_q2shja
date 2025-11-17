import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#EDE6D6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-semibold">Caffebar Hölderlin</p>
            <p className="mt-2 text-sm text-[#C8BA9D]">Café • Frühstück • Cappuccino</p>
          </div>
          <div>
            <p className="font-semibold">Adresse</p>
            <p className="mt-2 text-[#D6CEBD]">Hölderlinstraße 12<br/>12345 Musterstadt</p>
          </div>
          <div>
            <p className="font-semibold">Kontakt</p>
            <p className="mt-2 text-[#D6CEBD]">
              Tel: <a href="tel:+491234567890" className="underline">+49 1234 567890</a><br/>
              E‑Mail: <a href="mailto:hallo@caffebar-hoelderlin.de" className="underline">hallo@caffebar-hoelderlin.de</a>
            </p>
          </div>
        </div>
        <div className="pt-6 mt-6 border-t border-[#2B2B2B] text-sm text-[#9B917B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Caffebar Hölderlin. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
