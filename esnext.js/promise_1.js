
let p = new Promise(function(cuumprirPromessa)  {
   cuumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']) // resolve a promise com o array de nomes
})
 // o que esta comentado é o mesmo que o que está descomentado

 
//p //then(valor => console.log(valor))
//  .then(valor => valor[0]) // pega o primeiro elemento do array
//  .then(primeiro => primeiro[0]) // pega o primeiro caractere do primeiro elemento
//  .then(letra => letra.toLowerCase()) // converte a letra para minúscula
//  .then(letraMiuscula => console.log(letraMiuscula)) // imprime a letra 
  // .catch(e => console.log(e)) // trata o erro caso ocorra
// .finally(() => console.log('Fim!')) // executa uma função após a resolução ou rejeição da promise
   
//outra forma de fazer a mesma coisa

function primeiroElemento(array) {
    return array[0]; // retorna o primeiro elemento do array
}
function primeiraLetra(primeiro) {
    return primeiro[0]; // retorna o primeiro caractere do primeiro elemento
}

const letraMinuscula = letra => letra.toLowerCase(); // converte a letra para minúscula


p
 .then(primeiroElemento)
 .then(primeiraLetra)
 .then(letraMinuscula)
 .then(console.log) // imprime a letra após a conversão para minúscula