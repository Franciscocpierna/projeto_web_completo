// objeto coleção dinamica de chave valor
const produto = new Object
console.log(produto)
produto.nome="cadeira"
console.log(produto)
produto['marca do produto'] = 'Generica'
console.log(produto)
produto.preco = 220
console.log(produto)
delete produto.preco
console.log(produto)
delete produto["marca do produto"]
console.log(produto)

const carro = {
     modelo: 'A4',
     valor: 89000,
     proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua Abc',
            numero: 123 
        }
     },
     condutores: [{
        nome: 'Junior',
        idade: 19 
     }, {
        nome: 'Ana',
        idade: 42
     }],
     calcularValorSeguro: function(){
        // ...
     }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']["endereco"]['logradouro'] = 'Av Gigante'
console.log(carro)
//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores.length)