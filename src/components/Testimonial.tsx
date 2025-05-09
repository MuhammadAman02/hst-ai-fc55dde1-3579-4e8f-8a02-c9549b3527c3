import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <div className="py-16 bg-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="text-2xl italic mb-4">
            "Lovable Clone has transformed our online presence. Their design is not just beautiful, it's effective!"
          </p>
          <p className="font-semibold">- Jane Doe, CEO of Awesome Corp</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;