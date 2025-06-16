import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-arabic">
      <Header />
      <Hero />
      <Services />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;