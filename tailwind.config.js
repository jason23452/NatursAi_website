/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // 确保启用 JIT 模式
  content: [
    './src/**/*.{html,js,jsx,css,ts,tsx}', // 添加 ts/tsx 文件支持（如果需要）
    './public/**/*.html',
    './src/css/**/*.{css}', // 包含所有 CSS 文件
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        Noto_Sans_en: ['Noto Sans', 'sans-serif'],
        Noto_Sans_ch: ['Noto Sans TC', 'sans-serif'],
        Baloo_Thambi: ['Baloo Thambi', 'sans-serif'],
      },


    },
  },
  plugins: [],
}






