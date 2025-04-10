const filha = ['Ana', 'Bia', 'Lia', 'Rafa'];
const filhos = ['João', 'Pedro', 'Gustavo'];
const todos = filha.concat(filhos,'Fulano'); // concatena os arrays
console.log(todos, filha,filhos); // imprime o array concatenado

console.log([].concat([1, 2], [3, 4], 5,[[6,7]])); // concatena os valores e arrays passados como parâmetros