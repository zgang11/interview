// 链接：https://mp.weixin.qq.com/s/pwynolH0pTtT38f-xBUsXw   Webpack5 之路（优化篇）
const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// 编译进度条
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
// 编译速度分析
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// 打包体积分析
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// 热更新
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/**  四、减小打包体积  */
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const config = {
    context: path.resolve(__dirname, '../'),
    entry: './src/index.js',
    // output: {
    //     path: path.resolve(__dirname, '../dist')
    // },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.ejs',
            filename: 'index.html'
        }),
        new ProgressBarPlugin({
            format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`
        }),
        new SpeedMeasurePlugin(),
        // new BundleAnalyzerPlugin(),
        new ReactRefreshWebpackPlugin(),
        new webpack.optimize.SplitChunksPlugin({
            chunks: 'all',
            // 重复打包问题
            cacheGroups: {
                vendors: { // node_modules里的代码
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    // name: 'vendors', 一定不要定义固定的name
                    priority: 10, // 优先级
                    enforce: true
                }
            }
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            // modules: true,
                        }
                    },
                ],
                exclude: /\.module\.css$/,
            },
            {
                test: /\.(js|jsx)/,
                use: 'babel-loader',
                exclude: /\.module\.js$/,
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1, ///在css-loader前应用的loader的数目, 默认为0
                            modules: true, //开启css-modules模式, 默认值为flase
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
                exclude: /(node_modules)|(global\.less)/,
            },

        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    optimization: {
        minimizer: [new TerserPlugin({
            parallel: 4,
            terserOptions: {
                parse: {
                    ecma: 8,
                },
                compress: {
                    ecma: 5,
                    warnings: false,
                    comparisons: false,
                    inline: 2,
                },
                mangle: {
                    safari10: true,
                },
                output: {
                    ecma: 5,
                    comments: false,
                    ascii_only: true,
                },
            },

        }), new CssMinimizerPlugin({
            parallel: 4
        })]
    }
}

module.exports = config