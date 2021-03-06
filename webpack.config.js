const webpack=require("webpack");
const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const ExtractTextPlugin=require("extract-text-webpack-plugin");
const {VueLoaderPlugin}=require("vue-loader");

module.exports={
    //1.入口文件
    entry: {
        main: path.resolve(__dirname,"src/main.js"),
    },
    //2.出口文件
    output: {
        path: path.resolve(__dirname,"release"),
        filename: "bundle.js",//name值和chunkhash值为6位
    },
    //3.模型文件，设置编译规则
    module: {
        rules: [
            {
                test:/\.js(x)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff)(\?\w*)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 4096,
                        name: "[name].[ext]"
                    }
                }
            },
            {
                test:/\.(png|git|jpg|jepg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 4096,
                        name: "[name].[ext]"
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader"
                }
            }
        ]
    },
    plugins: [
        //提取css
        new ExtractTextPlugin({
            filename: "bundle.css"//不能使用[contenthash].css
        }),
        new HtmlWebpackPlugin({template:"src/index.html"}),
        new VueLoaderPlugin()
    ],
    mode: "production",
    devServer: {
        host: 'localhost',
        port: 9999
    }
};