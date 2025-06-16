import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturedServices from './components/FeaturedServices';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <FeaturedServices />
        <Pricing />
        {/* You can add a Testimonials component here if needed */}
      </main>
      <Footer />
    </div>
  )
}

export default App