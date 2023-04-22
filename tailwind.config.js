/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["text-blue", "text-mint", "text-yellow", "from-grBlue", "from-grMint", "from-grYellow", "border-[#1a1a1a]"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(70% 70% at 0% 0%, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        card: "#111111",
      },
      colors: {
        gray: "#a2a2a2",
        yellow: "#FFC148",
        blue: "#48DFFF",
        mint: "#44FFC8",
        grBlue: "rgba(37,181,213,0.2)",
        grYellow: "rgba(255,193,72,0.2)",
        grMint: "rgba(68,255,200,0.2)",
      },
    },
  },
  plugins: [require("daisyui")],};
