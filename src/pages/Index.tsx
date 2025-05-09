import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-lovable-dark transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <Features />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Index;