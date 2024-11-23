const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
  const isDevelopment = env.mode === 'development';

  return {
    mode: env.mode,
    entry: './src/index.js', // Entry point for React project
    output: {
      chunkFilename: isDevelopment
        ? '[name].js'
        : '[name].[contenthash].js', // Dynamic module filenames
      filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true,
    },
    optimization: {
      minimize: true, // Enable minimization
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: 'all', // Split all chunks
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
      extensions: ['.js', '.jsx', '.gz'], // Supported extensions
      fallback: {
        stream: require.resolve('stream-browserify'),
      },
    },
    module: {
      rules: [
        // Load CSS with PostCSS and Tailwind CSS
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
        // Transpile JavaScript and JSX
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
        // Handle images and media
        {
          test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name].[hash][ext]',
          },
        },
        // Handle fonts
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
        // Handle gzipped files
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
      compress: true, // Enable compression
      onBeforeSetupMiddleware: (devServer) => {
        devServer.app.get('*.gz', (req, res, next) => {
          const fileType = req.path.split('.').slice(-2, -1)[0]; // Extract file type
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
          res.set('Content-Type', mimeTypes[fileType] || 'application/octet-stream');
          next();
        });
      },
    },
    plugins: [
      // Generate HTML file with favicon
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/images/logo512x512.png',
        inject: true,
      }),
      // Copy assets
      new CopyWebpackPlugin({
        patterns: [
          { from: './public/manifest.json', to: 'manifest.json' },
          { from: './public/images', to: 'images' },
        ],
      }),
      // Apply plugins for production
      ...(isDevelopment
        ? []
        : [
            new CompressionPlugin({
              algorithm: 'gzip',
              test: /\.(js|css|html|svg|ttf|mp4|woff2)$/i,
              threshold: 10240,
              minRatio: 0.8,
              filename: '[path][base].gz',
            }),
            new MiniCssExtractPlugin({
              filename: 'output.css',
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
