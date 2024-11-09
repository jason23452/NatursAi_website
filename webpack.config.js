const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
    },
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/, // 壓縮的文件類型
      threshold: 10240, // 壓縮最小的文件大小 (10KB)
      minRatio: 0.8, // 最小壓縮比率
    }),
  ],
};
