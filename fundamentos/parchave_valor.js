// par chave valor
const saudacao = "Opa!" // contexto lexico

function exec() {
    const saudacao = "Falaa" // contexto lexico 2
    return saudacao
}

// Objetos são grupos aninhados de pares valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
          logradouro: 'Rua Muito legal',
          numero:123 
    } 
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.nome)
console.log(cliente.idade)
console.log(cliente.peso)

console.log(cliente.endereco)
console.log(cliente.endereco.logradouro)
console.log(cliente.endereco.numero)
console.log("Funções/objeto")
console.log("Math.ceil: "+Math.ceil(6,1))

const obj1 = {} 
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1) 
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    } 
} 
console.log("################################################")
const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

