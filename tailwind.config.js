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
          // 5-Color Swatch Palette from User
          indigo: {
            DEFAULT: '#2C2A72',   // Swatch 1: Deep Midnight Indigo
            dark: '#1A1844',
          },
          royal: {
            DEFAULT: '#4D51E0',   // Swatch 2: Royal Iris Blue
            light: '#6366F1',
          },
          sky: {
            DEFAULT: '#518AEE',   // Swatch 3: Sky Azure Blue
          },
          cyan: {
            DEFAULT: '#34BAF7',   // Swatch 4: Electric Cyan / Aqua
          },
          violet: {
            DEFAULT: '#8A5EF6',   // Swatch 5: Electric Violet / Lilac
          },
          // Map purple aliases to Swatch 5 (Violet) & Swatch 2 (Royal)
          purple: {
            DEFAULT: '#8A5EF6',
            secondary: '#4D51E0',
            light: '#A78BFA',
          },
          // Map orange aliases to Swatch 4 (Cyan) to maintain contrast without non-palette colors
          orange: {
            DEFAULT: '#34BAF7',
            secondary: '#518AEE',
          },
          dark: {
            bg: '#0C0B18',        // Sleek dark background with deep indigo undertone
            card: '#15132B',      // Dark card with midnight indigo tint
            textMuted: '#94A3B8',
          }
        }
      },
    },
  },
  plugins: [],
};
