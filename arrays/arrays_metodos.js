const pilotos = [
    'Vettel',                   
    'Alonso',
    'Raikkonen',
    'Massa'
];
pilotos.pop(); // Elimina el último elemento del array
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikkonen' ]
pilotos.push('Verstappen'); // Adiciona un elemento no final do array
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]
console.log(pilotos.length); // 4
pilotos.shift(); // remove o primero elemento do array
console.log(pilotos); // [ 'Alonso', 'Raikkonen', 'Verstappen' ]
pilotos.unshift('Hamilton'); // Adiciona um elemento no começo do array
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]
pilotos.splice(2, 0, 'Bottas', 'Massa'); // Adiciona dois elementos a partir do índice 2
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]
pilotos.splice(3, 1); // Elimina un elemento a partir do índice 3
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]
const algunsPilotos1 = pilotos.slice(2); // Elimina os dois primeiros elementos do array
console.log(algunsPilotos1); // [ 'Bottas', 'Raikkonen', 'Verstappen' ]
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]
const algunsPilotos2 = pilotos.slice(1, 4); // adiciona os elementos do índice 1 ao 4 (não incluído)
// Elimina os dois primeiros elementos do array
// (não incluído)
console.log(algunsPilotos2); // [ 'Alonso', 'Bottas', 'Raikkonen' ]
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]
console.log(pilotos.length); // 5