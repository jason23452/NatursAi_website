const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // React 项目入口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // 设置为根路径
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 支持解析 JS 和 JSX 文件
    fallback: {
      stream: require.resolve('stream-browserify'),
    },
  },
  module: {
    rules: [
      // 加載 CSS
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          },
        ],
      },
      // 加載 JavaScript 和 JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // 加載圖片和多媒體
      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[hash][ext]',
        },
      },
      // 加載字體
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // 字體文件
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]', // 輸出到 dist/fonts 資料夾
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 自定义模板
      inject: true, // 自动注入所有打包后的资源
      publicPath: '/', // 确保静态资源的路径正确
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  performance: {
    maxAssetSize: 100000,
    maxEntrypointSize: 400000,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // 静态文件目录
    },
    host: '0.0.0.0', // 接受外部连接
    port: 3000, // 开发服务器端口
    allowedHosts: 'all', // 禁用 Host 检查，解决 Invalid Host header 问题
    historyApiFallback: true, // React SPA 路由支持
    compress: true, // 启用 gzip 压缩
    open: true, // 自动打开浏览器
    hot: true, // 启用模块热替换
    watchFiles: ['tailwind.config.js', './src/**/*.{html,js,jsx,css}'], // 监控配置文件和相关目录
    client: {
      webSocketURL: {
        hostname: 'localhost', // WebSocket 绑定的主机名
        port: 3000, // WebSocket 使用的端口
      },
    },
    https: false, // 使用 HTTP，HTTPS 由 ngrok 提供
  },
};
