const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
   // mode : "development",
    entry : {
        app : ['./app/main.jsx']
    },
    output : {
        path : path.resolve(__dirname, "./build"),
        //publicPath : "http://127.0.0.1:22356/build",
        filename : "bundle.js"
    },
    resolve : {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    module : {
        /*
        loaders : [{reactTest:/\.jsx$/, loaders:['jsx?harmony']}],
        //使用es6时才用到该节点
        loaders : [{
            reactTest : /\.jsx?$/,
            loaders : 'babel',
            include : path.resolve(__dirname),
            query : {
                //添加两个预先加载的组件，用来处理js或jsx类型的文件
                presets : ['es2015', 'react']
            }
        }] */
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:"babel-loader",
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE.ENV':"development"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "./app/build/index.html"),
            filename:"index.html"
        })
    ]
};