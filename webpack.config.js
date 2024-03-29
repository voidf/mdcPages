const autoprefixer = require('autoprefixer');
module.exports = [{
    entry: ['./shopcart/raw.scss', './shopcart/raw.js'],
    output: {
        // This is necessary for webpack to compile
        // But we never use style-bundle.js
        filename: 'shopcart.js',
    },
    mode: 'production',
    module: {
        rules: [{
                test: /\.scss$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'shopcart.css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: ['./node_modules']
                            }
                        }
                    },

                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env'],
                },
            }
        ]
    },
}];