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

//recurso do ES8
//objetivo é simplificar o uso de promises
//async/await
let obterAlunos = async () => {
    const ta = await getTurma('A'); // espera a promise ser resolvida
    const tb = await getTurma('B'); // espera a promise ser resolvida
    const tc = await getTurma('C'); // espera a promise ser resolvida
    return [].concat(ta, tb, tc); // concatena os arrays de turmas A, B e C em um único array
} // retormna um objeto AsyncFunction   

obterAlunos()
    .then(alunos => alunos.map(a => a.nome)) // mapeia os alunos para seus nomes
    .then(nomes => console.log(nomes)) // imprime os nomes dos alunos
   
