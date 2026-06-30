/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: {
            DEFAULT: '#A855F7',
            secondary: '#C084FC',
          },
          orange: {
            DEFAULT: '#F59E0B',
          },
          dark: {
            bg: '#0F0F14',
            card: '#171722',
            textMuted: '#B8B8C5',
          }
        }
      },
    },
  },
  plugins: [],
};
