const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const { optimization } = require('../webpack/webpack.config');



// output: {
//          filename: 'main.js',
//          path: path.resolve(__dirname, 'dist'),
         
//      }

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
         filename: 'principal.js',
         path: path.resolve(__dirname, 'public'),
         
     },
    vevServer: {
        contentBase: "./public",
        port: 9000
    }, 
    optimization: {
      minimizer: [new TerserPlugin({
        parallel: true,
        terserOptions: {
            ecma: 6,
         },  
    }),
     new OptimizeCSSAssetsPlugin({})
    ]
    }, 
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ], 
    module: {
        rules: [{
           test: /\.s?[ac]ss$/,
           use: [
              MiniCssExtractPlugin.loader,
             //'style-loader', // adiciona CSS  a DOM injetando a tag <style>
             'css-loader', // interpreta @import, url()...
             'sass-loader',
            ]
        }] 
    } 
     
};

///\.s?[ac]ss$/,
// / ... / — Delimita a expressão regular.
// \. — Representa um ponto literal (.), pois o ponto sozinho significa "qualquer caractere" em regex, então precisa ser escapado.
// s? — O s é opcional (? significa "zero ou um"), então pode ou não ter um s aqui.
// [ac] — Um conjunto de caracteres, aceita apenas a ou c.
// ss — Literalmente dois s seguidos.
// $ — Indica o final da string.
// Resumindo:
// Essa regex casa com arquivos que terminam com:

// .sass
// .scss
// .css
// Exemplos que casam:

// style.sass
// main.scss
// app.css

//  parte [ac] da expressão regular significa que, naquele ponto, pode aparecer apenas a letra a ou a letra c.

// Exemplos:
// Se for .sass, o [ac] corresponde ao a:
// .sass

// Se for .scss, o [ac] corresponde ao c:
// .scss

// Portanto, a regex .s?[ac]ss$ casa com:

// .sass (a no lugar do [ac])
// .scss (c no lugar do [ac])
// .css (sem o s?, mas com c no lugar do [ac])
// Resumo:
// O [ac] permite que a expressão aceite tanto arquivos .sass quanto .scss e .css.