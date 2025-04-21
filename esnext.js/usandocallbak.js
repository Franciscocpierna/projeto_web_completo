// sem promisses
const http = require('http');

const getTurma = (letra, callback) => { 
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url, res => { // faz a requisição para a url
        let resultado = '';

        res.on('data', dados => {
            resultado += dados; // concatena os dados recebidos
        });

        res.on('end', () => {
            callback(JSON.parse(resultado));// converte o resultado para JSON
        });
    });
}

let nomes = [];
getTurma('A', alunos =>{
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)); // adiciona os nomes da turma A ao array nomes
    
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`)); // adiciona os nomes da turma B ao array nomes
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`)); // adiciona os nomes da turma C ao array nomes
            console.log(nomes); // imprime os nomes das turmas A, B e C
        });
    });
})
