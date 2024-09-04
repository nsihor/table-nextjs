/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#624DE3',
        text_dark: '#000000',
        text_light: '#FFFFFF',
        text_grey: '#9E9E9E',
        bg_light: '#FFFFFF',
        bg_dark: '#1D1E42',
        t_row_secondary_light: '#F7F6FE',
        t_row_secondary_dark: '#26264F'
      },
      padding: {
        4: '16px',
      }
    },
  },
  plugins: [],
};
