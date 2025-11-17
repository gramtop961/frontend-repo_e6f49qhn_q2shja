import React from 'react';

const HoursLocation = () => {
  return (
    <section id="oeffnungszeiten" className="bg-[#F8F4EC] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2A2A2A]">Öffnungszeiten & Lage</h2>
            <div className="mt-6 grid grid-cols-2 gap-6 text-[#4A4A4A]">
              <div>
                <p className="font-semibold text-[#3A2F29]">Montag – Freitag</p>
                <p>07:30 – 18:00</p>
              </div>
              <div>
                <p className="font-semibold text-[#3A2F29]">Samstag</p>
                <p>08:30 – 16:00</p>
              </div>
              <div>
                <p className="font-semibold text-[#3A2F29]">Sonntag</p>
                <p>08:30 – 14:00</p>
              </div>
              <div>
                <p className="font-semibold text-[#3A2F29]">Feiertage</p>
                <p>variabel</p>
              </div>
            </div>
            <div className="mt-8">
              <a href="tel:+491234567890" className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-[#1F1F1F] text-white hover:bg-black transition-colors">Jetzt anrufen</a>
            </div>
          </div>
          <div>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[#EAE1CF] shadow-lg">
              <iframe
                title="Karte Caffebar Hölderlin"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999950598016!2d2.2922926156744415!3d48.85837307928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzMwLjEiTiAywrAxNSczMS40IkU!5e0!3m2!1sde!2sde!4v1610000000000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursLocation;
