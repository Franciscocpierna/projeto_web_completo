// Object.preventExtensions(Object.prototype) // não permite adicionar novas propriedades
// Object.seal(Object.prototype) // não permite adicionar novas propriedades e não permite remover propriedades
// Object.freeze(Object.prototype) // não permite adicionar novas propriedades, não permite remover propriedades e não permite alterar propriedades
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})  
console.log('Extensível:',Object.isExtensible(produto)) 
produto.nome = 'Borracha' // vai alterar o valor da propriedade nome
produto.preco = 2.99 // vai alterar o valor da propriedade preco
produto.descricao = 'Borracha escolar branca' // não vai adicionar a propriedade descricao
delete produto.tag // vai deletar a propriedade tag
console.log(produto) // { nome: 'Qualquer', preco: 1.99 }

//object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // não permite adicionar novas propriedades e não permite remover propriedades
console.log('Selado:',Object.isSealed(pessoa)) // true

pessoa.sobrenome = 'Silva' // não vai adicionar a propriedade sobrenome
delete pessoa.nome // não vai deletar a propriedade nome
pessoa.idade = 29 // vai alterar o valor da propriedade idade  
console.log(pessoa) // { nome: 'Juliana', idade: 29 }
// Object.freeze(pessoa) = selado + valores constantes
