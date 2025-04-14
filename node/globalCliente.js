const { min } = require('lodash')

require('./global.js') // importando o modulo global.js
console.log(minhAapp.saudacao()) // chamando a função saudacao do objeto global
console.log(minhAapp.nome) // imprimindo o nome do objeto global
minhAapp.nome = 'Sistema legal 2' // alterando o nome do objeto global
console.log(minhAapp.nome) // imprimindo o nome do objeto global