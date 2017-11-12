const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].bundle.css",
});

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }],
        // use style-loader in development
        fallback: "style-loader"
      })
    },
    {
      test: /\.(woff|woff2?(\?v=[0-9]\.[0-9]\.[0-9])?|eot|ttf|svg)$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
    },
    // the url-loader uses DataUrls.
    // the file-loader emits files.
    {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
      // loader: "url?limit=10000"
      use: "url-loader"
    },
    {
      test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      use: 'file-loader'
    },
    ]
  },
  plugins: [
    extractSass
  ]
};
