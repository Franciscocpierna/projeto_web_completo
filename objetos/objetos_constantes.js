// aponta para o endereço de memória (pessoa -> 123 ->{...}

const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)
//apontando pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'} //gera erro
Object.freeze(pessoa)
pessoa.nome = "Maria"
console.log(pessoa.nome)//Pedro
const pessoaConstante = Object.freeze({ nome: 'Joao'})
console.log(pessoaConstante)
pessoa.nome='Antonio'
console.log(pessoaConstante.nome)
