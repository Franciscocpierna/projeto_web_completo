/*const a = {name: 'Teste'}
console.log(a);
console.log(typeof a); // Object
const b = a;
console.log(b);
b.name = 'Opa';
console.log(a);
console.log(b);
let c = 3;
let d = c;
d++;
console.log(c);
console.log(d);
*/
let valor // não inicializada
console.log(valor)// undefined
//console.log(valor2); // erro
valor = null; // ausência de valor
console.log(valor);// null
//console.log(valor.toString()); // Erro!
const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)
produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)// false
console.log(produto)// { preco: undefined }
delete produto.preco// Deleta o atributo preco
console.log(produto)// {}  
produto.preco = null // sem preço
console.log(!!produto.preco)// false
console.log(produto)
