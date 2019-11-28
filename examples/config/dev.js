const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const srcPath = path.resolve(__dirname, '../src')
const srcFiles = fs.readdirSync(srcPath)
const srcEntries = srcFiles.reduce((entries, entry) => {
  const name = entry.replace('.js', '')
  entries[name] = [
    `webpack-hot-middleware/client?name=${name}`,
    path.resolve(__dirname, '../src', entry)
  ]
  return entries
}, {})

module.exports = {
  entry: {
    ...srcEntries
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
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development'
}