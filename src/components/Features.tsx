import React from 'react';

const Features: React.FC = () => {
  const features = [
    { title: 'Responsive Design', description: 'Looks great on any device' },
    { title: 'Fast Performance', description: 'Optimized for speed' },
    { title: 'User-Friendly', description: 'Intuitive and easy to use' },
  ];

  return (
    <div className="py-16 bg-gray-100 dark:bg-lovable-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-lovable-purple dark:text-white mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <h3 className="text-2xl font-semibold text-lovable-pink mb-4">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;