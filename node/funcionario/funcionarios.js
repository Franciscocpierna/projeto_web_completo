const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'; // url do arquivo json
const axios = require('axios'); // importando o axios

const chineses = f=> f.pais === 'China'; // filtrando os funcionarios chineses
const mulheres = f=> f.genero === 'F'; // filtrando as funcionarias mulheres
const menorSalario = (func, funcAtual) => { // filtrando o menor salario
    return func.salario < funcAtual.salario ? func : funcAtual; // retornando o funcionario com menor salario
} // filtrando o menor salario


axios.get(url).then(response => { // fazendo a requisição
    const funcionarios = response.data; // pegando os dados da resposta
    console.log(funcionarios); // imprimindo os dados
   /* console.log(funcionarios.length); // imprimindo o tamanho do array
    console.log(funcionarios[0]); // imprimindo o primeiro funcionario
    console.log(funcionarios[0].nome); // imprimindo o nome do primeiro funcionario
    console.log(funcionarios[0].salario); // imprimindo o salario do primeiro funcionario
    */
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario); // filtrando os funcionarios chineses e mulheres e pegando o menor salario
    console.log(func); // imprimindo o funcionario com menor salario    
}) // fazendo a requisição


