const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractVendorCss = new ExtractTextPlugin('vendor.css');
const extractSass = new ExtractTextPlugin('main.css');

const config = {
  entry: {
    main: './js/app.js',
    vendor: './js/vendor.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['file-loader?name=[path][name].[ext]']
      },
      {
        test: /\.css$/,
        use: extractVendorCss.extract({
          fallback: 'style-loader',
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[name].[ext]'
      }]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    extractVendorCss,
    extractSass
  ]
};

module.exports = config;
