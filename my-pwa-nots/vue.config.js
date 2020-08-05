
console.log(process.env.NODE_ENV)
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    devServer: {
        open:true,
        port:8889,
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    }
        //     default     //
   /* outputDir: "dist",
    assetsDir: "",
    indexPath: "index.html",
    filenameHashing: true,
    runtimeCompiler: false,
    productionSourceMap: true,
    //     default     //

    lintOnSave: process.env.NODE_ENV !== "production",*/

/*    pluginOptions: {
        lintStyleOnBuild: true,
        stylelint: {
            fix: true,
            failOnError: true,
            files: ["**!/!*.{vue,htm,html,css,sss,less,scss,sass}"]
        }
    }*/
};