/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('https://www.transparenttextures.com/patterns/purty-wood.png')",
      },
      colors: {
        'custom-bg-color': '#fffcfc',
      },
      fontFamily: {
        'rubik-vinyl': ['Rubik Vinyl', 'serif'],
        'NeuePlak': ['"Neue Plak"', 'Arial', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
        raleway: ['Raleway','serif'],
        arvo: ['Arvo', 'serif'],
      },
      fontWeight: {
        'raleway-400': 400,
        'raleway-700': 700,
        arvoRegular: '400',
        arvoBold: '700',
      },
      screens: {
        'xs': '320px',
      },
      animation: {
        "left-to-right": "left-to-right 30s linear infinite",
        "right-to-left": "right-to-left 30s linear infinite",
      },
      keyframes: {
        "left-to-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "right-to-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.font-optical-sizing': {
          'font-optical-sizing': 'auto',
        },
      });
    },
  ],
};
