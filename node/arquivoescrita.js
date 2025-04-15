const fs = require('fs');

const produto = {
    nome: 'Celular Ultra Mega',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!') // Se houver erro, exibe o erro, caso contrário, exibe 'Arquivo salvo!'
}) // Cria um arquivo JSON com o conteúdo do objeto produto