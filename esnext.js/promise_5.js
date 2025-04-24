function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < chanceErro) {
        reject('Ocorreu um erro!');
      } else {
        resolve(valor);
      }
    }, 1000);
  });
}

funcionarOuNao('Testando...', 0.5)
.then(v => console.log(`Valor: ${v}`))
.catch(err => console.log(`Erro: ${err}`))
