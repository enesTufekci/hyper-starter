
const path = require('path');
const webpack = require('webpack')

const VENDOR_LIBS = [
  'hyperapp',
]

module.exports = {
  entry: {
    transaction: './src/transaction/index.js',
    vendor: VENDOR_LIBS
  },
  output: { filename: '[name].js',
            path: path.resolve(__dirname, 'public/hyper/') },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  },
};
