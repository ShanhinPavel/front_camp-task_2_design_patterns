const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['@babel/polyfill', './src/index.js']
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/')
  },
  stats: 'errors-only',
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      base: {
        id: 'root'
      }
    })
  ],
  devtool: 'cheap-source-map'
};
