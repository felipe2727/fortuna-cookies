/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        "background-light": "#f3f3f3",
        "background-dark": "#0a0a0a",
        "card-light": "#e8e5de",
        "card-dark": "#1a1a1a",
        "surface-light": "#ffffff",
        "surface-dark": "#171717",
        "text-light": "#1a1a1a",
        "text-dark": "#ededed",
        "accent": "#d4d4d4",
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'Courier Prime'", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0px",
      },
      keyframes: {
        'slideDown': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      boxShadow: {
        'brutalist': '4px 4px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}
