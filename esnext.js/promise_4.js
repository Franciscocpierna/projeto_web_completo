function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
      [min, max] = [max, min]; // troca os valores de min e max
    }
    return new Promise(resolve => {
      setTimeout(function() { // espera o tempo especificado
        const fator = max - min + 1; // calcula o fator para gerar números aleatórios
        const aleatorio = parseInt(Math.random() * fator) + min; // gera um número aleatório entre min e max
        resolve(aleatorio); // resolve a promise com o número aleatório  
      }, tempo); // espera o tempo especificado  
      
      
    });
  }

  function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
    ])
  }

  console.time('Promise')

  gerarVariosNumeros()
                     .then(console.log) // imprime os números gerados
                     .then(() => {
                        
                        console.timeEnd('Promise') // imprime o tempo total de execução 
                     })
 
 //.then(numeros => console.log(numeros)) // imprime os números gerados pode substuir o primeiro then por esse

