const fs = require('fs');
const caminho = __dirname + '/arquivo.json';

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo); // Retorna o conteúdo do arquivo

//assincrono
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo); // Converte o conteúdo do arquivo para um objeto JSON
    console.log(`${config.db.host}:${config.db.port}`)// Retorna o host e a porta do banco de dados
});
  
const config = require('./arquivo.json'); // Importa o arquivo JSON como um objeto
console.log(config.db); // Retorna o objeto db do arquivo JSON

fs.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos) // Retorna o conteúdo da pasta
}   ) // Retorna o conteúdo da pasta