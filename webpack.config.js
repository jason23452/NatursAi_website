const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', // 區分開發和生產模式
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'bundle.[contenthash].js', // 輸出文件帶哈希值
    path: path.resolve(__dirname, 'dist'), // 輸出目錄
    publicPath: '/', // 靜態資源的根路徑
    clean: true, // 每次打包清理輸出目錄
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 支援的文件類型
  },
  module: {
    rules: [
      // 加載 CSS 文件
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
      },
      // 加載 JavaScript 和 JSX 文件
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      // 加載圖片和多媒體文件
      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[hash][ext]',
        },
      },
      // 加載字體文件
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // 提取公共代碼
    },
    runtimeChunk: 'single', // 提取 runtime 文件
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // 使用多線程加速
        terserOptions: {
          compress: {
            drop_console: true, // 移除 console.log
          },
        },
      }),
      new CssMinimizerPlugin(), // 壓縮 CSS 文件
    ],
  },
  plugins: [
    // 自動生成 HTML 文件並插入資源
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true, // 自動注入資源
    }),
    // 壓縮資源文件（Gzip）
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg|woff|woff2|eot|ttf|otf)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    // 分析打包結果
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.NODE_ENV === 'production' ? 'static' : 'disabled',
      openAnalyzer: false,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // 靜態文件目錄
    },
    host: '0.0.0.0', // 接受所有外部連接
    port: 3000, // 開發伺服器的端口
    allowedHosts: 'all', // 禁用 Host 檢查
    historyApiFallback: true, // 支持 SPA 路由
    compress: true, // 啟用 gzip 壓縮
    open: true, // 自動打開瀏覽器
    hot: true, // 啟用模塊熱替換
    watchFiles: ['./src/**/*.{html,js,jsx}', 'tailwind.config.js'], // 監控文件變化
    client: {
      logging: 'warn', // 簡化瀏覽器控制台日誌
    },
  },
};
