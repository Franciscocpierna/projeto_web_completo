/*const prod1 = {
    nome: '...',
    preco: 45 
}

const prod2 = {
    nome: '...',
    preco: 1234
}
*/
//pela função factory cria dessa forma abaixo objeto

function criarPessoa(){
    return {
        nome: 'Ana',
        sobreniome: 'Silva'
    }
}
console.log(criarPessoa())

function criarProduto(nome,preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
novoprod= criarProduto("panela", 25.50)
novoprod1= criarProduto("prato", 5.20)
console.log()
console.log(novoprod)
console.log(novoprod1)
console.log()
console.log("Class vs Factory")
class Pessoa{
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()

const criarPessoa1 = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`) 
    }
}

const p2 = criarPessoa1('João')
p2.falar()
