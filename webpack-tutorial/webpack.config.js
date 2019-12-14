
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
    entry: './main.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {test: /\.ts$/, use: 'awesome-typescript-loader'},
            {test: /\.scss$/, use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader'
                })}
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
},{
    entry: './const.js',
    output: {
        filename: 'app2.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.ts$/, use: 'awesome-typescript-loader'},
            {test: /\.scss$/, use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader'
                })}
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
}
]