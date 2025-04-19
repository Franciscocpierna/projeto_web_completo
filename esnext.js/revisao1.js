// let const
{
  var a = 1;
  let b = 2;
  console.log(b);

}
console.log(a); // 1
//console.log(b); // ReferenceError: b is not defined

// template string
const produto= 'Ipad';
console.log(`O produto é: ${produto} é caro`);

// Destructuring

const [l, e, ...tras] = 'cod3r';
console.log(l, e, tras); // c o [ 'd', '3', 'r' ]
const [g, b] = [1, 2, 3];
console.log(g, b); // 1 2

const[x, ,y] = [1, 2, 3];
console.log(x, y); // 1 2

const { idade: i, nome } = { nome: 'Ana', idade: 23 };
console.log(i, nome); // Ana 23
