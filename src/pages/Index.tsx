import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-lovable-dark">
      <Hero />
      <Features />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Index;