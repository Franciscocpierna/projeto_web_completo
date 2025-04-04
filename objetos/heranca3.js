const pai = { nome:'Pedro', corCabelo: 'preto' }
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.nome)
console.log(filha1.corCabelo)
console.log(filha1.__proto__)
console.log(filha1.__proto__ === pai)
console.log(pai.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
console.log(filha1.__proto__.__proto__ === Object.prototype)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true },
    idade: { value: 10, writable: false, enumerable: true }
})  
console.log(filha2.nome)
filha2.nome = 'Carla' // não vai alterar o valor pois writable: false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo} `) // continua 'Bia'
console.log(filha2.nome) 
console.log(filha2.idade)
console.log(filha2.corCabelo)
console.log(filha2.nome)
console.log(Object.keys(filha2)) // ['nome', 'idade']
console.log(Object.keys(filha1)) // ['nome']

for (let key in filha2) {
    
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`) // mostra o que é do objeto e o que é do protótipo
}


