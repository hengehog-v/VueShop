const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename:'main.js', 
    },
    module: {
        rules: [
            {test: /\.less$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'less-loader'}]
            },
        ]
    }
}