const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['webpack-hot-middleware/client', path.resolve(__dirname, '../src/main.js')]
  },
  output: {
    path: path.resolve(__dirname, '../static'),
    publicPath: path.resolve(__dirname, '..'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  debug: true
                }
              ]
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '../../packages'), 'node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  devtool: 'inline-module-source-map'
}