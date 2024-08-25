/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      fontFamily: {
        custom: ['Amiri', 'sans-serif'],
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #0ca84a, #4fb556, #74c264, #94cf73, #b1dc85, #aed783, #aad280, #a7cd7e, #85b567, #619e52, #3c883f, #00712d)'},
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors:{
        "customGreen":"#00712D",
        "customOrange":"#1A5319",
        "hoverGreen":"#A1DD70"
      }
    },
  },
  plugins: [],
}

