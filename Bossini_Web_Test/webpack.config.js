const webpack = require('webpack');
const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPageObj = require('./pageJson/index.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const fs = require('fs');

var https = require('https');


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
        for(let i = 0;i<files.length;i++){
            dirname = path.dirname(files[i]);
            extname = path.extname(files[i]);
            basename = path.basename(files[i],extname);
            entries[basename] = dirPath + basename +extname;
        }
        return entries;
    },
};
/*const extractLess = new ExtractTextPlugin({
    filename: "./css/[name].css",
});*/

 let webpackConfig= {
    entry:getEntry.entry('./src/js/',/\^*.js$/),
    output:{
        path:__dirname + '/dist/',
        filename:'./js/[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        https:true,
        host:'0.0.0.0',
        proxy: {
            '/api': {
                target: 'https://ticket-api-dev.eigaland.com',
                changeOrigin:true
               // secure: false
            }
        }
    },
    module: {
        rules: [{
            test: /\.less$/,
            use:[{
                loader: "style-loader"
            },{
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
            /*extractLess.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })*/
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [
                {
                    loader: "url-loader",
                    options: {
                        name: "./img/[name]-[hash:5].min.[ext]",
                        limit: 10000, // size <= 20KB

                    }
                },
                {
                    loader: "img-loader",
                    options: {
                        plugins: [
                            require("imagemin-pngquant")({
                                quality: "80"
                            })
                        ]
                    }
                }
            ]
        },{
                test: /\.art$/,
                use: "art-template-loader",
            }

        ]
    },
    plugins: [
        //extractLess,
        //new CleanWebpackPlugin(),
    ]

};
 console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'production'){
    webpackConfig.plugins.push(new CleanWebpackPlugin())
}


for(let i=0;i<htmlPageObj.length;i++){
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        title:htmlPageObj[i].title,
        filename: `${htmlPageObj[i].template}.html`,
        template: `./src/index.html`,
        chunks: [htmlPageObj[i].js],
        hash:5,
        minify:{
            removeComment:true,
            collapseWhitespace:true
        }
    }))
}
module.exports = webpackConfig;
