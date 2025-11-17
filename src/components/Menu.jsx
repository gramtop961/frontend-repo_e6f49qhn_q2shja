import React from 'react';

const Menu = () => {
  return (
    <section id="speisekarte" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2A2A2A]">
            Frühstück & Snacks
          </h2>
          <p className="mt-2 text-[#6B6B6B]">Alles frisch – täglich mit Liebe zubereitet.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-[#EAE1CF] p-6 bg-[#FFFBF2]">
            <h3 className="text-xl font-semibold text-[#3A2F29]">Belegte Brötchen & Panini</h3>
            <ul className="mt-3 space-y-2 text-[#534C44]">
              <li>Frischkäse & Kräuter</li>
              <li>Tomate | Mozzarella | Basilikum</li>
              <li>Prosciutto | Rucola | Parmesan</li>
              <li>Hähnchen | Pesto | Grana</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#EAE1CF] p-6 bg-[#FFFBF2]">
            <h3 className="text-xl font-semibold text-[#3A2F29]">Croissants & Brezeln</h3>
            <ul className="mt-3 space-y-2 text-[#534C44]">
              <li>Buttercroissant</li>
              <li>Schokocroissant</li>
              <li>Frisch belegte Brezeln</li>
              <li>Kleine süße Teilchen</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#EAE1CF] p-6 bg-[#FFFBF2]">
            <h3 className="text-xl font-semibold text-[#3A2F29]">Kaffee & Getränke</h3>
            <ul className="mt-3 space-y-2 text-[#534C44]">
              <li>Espresso | Doppio</li>
              <li>Cappuccino | Flat White | Latte</li>
              <li>Filterkaffee</li>
              <li>Tee-Auswahl, Säfte & Schorlen</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#EAE1CF] p-6 bg-[#FFFBF2]">
            <h3 className="text-xl font-semibold text-[#3A2F29]">Kuchen & Sweets</h3>
            <ul className="mt-3 space-y-2 text-[#534C44]">
              <li>Hausgemachte Kuchen (wechselnd)</li>
              <li>Brownies & Cookies</li>
              <li>Frische Tartes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
