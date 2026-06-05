/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#07110C',
        surface: '#0E1A14',
        border: '#1C2B23',
        gold: {
          light: '#E5C492',
          DEFAULT: '#D4A76A',
          dark: '#B08447',
        },
        tropical: {
          light: '#52B788',
          DEFAULT: '#40916C',
          dark: '#2D6A4F',
        },
        text: '#F7F2E8',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to bottom, #07110C, #0E1A14)',
      },
    },
  },
  plugins: [],
}
