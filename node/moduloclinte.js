const moduloA= require('./moduloa.js');
const moduloB= require('./modulob.js'); // importando o modulo B
//const moduloC= require('./moduloc.js'); // importando o modulo C
console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloB.boaNoite());
console.log(moduloB.bomDia);
console.log(moduloB); // imprime o objeto do modulo B
console.log(moduloA); // imprime o objeto do modulo A