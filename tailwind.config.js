/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        66: "66%",
        88: "88%",
        70: "70%",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "5xl": "48px",
      },
      colors: {
        darkblack: {
          300: "#747681",
          400: "#2A313C",
          500: "#23262B",
          600: "#1D1E24",
          700: "#151515",
        },
        success: {
          50: "#D9FBE6",
          100: "#B7FFD1",
          200: "#4ADE80",
          300: "#22C55E",
          400: "#16A34A",
        },
        warning: {
          100: "#FDE047",
          200: "#FACC15",
          300: "#EAB308",
        },
        error: {
          50: "#FCDEDE",
          100: "#FF7171",
          200: "#FF4747",
          300: "#DD3333",
        },
        bgray: {
          50: "#FAFAFA",
          100: "#F7FAFC",
          200: "#EDF2F7",
          300: "#E2E8F0",
          400: "#CBD5E0",
          500: "#A0AEC0",
          600: "#718096",
          700: "#4A5568",
          800: "#2D3748",
          900: "#1A202C",
        },
        orange: "#FF784B",
        bamber: {
          50: "#FFFBEB",
          100: "#FFC837",
          500: "#F6A723",
        },
        purple: "#936DFF",

        swatch_1: "#040404",
        swatch_2: "#0f5204",
        swatch_3: "#4e1802",
        swatch_4: "#3a4157",
        swatch_5: "#1e8c05",
        swatch_6: "#be3d05",
        swatch_7: "#81848c",
        swatch_8: "#54ad26",
        swatch_9: "white",
        swatch_1a: "#030408",
        swatch_2a: "#c0c0c0",
        swatch_3a: "#101b5f",
        swatch_4a: "#b13d58",
        swatch_5a: "#60313a",
        swatch_6a: "#d04e85",
        swatch_7a: "#0823a0",
      },
      backgroundImage: {
        "bgc-dark": "url('/assets/images/background/comming-soon-dark.svg')",
        "bgc-light": "url('/assets/images/background/coming-soon-bg.svg')",
        "notfound-dark": "url('/assets/images/background/404-dark.jpg')",
        "notfound-light": "url('/assets/images/background/404-bg.png')",
      },

      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },

  darkMode: "class",
  plugins: [nextui()],
};
