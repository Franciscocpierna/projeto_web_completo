//operador ... rest(resto) é usado para agrupar os argumentos restantes em um array e Spread(espalhar) é usado para espalhar os elementos de um array em outro array ou em uma função.

// usar spread em objetos
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // operador spread
console.log(clone) // { ativo: true, nome: 'Maria', salario: 12348.99 } 
console.log(funcionario) // { nome: 'Maria', salario: 12348.99 }

// usar spread em arrays
const grupoA = ['João', 'Pedro', 'Ana']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'] // operador spread
console.log(grupoFinal) // [ 'Maria', 'João', 'Pedro', 'Ana', 'Rafaela' ]