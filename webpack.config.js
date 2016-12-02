var path = require('path');
module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/main.js')],
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }
        ]
    }, devtool: 'source-map'
};
