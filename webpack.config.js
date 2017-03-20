'use strict';

const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const figlet = require('figlet');

require('babel-polyfill');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

figlet.text('ARventure Time', {
    font: 'speed',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Oh no. FIGLET BROKE! APP IS DEAD FOREVER.');
        console.dir(err);
        return;
    }
    console.log(data);
});

const config = {
  entry: ['babel-polyfill', APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    noParse: [
      /node_modules\/aframe\/dist\/aframe.js/, // for aframe from NPM
      /node_modules\/cannon\/build\/cannon.js/, // for aframe-extras from NPM
    ],
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        use: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 1337
  }
};

module.exports = config;
