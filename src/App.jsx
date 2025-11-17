import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Coffee from './components/Coffee';
import Gallery from './components/Gallery';
import HoursLocation from './components/HoursLocation';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1F1F1F]">
      {/* SEO basics */}
      <div className="sr-only">
        <h1>Caffebar Hölderlin – Café in Musterstadt | Frühstück, Cappuccino & Snacks</h1>
        <p>
          Dein gemütliches Café für Frühstück, Cappuccino, Panini, Croissants und Kuchen. Viel
          Weißraum, warmes Design, freundlicher Service. Jetzt besuchen!
        </p>
      </div>

      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Menu />
        <Coffee />
        <Gallery />
        <HoursLocation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
