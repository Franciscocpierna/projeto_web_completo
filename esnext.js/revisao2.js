//Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2, 3)); // 5
//
// Arrow Function (this)
// this é o objeto que está chamando a função

const lexico1 = () => { console.log(this === exports) }; // true
lexico1(); // true
const lexico2 = lexico1.bind({}); // false
lexico2(); // true

// Parametro default
function log(texto = 'Node') {
    console.log(texto);
}
log(); // Node
log(undefined); // Node
log(null); // null
log('Sou mais forte!'); // Sou mais forte!

function soma1(a, b = 1) {
    return a + b;
}
console.log(soma1(2)); // 3

//operador rest
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}
console.log(total(1, 2, 3, 4, 5)); // 15
console.log(total(1, 2, 3, 4, 5, 6)); // 21
console.log(total(1, 2));