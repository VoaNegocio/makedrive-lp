import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans text-slate-50 selection:bg-brand-primary selection:text-white">
      <Header />

      <main>
        <Hero />
        <Benefits />
        <SocialProof />
        <CTAFinal />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
