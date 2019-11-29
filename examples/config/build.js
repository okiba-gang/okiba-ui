const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js')
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
            presets: ['@babel/preset-env'],
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
    new CleanWebpackPlugin()
  ],
  mode: 'production'
}