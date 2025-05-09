import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-lovable-purple dark:text-lovable-pink"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;