const webpack = require('webpack')
const Merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = Merge.merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js', //打包后的文件名
    path: path.resolve(__dirname, '../dist'),
    //打包后文件名的路径，因为打包后最后要考给别人的，最好用绝对路径，但是别人的路径不一定给你路径是一样的所以要借鉴一个方法path
    //无论在路径，获取的都是绝对路径
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION_ENV: JSON.stringify(true),
    }),
  ],
})
