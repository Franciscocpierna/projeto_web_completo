const tecnologias = new Map();

tecnologias.set('react', { framework: false  });  // adiciona o elemento com chave 'react' e valor { framework: false } 
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react); // undefined
console.log(tecnologias.get('react').framework); 

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]);

console.log(chavesVariadas); // Map(3) { [Function] => 'Função', {} => 'Objeto', 123 => 'Número' }
console.log(chavesVariadas.size); // 3
console.log(chavesVariadas.get(123)); // Número
console.log(chavesVariadas.get(function() {})); // undefined
console.log(chavesVariadas.get({})); // undefined

chavesVariadas.forEach((vl, key) => {
    console.log(key, vl); // [Function] Função {} Objeto 123 Número
})
console.log(chavesVariadas.keys()); // [Map Iterator] { [Function], {}, 123 }
console.log(chavesVariadas.values()); // [Map Iterator] { 'Função', 'Objeto', 'Número' }
console.log(chavesVariadas.entries()); // [Map Iterator] { [ [Function], 'Função' ], [ {}, 'Objeto' ], [ 123, 'Número' ] }

console.log(chavesVariadas.has(123)); // true
chavesVariadas.delete(123); // remove o elemento com chave 123
console.log(chavesVariadas.has(123)); // false
console.log(chavesVariadas.size); // 2
chavesVariadas.set(123, 'Número'); // adiciona o elemento com chave 123 e valor 'Número'
console.log(chavesVariadas.has(123)); // true
console.log(chavesVariadas.size); // 3
console.log(chavesVariadas); // Map(3) { [Function] => 'Função', {} => 'Objeto', 123 => 'Número' }
chavesVariadas.set(123, 'Num'); // altera o valor do elemento com chave 123
console.log(chavesVariadas); // Map(3) { [Function] => 'Função', {} => 'Objeto', 123 => 'Número' }