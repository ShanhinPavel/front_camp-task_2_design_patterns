const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['@babel/polyfill', './src/index.js']
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public/')
  },
  stats: 'errors-only',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
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
      template: path.join(__dirname, 'public/index.html')
    })
  ],
  devtool: 'cheap-source-map'
};
