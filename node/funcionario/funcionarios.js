const url = 'http://files.cod3rcursos.com.br/curso-js/funcionarios.json'; // url do arquivo json
const axios = require('axios'); // importando o axios

axios.get(url).then (response => { // fazendo a requisição
    const funcionarios = response.data; // pegando os dados da resposta
    console.log(funcionarios); // imprimindo os dados
    console.log(funcionarios.length); // imprimindo o tamanho do array
    console.log(funcionarios[0]); // imprimindo o primeiro funcionario
    console.log(funcionarios[0].nome); // imprimindo o nome do primeiro funcionario
    console.log(funcionarios[0].salario); // imprimindo o salario do primeiro funcionario
}) // fazendo a requisição
