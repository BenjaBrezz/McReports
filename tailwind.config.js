/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'mcd-red': '#da291c',
        'mcd-yellow': '#ffc72c',
        'mcd-red-dark': '#c7261c',
        'mcd-yellow-dark': '#e6b326',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'mcd': '0 4px 20px rgba(218, 41, 28, 0.15)',
        'mcd-dark': '0 4px 20px rgba(255, 199, 44, 0.15)',
      },
    },
  },
  plugins: [],
};