const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env) => {
  const isDevelopment = env.mode === 'development';
  // const isDevelopment = env.mode === 'production';

  return {
    mode: env.mode,
    entry: './src/index.js', // React 项目入口
    output: {
      chunkFilename: isDevelopment
        ? '[name].js'
        : '[name].[contenthash].js', // 動態加載模塊文件名
      filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true,
    },
    optimization: {
      minimize: true, // 啟用壓縮
      minimizer: [new TerserPlugin()], // 使用 TerserPlugin 壓縮
      splitChunks: {
        chunks: 'all', // 對所有代碼進行拆分
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },

    resolve: {
      extensions: ['.js', '.jsx'], // 支持解析 JS 和 JSX 文件
      fallback: {
        stream: require.resolve('stream-browserify'),
      },
    },
    module: {
      rules: [
        // 加载 CSS
        {
          test: /\.css$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
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
        // 加载 JavaScript 和 JSX
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
        // 加载图片和多媒体
        {
          test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name].[hash][ext]',
          },
        },
        // 加载字体
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
        {
          test: /\.gz$/,
          type: 'asset/resource',
          generator: {
            filename: 'compressed/[name].[hash][ext]',
          },
        },

        
      ],
    },
    devServer: {
      static: path.join(__dirname, 'dist'),
      allowedHosts: 'all',
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
      compress: true, // 啟用壓縮
      onBeforeSetupMiddleware: (devServer) => {
        devServer.app.get('*.gz', (req, res, next) => {
          const fileType = req.path.split('.').slice(-2, -1)[0]; // 提取文件類型
          const mimeTypes = {
            js: 'application/javascript',
            css: 'text/css',
            html: 'text/html',
            svg: 'image/svg+xml',
            ttf: 'font/ttf',
            mp4: 'video/mp4',
            webm: 'video/webm',
            woff2: 'font/woff2',
            json: 'application/json',
          };
          res.set('Content-Encoding', 'gzip');
          res.set('Content-Type', mimeTypes[fileType] || 'application/octet-stream'); // 默認二進制文件
          next();
        });
      },
    },
    plugins: [
    


      new HtmlWebpackPlugin({
        template: './public/index.html', // 自定义模板
        favicon: './public/images/logo512x512.png',

        inject: true,
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: './public/manifest.json', to: 'manifest.json' }, // 複製 manifest.json
          { from: './public/images', to: 'images' }, // 複製圖片資料夾
        ],
      }),
      


      ...(isDevelopment
        ? []
        : [
          new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css|html|svg|ttf|mp4|woff2)$/,
            threshold: 10240,
            minRatio: 0.8,
            filename: '[path][base].gz', // 壓縮後的文件名稱，保留同目錄結構
          }),
          new MiniCssExtractPlugin({
            filename: 'output.css',
          }),
        ]),
        

    ],
    resolve: {
      extensions: ['.js', '.jsx', '.gz'], // 添加 .gz 作為可解析的擴展名
    },
    performance: {
      maxAssetSize: 100000,
      maxEntrypointSize: 400000,
    },
    devtool: isDevelopment ? 'source-map' : false,
  };
};
