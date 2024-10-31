/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],  // Add your content paths
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        Noto_Sans_en : ['Noto Sans', 'sans-serif'],
        Noto_Sans_ch : ['Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
