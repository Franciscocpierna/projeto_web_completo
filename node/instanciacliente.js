const contadorA = require('./instancia_unica') 
const contadorB = require('./instancia_unica') // importando o modulo instancia_unica

const contadorC = require('./instancianova') ()//
// importando o modulo instancianova
const contadorD = require('./instancianova') () // importando o modulo instancianova

contadorA.inc() // chamando a função inc do modulo instancia_unica
contadorA.inc() // chamando a função inc do modulo instancia_unica
console.log(contadorA.valor,contadorB.valor) // imprimindo o valor do modulo instancia_unica
contadorC.inc() // chamando a função inc do modulo instancianova
contadorC.inc() // chamando a função inc do modulo instancianova
console.log(contadorC.valor, contadorD.valor) // imprimindo o valor do modulo instancianova