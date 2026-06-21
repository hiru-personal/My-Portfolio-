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
        ba: {
          pink: {
            DEFAULT: '#FFD6E7',
            light: '#FFF0F6',
            dark: '#FCA5D9',
          },
          blue: {
            DEFAULT: '#5B8DEF',
            light: '#84ACFA',
            dark: '#2A63D2',
          },
          dark: '#111111',
          light: '#F5F7FA',
          white: '#FFFFFF',
          slate: {
            800: '#1e293b',
            900: '#0f172a',
          }
        }
      },
    },
  },
  plugins: [],
};
