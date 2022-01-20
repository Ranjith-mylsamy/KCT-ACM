const path=require("path");
const common=require('./webpack.common');
const {merge}=require("webpack-merge");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
module.exports=merge(common,{
    devtool:false,
    mode:'production',
    plugins:[new CleanWebpackPlugin()],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
     },
    output:{
        filename:"[name].[hash].js",
        path:path.resolve(__dirname,"dist"),
        assetModuleFilename: "assets/[name][ext][query]"
    }
});