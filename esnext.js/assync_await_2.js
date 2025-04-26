const { reject } = require("lodash");

function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
      [min, max] = [max, min]; // troca os valores de min e max
    }
    return new Promise((resolve, reject) => {
      const fator = max - min + 1; // calcula o fator para gerar números aleatórios
      const aleatorio = parseInt(Math.random() * fator) + min; // gera um número aleatório entre min e max
      if(numerosProibidos.includes(aleatorio)) { // verifica se o número gerado está na lista de números proibidos
        reject('Número repetido!') // rejeita a promise se o número gerado estiver na lista de números proibidos
      } else {
        resolve(aleatorio); // resolve a promise com o número aleatório
      }
     
    })
  }

 async function geraMegaSena(qtdNumeros, tentativa = 1) { // função assíncrona que gera números da Mega Sena
    try{
        const numeros = [] // cria um array vazio para armazenar os números gerados
        for(let _ of Array(qtdNumeros).fill()) { // cria um array com a quantidade de números desejada
           numeros.push(await gerarNumerosEntre(1, 60, numeros)) //  adiciona o número gerado ao array de números
        }
        return numeros // retorna o array de números gerados
    } catch(e) {
        if(tentativa > 100) { // verifica se o número de tentativas é maior que 10
            throw "Não deu certo" // lança o erro se houver
        }else{
            return geraMegaSena(qtdNumeros, tentativa + 1) // chama a função novamente com o número de tentativas incrementado
        }
        

    }
    }
   
   

 
    geraMegaSena(25) // chama a função geraMegaSena com a quantidade de números desejada
        .then(console.log) // imprime os números gerados
        .catch(console.log) // imprime o erro se houver