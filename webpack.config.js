var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src',
    output: {
        path: 'build',
        filename: 'bundle.js',
        libraryTarget: 'umd' // this is super important
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname + '/src',
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
                include: __dirname + '/src'
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};