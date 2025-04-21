// com promisses
const http = require('http');

const getTurma = (letra, callback) => { 
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => { // retorna uma promise
        http.get(url, res => { // faz a requisição para a url
            let resultado = '';

            res.on('data', dados => {
                resultado += dados; // concatena os dados recebidos
            });

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado)); // converte o resultado para JSON e resolve a promise
                } catch (e) {
                    reject(e); // rejeita a promise em caso de erro
                }
            });
        });
    });
}

//let nomes = [];
//getTurma('A').then(alunos =>{
 //   nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)); // adiciona os nomes da turma A ao array nomes
    
   // getTurma('B').then(alunos => {
     //   nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`)); // adiciona os nomes da turma B ao array nomes
       // getTurma('C').then(alunos => {
         //   nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`)); // adiciona os nomes da turma C ao array nomes
          //  console.log(nomes); // imprime os nomes das turmas A, B e C
        //});
    //});
//})

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
     .then(turmas => [].concat(...turmas)) // concatena os arrays de turmas A, B e C em um único array
     .then(alunos => alunos.map(a => a.nome)) // mapeia os alunos para seus nomes
     .then(nomes => console.log(nomes)) // imprime os nomes dos alunos
     .catch(e => console.log(e.message)); // imprime o erro caso ocorra 
 getTurma('D').catch(e => console.log(e.message)); // imprime o erro caso ocorra
 