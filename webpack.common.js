const path=require("path");
const htmlPlugin=require("html-webpack-plugin");
const cssLoaderPlugin=require("mini-css-extract-plugin");
module.exports={
    entry:{
        home:"./src/index.js",
        blog:"./src/blog.js",
        form:"./src/form.js",
        team:"./src/team.js"
    },
    plugins:[
        new htmlPlugin({
            template:'./src/index.html',
            chunks:['home'],
            filename:'index.html'
        }),
        new htmlPlugin({
            template:'./src/blog.html',
            chunks:['blog'],
            filename:'blog.html'
        }),
        new htmlPlugin({
            template:'./src/form.html',
            chunks:['form'],
            filename:'form.html'
        }),
        new htmlPlugin({
            template:'./src/team.html',
            chunks:['team'],
            filename:'team.html'
        }),
        new cssLoaderPlugin({
            filename:"[name].[hash].css"
        })],
    module:{
        rules:[
            {
                test:/\.html$/,
                use:[
                    "html-loader"
                ]
            },
            {
                test:/\.css$/,
                use:[
                    cssLoaderPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test:/\.(svg|png|jpg|jpeg|gif|ttf)$/,
                type:"asset/resource",
                generator:{
                    filename:'assets/[name][ext]'
                }
            }
        ]
    }
};