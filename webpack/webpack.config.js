const webpack = require('webpack')
const path = require('path');


// module.exports = {
//     mode: 'development',
//     //entry: path.resolve(__dirname, '../src/principal.js')
//     entry: './scr/principal.js' 
// }

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
};