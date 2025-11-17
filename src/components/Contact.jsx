import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Danke! Wir melden uns so schnell wie möglich.');
    e.currentTarget.reset();
  };

  return (
    <section id="kontakt" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2A2A2A]">Kontakt & Reservierung</h2>
            <p className="mt-4 text-[#4A4A4A]">Ruf uns an, schreib eine E‑Mail oder nutze das Formular.</p>
            <div className="mt-6 space-y-2 text-[#3A2F29]">
              <p>Telefon: <a className="underline hover:opacity-80" href="tel:+491234567890">+49 1234 567890</a></p>
              <p>E‑Mail: <a className="underline hover:opacity-80" href="mailto:hallo@caffebar-hoelderlin.de">hallo@caffebar-hoelderlin.de</a></p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#FFFBF2] border border-[#EAE1CF] rounded-2xl p-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-[#6B6B6B]">Name</label>
                <input required className="mt-1 w-full rounded-xl border border-[#EAE1CF] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-sm text-[#6B6B6B]">E‑Mail</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-[#EAE1CF] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-sm text-[#6B6B6B]">Nachricht</label>
                <textarea rows="4" required className="mt-1 w-full rounded-xl border border-[#EAE1CF] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"></textarea>
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-[#1F1F1F] text-white hover:bg-black transition-colors">
                Senden
              </button>
              {status && <p className="text-[#3A2F29] mt-2">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
