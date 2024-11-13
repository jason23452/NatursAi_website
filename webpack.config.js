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
            filename: 'fonts/[name].[hash][ext]',
          },
        },
      ],
    },
    devServer: {
      static: path.join(__dirname, 'dist'),
      allowedHosts: 'all', // 允许所有 Host 访问
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true, // React SPA 路由支持
    },
    plugins: [
      // new BundleAnalyzerPlugin({
      //   analyzerMode: 'static', // 设置为 'static' 生成 HTML 文件
      //   reportFilename: 'bundle-report.html', // 定义生成的报告文件名称
      //   openAnalyzer: true, // 自动打开生成的报告文件
      //   generateStatsFile: false, // 不需要生成 stats.json 文件
      // }),
      // new FaviconsWebpackPlugin({
      //   logo: './public/images/logo.png', // 指定你的 512x512 PNG 图标路径
      //   inject: true, // 自动注入到 HTML 文件
      //   favicons: {
      //     appName: 'NatursAi',
      //     appDescription: 'abc好棒棒!',
      //     developerName: 'Your Name',
      //     developerURL: null, // 开发者链接
      //     background: '#ffffff', // 启动画面背景色
      //     theme_color: '#000000', // 浏览器主题颜色
      //     icons: {
      //       android: true, // Android 图标
      //       appleIcon: true, // Apple Touch 图标
      //       favicons: true, // 浏览器 favicon
      //       appleStartup: true, // Apple 启动画面图标
      //       windows: true, // Windows 磁贴图标
      //       yandex: false, // 不生成 Yandex 图标
      //     },
      //   },
      // }),
      



      new HtmlWebpackPlugin({
        template: './public/index.html', // 自定义模板
        favicon:'./public/images/logo512x512.png',
        
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
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
          }),
          new MiniCssExtractPlugin({
            filename:'output.css',
          }),
        ]),
    ],
    performance: {
      maxAssetSize: 100000,
      maxEntrypointSize: 400000,
    },
    devtool: isDevelopment ? 'source-map' : false,
  };
};
