const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractVendorCss = new ExtractTextPlugin('css/vendor.css');
const extractSass = new ExtractTextPlugin('css/main.css');
const extractFonts = new ExtractTextPlugin('fonts/')

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
    rules: [{
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
      loader: 'file-loader?name=../fonts/[name].[ext]'
    }]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    extractVendorCss,
    extractSass
  ]
};

module.exports = config;
