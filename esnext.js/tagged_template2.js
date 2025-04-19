function real(partes, ...valores) {
  const resultado = []
  valores.forEach((valor, indice) => {
      valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2).replace('.', ',')}`
      resultado.push(partes[indice], valor)
  })
  return resultado.join('')
}

const preco = 29.99
const precoParcela = 11.99
const produto = 'iPad'
console.log(real `${produto} custa ${preco} em 3x de ${precoParcela}`) // iPad custa R$ 29,99 em 3x de R$ 11,99