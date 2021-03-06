const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'example/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'example.js'
    },
    resolve: {
        modules: [
            'node_modules'
        ],
        alias: {
            'src': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env',
                            'react'

                        ],
                        plugins: [
                            'transform-es3-property-literals'
                        ]
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: true
        }),
        new UglifyWebpackPlugin({
            uglifyOptions: {
                ie8: true
            }
        })
    ]
}
