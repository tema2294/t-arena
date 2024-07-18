const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

require('dotenv').config({path: path.resolve(__dirname, 'env.example')});

module.exports = (_: any, argv: Record<string, string>) => {
    const {mode} = argv;
    const isDevMode = mode === 'development';

    return {
        entry: './src/index.tsx',
        context: __dirname,
        output: {
            publicPath: '/',
            filename: '[name].[contenthash].js',
            chunkFilename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'build'),
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                'hooks': path.resolve(__dirname, 'src/hooks'),
                'pages': path.resolve(__dirname, 'src/pages'),
                'components': path.resolve(__dirname, 'src/components'),
                'tools': path.resolve(__dirname, 'src/tools'),
                'redux-store': path.resolve(__dirname, 'src/redux-store'),
                'constants': path.resolve(__dirname, 'src/constants'),
                'hocs': path.resolve(__dirname, 'src/hocs'),
                'assets': path.resolve(__dirname, 'public/assets'),
                'fonts': path.resolve(__dirname, 'public/fonts'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.(ts|tsx)$/,
                    loader: "ts-loader",
                },
                {
                    test: /\.svg$/,
                    oneOf: [
                        {
                            test: /bg\.svg$/, // Обработка bg.svg с file-loader
                            use: [
                                {
                                    loader: 'file-loader',
                                    options: {
                                        name: '[name].[hash].[ext]',
                                        outputPath: 'assets',
                                    },
                                },
                            ],
                        },
                        {
                            use: [
                                {
                                    loader: '@svgr/webpack',
                                    options: {
                                        prettier: false,
                                        svgo: true,
                                        titleProp: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|ttf)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'assets',
                            },
                        },
                    ],
                },
            ]
        },
        optimization: {
            minimize: !isDevMode,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: !isDevMode,
                        },
                    },
                }),
            ],
            splitChunks: {
                chunks: 'all',
            },
        },
        devServer: {
            historyApiFallback: true,
            static: path.join(__dirname, 'build'),
            compress: true,
            port: 3000,
            proxy: [
                {
                    context: ['/TA_Dev/hs/api/fv1/register'],
                    target: 'https://d77-as.esit.info:21443',
                    changeOrigin: true,
                    logLevel: 'debug'
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new webpack.DefinePlugin({
                APP_MODE: JSON.stringify(mode)
            }),
            isDevMode && new CircularDependencyPlugin({
                exclude: /a\.js|node_modules/,
                include: /src/,
                failOnError: true,
                allowAsyncCycles: false,
                cwd: process.cwd(),
            }),
        ].filter(Boolean),
    }
};
