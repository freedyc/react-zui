const path = require('path');
const config = require('./webpack.config.js');
const webpack = require('webpack');
config.plugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = Object.assign(config, {
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        host: '10.1.108.41'
    }
});

