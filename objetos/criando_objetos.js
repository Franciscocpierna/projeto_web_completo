// usando a notação literal
const obj1 = {}
console.log(obj1) 

//Object em JS
console.log(typeof Object, typeof new Object) 
const obj2 = new Object
console.log(obj2) 
// Funções construtoras
function Produto (nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
           return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto()) 
console.log(p1.nome) 
console.log(p2.getPrecoComDesconto().toFixed(2)) 
console.log(p2.nome) 
//função Factory
function criarFuncionario(nome, sarioBase, faltas){
    return {
        nome,
        sarioBase,
        faltas,
        getSalario(){
            return (sarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2)) 

//criar objeto (Object.create)
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)
// uma função famosa que retorna Objeto...
const fromJSON= JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)