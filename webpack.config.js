'use strict';

var webpack = require('webpack');
var path    = require('path');

var env = process.env.NODE_ENV;
var config = {
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel-loader?presets[]=es2015&plugins[]=mjsx&cacheDirectory'],
        exclude: /node_modules/
      }
    ]
  },
  entry: {
    'index': 'index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  resolve: {
    extensions: ['', '.json', '.js', '.jsx'],
    modulesDirectories: ['node_modules', __dirname]
  },
  externals: {
    'jquery': 'jQuery'
  }
};
module.exports = config;
