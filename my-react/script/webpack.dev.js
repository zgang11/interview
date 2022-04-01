const webpack = require('webpack')
const path = require('path')
const Merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = Merge.merge(common,{
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: path.resolve(__dirname, '../dist'),
        port:8877, // 端口号
        host: 'localhost',
        historyApiFallback: true,
        // disableHostCheck: true,
        compress:true, //启动gzip压缩
        open:true, //自动打开浏览器
        // progress:true, //显示打包进度条
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
    },
    plugins:[
        new webpack.DefinePlugin({
            PRODUCTION_ENV:JSON.stringify(false)
        })
    ]
})