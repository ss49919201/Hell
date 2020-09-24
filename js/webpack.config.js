// node.jsのインポートはrequire
// require('path')のpathはnode.je内蔵のモジュール
const path = require('path');

// node.jeのエクスポート分
module.exports = {
    // どこからスタートするか
    entry: './dist/app.js',
    output: {
        // まとめたファイル名
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}
