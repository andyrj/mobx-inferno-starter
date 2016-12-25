const path = require('path')
const AssetsPlugin = require('assets-webpack-plugin')
let assetsPluginInstance = new AssetsPlugin(
  {
    path: path.join(__dirname, '../dist/'),
    filename: 'assets.json'
  }
)

module.exports = {
  devtool: process.env.NODE_ENV !== 'production' ? '#source-map' : false,
  entry: {
    site: './src/client.js',
    vendor: [
      'history',
      'http-hash',
      'inferno',
      'inferno-component',
      'inferno-create-element',
      'inferno-mobx',
      'mobx'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].js'
  },
  plugins: [assetsPluginInstance],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
