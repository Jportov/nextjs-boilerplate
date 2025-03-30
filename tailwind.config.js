/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // isso ativa o modo escuro via classe
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // pode customizar cores aqui se quiser
        },
      },
    },
    plugins: [],
  };
  