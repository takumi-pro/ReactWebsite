const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
        // modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        //rulesのexcludeに/node_modules/を追加したらエラー解決
        // エラー内容は
        // Module not found: Error: Can't resolve './App' in '/Users/igarashitakumi/Documents/React/john-doe/node_modules/react-dom'
        rules: [
            {
                // 読み込み順序はts-loader→babel-loader
                test: /[\.tsx|\.ts]$/,
                loader: "babel-loader",
                exclude: /node_modules/
                // use: ["babel-loader", "ts-loader"]
            },
            {
                test: /[\.tsx|\.ts]$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: "file-loader"
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
    },
}