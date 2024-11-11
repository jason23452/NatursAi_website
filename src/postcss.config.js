module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production'
      ? require('@fullhuman/postcss-purgecss')({
          content: ['./src/**/*.{js,jsx,ts,tsx,html}'], // 指定需要掃描的文件
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [], // 提取 Tailwind CSS 類名
          safelist: [
            /^bg-/, // 保留以 bg- 開頭的類名
            /^text-/, // 保留以 text- 開頭的類名
            /^hover:/, // 保留 hover: 前綴類名
            'body', // 例外類名
          ],
        })
      : undefined,
  ],
};
