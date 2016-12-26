var webpack = require('webpack');
var path = require('path');

var testConfig = {
  name: 'test',
  entry: './test/browser-entry.js',
  externals: [
    'fs'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'null-loader'
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 8888
  },
  output: {
    publicPath: 'http://localhost:8888/test',
    path: path.join(__dirname, 'test'),
    filename: 'test.bundle.js'
  },
  plugins: [
    new webpack.IgnorePlugin(/jsdom$/),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = testConfig;
