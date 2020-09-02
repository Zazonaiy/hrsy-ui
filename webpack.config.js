const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
   // mode : "development",
    entry : {
        app : [
            //'webpack/hot/only-dev-server',
            './app/main.jsx'
        ]
    },
    output : {
        path : path.resolve(__dirname, "./build"),
        //publicPath : "http://127.0.0.1:22356/build",
        filename : "hrsy-webpack.bundle.js"
    },
    resolve : {
        extensions: ['*', '.js', '.jsx', 'css', '.json'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            'node_modules'    
        ]
    },
    module : {
        rules:[
            {
                test:/\.jsx?$/,
                exclude:"/node_modules/",
                loaders:"babel-loader",
                query:{
                    presets:['react','es2015',
                        [
                            'env',{
                                "targets": {
                                    "browsers": ['> 1%', 'last 2 versions']
                                }
                            }
                        ]]
                }
            },
            {
                test:/\.js$/,
                exclude:"/node_modules/",
                loaders:"babel-loader",
                query:{
                    presets:['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)$/, 
                loader: "url-loader?prefix=font/&limit=5000"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    externals: {
        //引入其他类库或api，并且不会吧这些类库构建到运行时的文件中
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    context: path.join(__dirname),
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE.ENV':"development"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "./app/build/index.html"),
            filename:"index.html"
        }),
        new webpack.ProvidePlugin({
            $ : "jquery",
            jQuery : "jquery",
            "window.jQuery" : "jquery",
            Popper: ['popper.js', 'default'],
            "react-bootstrap" : "react-bootstrap"

        })
    ]
};