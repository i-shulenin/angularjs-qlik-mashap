const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  entry: path.join(__dirname, '..', 'src', 'index.js'),
  output: path.join(__dirname, '..', 'dist'),
  public: '/',
  root: path.resolve(__dirname, '..'),
  src: path.join(__dirname, '..', 'src'),
  template: path.join(__dirname, '..', 'src', 'public', 'index.html'),
};

const output = {
  filename: '[name].js',
  path: paths.output,
  publicPath: paths.public,
};

const config = {
  entry: paths.entry,
  module: {
    rules: [
    ],
  },
  output,
  paths,
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.template,
      filename: 'index.html',
      hash: true,
    }),
  ],
};

module.exports = config;
