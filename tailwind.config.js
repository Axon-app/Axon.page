/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        slate: {
          950: '#020617',
        }
      },
      animation: {
        'pulse-custom': 'pulse 1.5s infinite',
        'scroll-horizontal': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translateX(calc(-50%))',
          },
        },
      },
    },
  },
  plugins: [],
}
