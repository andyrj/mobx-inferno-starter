const path = require('path');

module.exports = {
  devtool: process.env.NODE_ENV !== 'production' ? '#source-map' : false,
  entry: {
    site: './src/client.jsx',
    vendor: [
      'history',
      'http-hash',
      'inferno',
      'inferno-component',
      'inferno-create-class',
      'inferno-create-element',
      'inferno-mobx',
      'mobx'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: process.env.NODE_ENV === 'production' ?
      '[name].[hash].js' : '[name].js'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: '/node_modules\/(?![' +
        'material-components-web|' +
        '@material/drawer' +
        '])/'
      }
    ]
  }
};
