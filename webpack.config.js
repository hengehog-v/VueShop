const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename:'main.js', 
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js',}
    },

    module: {
        rules: [
            {test: /\.less$/,
            use: [
                'vue-style-loader',
                { loader: 'css-loader',
                    options: {
                        modules: true,
                    }
                },
                { loader: 'less-loader'}]
            },

            {   test: /\.vue$/,
                loader: 'vue-loader',
            },

        ]
    },

    plugins: [
        new VueLoaderPlugin(),
    ]
}