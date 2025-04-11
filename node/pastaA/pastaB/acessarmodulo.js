const moduloA = require('../../moduloa');// importando o modulo A
//const moduloA = require('C:/projeto_web_completo/node/moduloa.js'); // importando o modulo A
console.log(moduloA.ola)
const c = require('./pastaC/index.js'); // importando o modulo C
console.log(c.ola2) // imprime o ola2 do modulo C

const http = require('http'); // importando o modulo http

http.createServer((req, res) => {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Bom Dia!</h1>');
    res.end();
}).listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
}   ); // criando um servidor http que escuta na porta 8080
   