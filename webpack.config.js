var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    data = require('./data.js'),
    path = require('path');

module.exports = {
    entry: './src/router',
    output: {
        path: './build',
        filename: 'bundle.js',
        libraryTarget: 'umd',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname,'src'),
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
                include: path.join(__dirname,'src')
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new StaticSiteGeneratorPlugin('main', data.routes, data),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/'
        })
    ]
};
