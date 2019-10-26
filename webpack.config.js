const path = require('path');

module.exports = {
    entry: './src/client.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true
}