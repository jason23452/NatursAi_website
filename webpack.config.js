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
      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[hash][ext]', // 输出到 dist/assets 目录
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
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true, // 支持 React 路由
    port: 3000,
    open: true,
    compress: true,
    hot: true,
    historyApiFallback: true, // 支持 React SPA 路由
  },
};
