var path = require('path');

module.exports = {
  entry: {
    'index': './src/index.ts'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),

  },
  resolve: {
    extensions: ["", ".ts", ".js"],
  },
  devtool: "eval-source-map",
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  }
};
