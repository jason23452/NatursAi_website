/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // 确保启用 JIT 模式
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto_Sans_en: ['Noto Sans', 'sans-serif'],
        Noto_Sans_ch: ['Noto Sans TC', 'sans-serif'],
        Baloo_Thambi: ['Baloo Thambi', 'sans-serif'],
      },
      textColor:{
        '3F3F46' : '#3F3F46',
        '399983' : '#399983',
        '538aa2' : '#538aa2',
      },
      backgroundColor:{
        'c3c3c3' : '#c3c3c3',
        'fdfdfd' : '#fdfdfd',

      },

      fontSize:{
        '11px' : '0.5729vw',
        '12px' : '0.6250vw',
        '16px' : '0.8333vw',
        '20px' : '1.0417vw',
        '24px' : '1.2500vw',
        '32px' : '1.6667vw',

      },
      lineHeight:{
        '13.27px' : '0.6911vw',
        '14.48px' : '0.7542vw',
        '19.30px' : '1.0052vw',
        '20px':'1.0417vw',
        '22.60px' :'1.1771vw',
        '24.13px' :'1.2568vw',
        '28.95px' : '1.5078vw',
        '35px' : '1.8229vw',
        '35.52px' : '1.8500vw',
      },
      letterSpacing:{
        '1.65px' : '0.0859vw',
        '1.80px' : '0.0938vw',
        '2px' : '0.1042vw',
        '3px' : '0.1562vw',
        '4.80px':'0.2500vw',

      },
      backgroundImage:{
        bt_def: 'linear-gradient(to right, #399983, #538aa2)',
        bt_hover:'linear-gradient(to right, #3F3F46, #3F3F46)'
      }

    },
  },
  plugins: [],
}






