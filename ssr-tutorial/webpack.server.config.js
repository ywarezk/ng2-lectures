
const path = require('path');
module.exports = {
  entry: './server.ts',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, './')
  },
  target: 'node',
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.(html|css)$/, use: 'raw-loader', exclude: /\.async\.(html|css)$/
      },
      {
        test: /\.async\.(html|css)$/,
        loaders: ['file?name=[name].[hash].[ext]', 'extract']
      }
    ]
  }
}
