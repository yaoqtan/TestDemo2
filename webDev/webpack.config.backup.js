/*
module.exports = {
    entry:{
        "home":'./src/js/home.js',
        "signin":'./src/js/signin.js',
        "signup":'./src/js/signup.js',
    },
    output:{
        path:__dirname + '/src/bundle',
        filename:'js/[name].bundle.js'
    }
};*/

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new extractTextPlugin('css/[name]-[chunkhash].bundle.css');
const extractLESS = new extractTextPlugin('css/[name]-[chunkhash].bundle.css');
//const cleanPlugin = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

const getEntry = {
    entry:function(dirPath,option){
        const fileArr = fs.readdirSync(dirPath);
        const files = fileArr.filter(function(file){
            return option.test(file);
        });

        const entries = {};
        let dirname;
        let basename;
        let extname;
        for(var i = 0;i<files.length;i++){
            dirname = path.dirname(files[i]);
            extname = path.extname(files[i]);
            basename = path.basename(files[i],extname);
            entries[basename] = dirPath + basename +extname;
        }
        return entries;
    }
};
const config={
    entry:getEntry.entry('./src/js/',/\^*.js$/),
    output:{
        path:__dirname + '/src/bundle',
        filename:'js/[name].bundle.js'
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:"jquery",
            "window.jQuery":"jquery"
        }),
       // new cleanPlugin(['bundle']),
       /* new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks:3
        }),*/
        new copyWebpackPlugin([
            {from : './src/img',to:'./img'}
        ]),
        extractCSS,
        extractLESS,
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use:extractCSS.extract(['css-loader','postcss-loader'])
            },{
                test: /\.less$/,
                use:extractCSS.extract(['css-loader','less-loader'])
            },{
                test: /\.html$/,
                use:'raw-loader'
            },{
                test: /\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },{
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader:'file-loader?name=./fonts/[name].[ext]'
            },{
                test: /\.(png|jpg|gif|svg)$/,
                loader:'url',
                query:{
                    limit:30720,
                    name:'../img/[name].[ext]?'
                }
            }
        ]
    },
    devtool:"eval-source-map",
    devServer:{
        contentBase:"./src",
        historyApiFallback:true,
        inline:true,
        port:8088
    }

};

const htmlPage = function () {
    const pages = getEntry.entry('./src/html/',/\^*.html$/);
    for(let page in pages){
        console.log(page,'==========')
        const pluginOption={
            filename:page + '.html',
            template:'./src/html'+ page +'.html',
            inject:true,
            hash:false,
            minify:{
                removeComments:true,
                collapseWhitespace:false
            },
            chunks:['common',page]
        };
        config.plugins.push(new htmlWebpackPlugin(pluginOption))
    }
};

htmlPage();

module.exports= config;
