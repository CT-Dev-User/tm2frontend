// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {  
    extend: {},
    screens: {
      sm: { max: "480px" },
      md: { max: "768px" },
      lg: { min: "769px", max: "1024px" },
      xl: { min: "1025px", max: "1200px" },
      "2xl": { min: "1201px" },
    },
  },
  plugins: [],
};
