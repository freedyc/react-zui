const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');
module.exports = {
    entry: [ 'babel-polyfill', path.join(__dirname, 'example/index.js') ],
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
                        presets: ['env', 'react', 'stage-0'],
                        plugins: [
                            'transform-es3-member-expression-literals',
                            'transform-es3-property-literals',
                            'transform-class-properties',
                            'transform-runtime',
                            'transform-react-constant-elements',
                            'transform-react-inline-elements',
                            'transform-react-jsx',
                            'transform-es2015-arrow-functions'
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: true
        })
    ]
}
