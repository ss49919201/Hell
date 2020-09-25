const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {    
    mode: 'production',
    entry: './src/app.ts',
    output: {        
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/"
    },
    devtool: 'none',
    module: {
        rules: [{
            // test: 何に対して
            test: /\.ts$/,
            // use: 何をするのか
            use: 'ts-loader',
            // exclude: 除く条件、今回はnode_modulesのtsファイルはts-loadしないことを示す
            exclude: /node_modules/
        }]
    },
    //拡張子つける
    resolve: {
        // import文に拡張子がついてなかった場合、extensionsの中身の拡張子を確認して一致したものを自動でつけてくれる
        extensions: ['.ts','.js']
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}
