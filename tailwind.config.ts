/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        maxWidth: {
          '8xl': '85rem',
        },
        fontFamily: {
          sans: ["Noto Sans JP", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
          serif: ["Noto Serif JP", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
          display: ["Cormorant", "serif"],
        },
        colors: {
          'surface-1': '#D7D5D1',
          'surface-2': '#E5E3D9',
          'surface-3': '#282A2C',
          'surface-4': '#FFFFFF',
          'text-1': '#282A2C',
          'text-2': '#E5E3D9',
          primary: '#4ECDC4',
          'primary-alt': '#282A2C',
          // Project semantic colors
          brand: '#282A2C',
          'brand-hover': '#1A2530',
          paper: '#282A2C',
          accent: '#282A2C',
          footer: '#282A2C',
        },
      },
    },
    plugins: [],
  }
