let a = 7;
let b = 94;
let c = a;
a = b;
b = c;
console.log("valor de a = " + a);
console.log("valor de b = " + b);
console.log("outra solução");
a = 7;
b = 94;

[a, b] = [b, a];

console.log("valor de a = " + a); // Exibe "valor de a = 94"
console.log("valor de b = " + b); // Exibe "valor de b = 7"