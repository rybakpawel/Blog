/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["text-black", "text-error", "text-success", "border-error"],
  theme: {
    extend: {
      colors: {
        primary: "#105775",
        secondary: "#23B6F5",
        black: "#1A1D1E",
        error: "#C23508",
        success: "#11C235",
        facebookBackground: "#4267B2",
        linkedinBackground: "#0E76A8",
        githubBackground: "#444444",
      },
      fontSize: {
        xs: "10px",
        sm: "13px",
        base: "16px",
        lg: "20px",
        xl: "25px",
        "2xl": "31px",
        "3xl": "39px",
        "4xl": "49px",
      },
      opacity: {
        75: ".75",
        50: ".5",
        25: ".25",
        10: ".1",
        5: ".05",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
