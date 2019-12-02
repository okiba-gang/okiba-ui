const path = require('path')
const webpack = require('webpack')
const config = require('../index')

module.exports = {
  entry: {
    app: ['webpack-hot-middleware/client', config.paths.entry]
  },
  output: {
    path: config.paths.dev.output,
    publicPath: config.paths.dev.publicAssets,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [/node_modules\/@okiba\/.*/, config.paths.packages, config.paths.src],
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
      },
      {
        test: /\.(s)?css$/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    modules: [config.paths.packages, 'node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  devtool: 'inline-module-source-map'
}
