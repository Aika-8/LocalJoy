/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": "1536px",
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
    },
    extend: {
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "almost-black": "#111827",
        "background-color": "#FAF9F8",
        "secondary-text": "#f9fafb",
        "back-slider": "#059669",
      },
    },
  },
  plugins: [],
};
