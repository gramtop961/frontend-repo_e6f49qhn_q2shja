import React from 'react';

const About = () => {
  return (
    <section id="ueber-uns" className="bg-[#F8F4EC] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2A2A2A]">Über uns</h2>
            <p className="mt-4 text-[#4A4A4A] leading-relaxed">
              Willkommen in der Caffebar Hölderlin – deinem gemütlichen Café mit
              warmem Vintage-Charme. Wir lieben guten Kaffee, frische Produkte
              und entspannte Momente. Bei uns trifft dunkles Holz auf zarte
              Creme-Töne, Kronleuchter auf urbanes Café-Gefühl – immer
              freundlich, persönlich und einfach lecker.
            </p>
            <p className="mt-4 text-[#4A4A4A] leading-relaxed">
              Qualität steht bei uns an erster Stelle: frisch belegte Brötchen,
              hausgemachte Snacks, handwerklich gerösteter Espresso und Kuchen,
              der nach Heimat schmeckt. Nimm dir Zeit – wir kümmern uns um den
              Rest.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop"
              alt="Café Innenraum mit warmem Licht"
              className="rounded-2xl shadow-2xl border border-[#E5DCCB]"
            />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#D4AF37]/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
