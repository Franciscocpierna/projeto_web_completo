const fs = require('fs');
const path = require('path');



const lerArquivo = (caminho) => {
  return new Promise(resolve => {
    fs.readFile(caminho, function(_,conteudo) { // o primeiro parametro é o erro, o segundo é o conteudo
        //console.log('Lendo o arquivo...')
       resolve(conteudo.toString()) // o conteudo é um buffer, então precisamos converter para string
    });
   // console.log('Depois de ler o arquivo')
  });
}

const caminho = path.join(__dirname, 'dados.txt') // caminho do arquivo
//lerArquivo(caminho).then(conteudo => console.log(conteudo))
// outra forma de fazer 
lerArquivo(caminho)
          .then(conteudo => conteudo.split('\n'))

          .then(linhas => linhas.join(',')) 
          .then(conteudo => `o valor final é: ${conteudo}`)
          .then(console.log)

//.then(linhas => console.log(linhas[0]))           