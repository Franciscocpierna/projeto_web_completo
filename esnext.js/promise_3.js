function gerarNumerosEntre(min, max) {
  if (min > max) {
    [min, max] = [max, min]; // troca os valores de min e max
  }
  return new Promise(resolve => {
    const fator = max - min + 1; // calcula o fator para gerar números aleatórios
    const aleatorio = parseInt(Math.random() * fator) + min; // gera um número aleatório entre min e max
    resolve(aleatorio); // resolve a promise com o número aleatório
  });
}

gerarNumerosEntre(10, 11).then(console.log); // imprime o número aleatório gerado 