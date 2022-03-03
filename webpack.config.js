const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ROOT = process.cwd();
const ENV_MODE = process.env.ENV_MODE == "production";
const cssMini = ENV_MODE
? MiniCssExtractPlugin.loader
: "style-loader";
const chunKname = ENV_MODE
? "[name].[chunkhash:8].js"
: "[name].js" 
const config = {
    entry:"./src/index.ts",
    output:{
        path: path.resolve(__dirname,"dist"),
        filename:chunKname,
        environment:{
            arrowFuntion:false,
            const:false
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            hash:true,
        })
    ],
    module:{
        rules:[
            {
                test:/\.(ts|tsx)$/i,
                loader:"ts-loader",
                exclude:["/node_modules/"],
            },
            {
                test:/\.less$/i,
                use:[
                    cssMini,
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test:/\.s[ac]ss$/i,
                use:[
                    cssMini,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            },
            {
                test:/.css$/i,
                use:[cssMini,"css-loader","postcss-loader"]
            },
            {
                test:/\.(eot|svg|tff|woff|png|jpg|gif)$/i,
                type:"asset"
            }
        ]
    },
    
    resolve:{
        extensions:[".tsx",".ts",".js"],
        alias:{
            "@s":path.resolve(ROOT,"src") 
        }
    },
    devServer:{
        port:8080,
        open:true
    }
}


module.exports= () => {
    if(ENV_MODE){
        config.mode = "production";
        config.plugins.push(new MiniCssExtractPlugin());
    }else{
        config.mode = "development";

    }
    return  config
    
}