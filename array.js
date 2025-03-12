const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])// Retorna 7.7 9.2
console.log(valores[4])// Retorna undefined
valores[4] = 10 // Adiciona o valor 10 na posição 4
valores[10] = 10// Adiciona o valor 10 na posição 10
console.log(valores)// Retorna [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 10 ]
console.log(valores)// Retorna [ 7.7, 8.9, 6.3, 9.2, 10 ]
console.log(valores.length)// Retorna 5
valores.push({id: 3}, false, null, 'teste')// Adiciona os valores no array
console.log(valores)// Retorna [ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste' ]
console.log(valores.pop())// Retorna teste // Remove o último valor do array
delete valores[0]// Deleta o valor na posição 0
console.log(valores)// Retorna [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]
console.log(typeof valores)// Retorna object


