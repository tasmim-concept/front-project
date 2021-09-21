const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const cssLoaders = [
    {
        loader: 'css-loader',
        options: {
            importLoaders: 1
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    require('autoprefixer'),
                    require('cssnano')
                ]
            }
        }
    },
    'sass-loader'
]

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: ['./js/index.jsx', './css/style.scss']
        // admin: ['./js/admin.jsx'] //e.g. to add others files
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    output: {
        path: path.resolve(__dirname, '../public/assets'),
        publicPath: '/assets/',
        filename: 'js/[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: '/(node_modules|bower_components)/',
                use: ['react-hot-loader/webpack', 'babel-loader']
            },
            {
                test: /\.(woff2?|ttf|otf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext]'
                }
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                type: 'asset',
                generator: {
                    filename: 'img/[name][hash:8][ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new ESLintPlugin()
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../public'),
        },
        compress: false,
        port: 3000,
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: 'index.html' }
            ]
        },
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: false
            },
            progress: false
        }
    },
    devtool: 'eval-cheap-module-source-map'
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.plugins.push(new webpack.HotModuleReplacementPlugin())
        config.module.rules.push({
            test: /\.(sc|c|sa)ss$/i,
            use: ['style-loader', ...cssLoaders]
        })
    }

    if (argv.mode === 'production') {
        config.module.rules.push({
            test: /\.(sc|c|sa)ss$/i,
            use: [ // order important
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                },
                ...cssLoaders
            ]
        })
        config.plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].min.css'
        }))
        config.plugins.push(new CleanWebpackPlugin({
            verbose: true,
            cleanOnceBeforeBuildPatterns: ['**/*', '!uploads/**']
        }))
    }

    return config
}
