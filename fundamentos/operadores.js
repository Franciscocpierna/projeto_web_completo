//atribuição
console.log("Atribuição")
const a = 7
let b = 3
b += a
console.log(b)
b -=4
console.log(b)
b *=2
console.log(b)
b /=2
console.log(b)
b %= 2
console.log(b)
console.log("Operadores: Destructuring #01 novo recurso criado no ES2015")
const pessoa = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
          logradouro: 'Rua Muito legal',
          numero:123 
    } 

}

const { nome,idade }= pessoa

console.log(nome,idade)

const {nome: n, idade: i}=pessoa
console.log(n,i)

const {endereco:{logradouro,numero}} = pessoa 
console.log(logradouro, numero)
console.log("Operadores: Destructuring #02 novo recurso criado no ES2015")

const [d] = [10]
console.log(d)
const[n1,,n3,,n5,n6 = 0]=[10,7,9,8]
console.log(n1,n3,n5,n6)
const[z1,z2,z3,z4] =[10,7,9,8]
console.log(z1,z2,z3,z4)
const [,[,nota]]=[[,8,8], [9,6,8]]
console.log(nota)
console.log("Operadores: Destructuring #03 novo recurso criado no ES2015")

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
} 


const obj = { max:50, min:40 } 
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))

console.log("Operadores: Destructuring #04 novo recurso criado no ES2015")
function rand1([min = 0, max = 1000]){
    if (min > max) [min,max] = [max,min] 
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

console.log(rand1([50,40]))
console.log(rand1([992]))
console.log(rand1([,10]))
console.log(rand1([]))