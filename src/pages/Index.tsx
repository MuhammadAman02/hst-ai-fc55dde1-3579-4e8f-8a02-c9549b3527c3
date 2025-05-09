import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl font-bold text-custom-text mb-4">
          Hello World
        </h1>
        <p className="text-xl text-custom-text opacity-75">
          Welcome to your new React application
        </p>
      </div>
    </div>
  );
};

export default Index;