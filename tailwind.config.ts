import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // If you use an app directory
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins'],
      },
    },
  },
  plugins: [],
};

export default config;
