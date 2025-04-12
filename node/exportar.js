console.log(module.exports)
console.log(module.exports === this) // true
console.log(module.exports === exports) // true
// console.log(this === exports) // true
// console.log(this === module.exports) // true
this.a = 1 // this é o module.exports
exports.b = 2 // exports é o module.exports
module.exports.c = 3 // module.exports é o module.exports

exports = null // exports não é o module.exports
console.log(module.exports) // { a: 1, b: 2, c: 3 }

exports = {
     nome: 'Teste'
     } // exports não é o module.exports
console.log(module.exports) // { a: 1, b: 2, c: 3 }

module.exports = { publico: true } // module.exports é o module.exports