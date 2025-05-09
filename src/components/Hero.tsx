import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-500 dark:from-purple-900 dark:to-pink-800 min-h-screen flex items-center justify-center text-white">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl font-bold mb-4">
          Welcome to Lovable Clone
        </h1>
        <p className="text-2xl mb-8">
          Creating beautiful web experiences
        </p>
        <button className="bg-white text-lovable-purple dark:bg-lovable-purple dark:text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;