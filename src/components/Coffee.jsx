import React from 'react';

const Coffee = () => {
  return (
    <section className="bg-[#F8F4EC] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2A2A2A]">Kaffee & Getränke</h2>
            <p className="mt-4 text-[#4A4A4A] leading-relaxed">
              Unser Espresso wird sorgfältig ausgewählt und schonend geröstet –
              für vollmundigen Geschmack mit feiner Crema. Ob Cappuccino,
              Latte oder Flat White: Wir bereiten jede Tasse mit Liebe und
              Präzision zu. Dazu gibt’s Tee, hausgemachte Limonaden und Säfte.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Espresso', 'Cappuccino', 'Flat White', 'Latte', 'Filterkaffee', 'Tee', 'Säfte'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white border border-[#EAE1CF] text-[#3A2F29] text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
              alt="Cappuccino mit feiner Crema"
              className="rounded-2xl shadow-2xl border border-[#E5DCCB]"
            />
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-[#A67C52]/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coffee;
