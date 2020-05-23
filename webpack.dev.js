const merge = require('webpack-merge');
const base = require('./webpack.config.js')
const path = require('path')

module.exports = merge(base, {
    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, "/public/"),
        host:'localhost',
        port: 8080
    }
})