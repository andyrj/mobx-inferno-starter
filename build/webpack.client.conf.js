const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Purify = require('purifycss-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const base = require('./webpack.base.conf');

const config = Object.assign({}, base, {
  plugins: (base.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':
      JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new AssetsPlugin(
    {
      path: path.join(__dirname, '../dist/'),
      filename: 'assets.json'
    })
  ])
});

if (process.env.NODE_ENV === 'production') {
  config.module.rules.push({
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: '[name].[hash].[ext]'
    }
  });
  config.module.rules.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: 'css-loader'
    })
  });
  config.module.rules.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: `css-loader!sass-loader?includePaths[]=${path.resolve(__dirname, '../node_modules')}`
    })
  });
  config.plugins.push(
    new ExtractTextPlugin('styles.[hash].css'),
    // this is needed in webpack 2 for minifying CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new Purify({
      basePath: __dirname,
      paths: [
        'dist/vendor*.js',
        'dist/site*.js'
      ]
    })
  );
} else {
  config.performance = { hints: false };
  // inline all resources for hot module reload
  config.module.rules.push({
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'url-loader',
    options: {
      limit: 0,
      name: '[name].[hash].[ext]'
    }
  });
  // inline css into js for hot module reload
  config.module.rules.push({
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  });
  config.module.rules.push({
    test: /\.scss$/,
    loader: `style-loader!css-loader!sass-loader?includePaths[]=${path.resolve(__dirname, '../node_modules')}`
  });

}

module.exports = config;
