import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'lovable-dark': '#1a1a2e',
        'lovable-purple': '#6a0dad',
        'lovable-pink': '#ff69b4',
      },
    },
  },
  plugins: [],
}

export default config