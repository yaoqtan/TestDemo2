module.exports = {

    //     default     //
    outputDir: "dist",
    assetsDir: "",
    indexPath: "index.html",
    filenameHashing: true,
    runtimeCompiler: false,
    productionSourceMap: true,
    //     default     //

    lintOnSave: process.env.NODE_ENV !== "production",
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    chainWebpack: config => {

        config.module.rule("eslint").use("eslint-loader").loader("eslint-loader").tap(options => ({ ...options, fix: true, emitError: true, failOnWarning: true, failOnError: true }));

    },
    devServer: {
        proxy: ""
    },
    pluginOptions: {
        lintStyleOnBuild: true,
        stylelint: {
            fix: true,
            failOnError: true,
            files: ["**/*.{vue,htm,html,css,sss,less,scss,sass}"]
        }
    }
};
