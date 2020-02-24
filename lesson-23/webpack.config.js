const webpack = require('webpack');
// const path = require('path');
// webpack.config.js
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  }
};
