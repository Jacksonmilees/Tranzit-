/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#39FF14', // Neon green
        secondary: '#0099ff', // Tech blue
        background: '#000000',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
        greyish: '#f4f4f4',
      },
      boxShadow: {
        glowGreen: '0 0 10px 2px #39FF14',
        glowBlue: '0 0 15px 3px #0099ff',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
