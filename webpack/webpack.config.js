const webpack = require('webpack')
const path = require('path');


// output: {
//          filename: 'main.js',
//          path: path.resolve(__dirname, 'dist'),
         
//      }

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
         filename: 'principal.js',
         path: path.resolve(__dirname, 'public'),
         
     }
     
};