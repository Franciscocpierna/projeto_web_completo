function MeuObjeto() {}
console.log(MeuObjeto.prototype) // MeuObjeto {}
const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto()
console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(MeuObjeto.prototype === obj1.__proto__) // true

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}
obj1.falar() // Bom dia! Meu nome é Anônimo
obj2.nome = 'Rafael'
obj2.falar() // Bom dia! Meu nome é Rafael
obj1.falar() 

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // não é recomendado, mas funciona
obj3.nome = 'Obj3'
obj3.falar() // Bom dia! Meu nome é Obj3

//resumindo:
// __proto__ é a referência para o objeto pai (prototipo) do objeto filho
// prototype é o objeto pai (prototipo) do objeto filho
// o objeto filho herda as propriedades e métodos do objeto pai (prototipo)
// o objeto pai (prototipo) é o responsável por criar os objetos filhos
// o objeto pai (prototipo) é o responsável por criar os métodos e propriedades dos objetos filhos
// o objeto pai (prototipo) é o responsável por criar os métodos e propriedades dos objetos filhos


console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true
console.log(MeuObjeto.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__) // null
console.log(Object.prototype.__proto__ === null) // true
console.log(Object.prototype.__proto__ === Object) // false