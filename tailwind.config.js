/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        sh: "20px 30px 30px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
