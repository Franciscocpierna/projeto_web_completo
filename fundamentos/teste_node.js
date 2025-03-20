let a = 3
console.log(this.a)//undefined
console.log(global.a)//undefined
global.b=123
console.log(global.b) // 123
this.c = 456
this.d = false
this.e = 'teste'
console.log(this.c)//456
console.log(module.exports.c)//456
console.log(module.exports===this)//true
console.log(module.exports)

//criando uma variavel maluca sem var e sem let

abc = 3 // não faça isso
console.log(global.abc)//3

