import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-lovable-dark text-gray-800 dark:text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2023 Lovable Clone. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-lovable-pink">Twitter</a>
            <a href="#" className="hover:text-lovable-pink">LinkedIn</a>
            <a href="#" className="hover:text-lovable-pink">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;