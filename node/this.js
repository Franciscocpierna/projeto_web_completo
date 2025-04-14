console.log(this === global) // imprimindo se this é igual a global é falso
console.log(this === module) // imprimindo se this é igual a module é falso 
console.log(this === module.exports) // imprimindo se this é igual a module.exports é verdadeiro
console.log(this === exports) // imprimindo se this é igual a exports é verdadeiro
function logThis() { // criando uma função logThis
    console.log('Dentro de uma função')
    console.log(this === exports) // imprimindo se this é igual a exports é falso
    console.log(this === module.exportsl) // imprimindo se this é igual a global é falso
    console.log(this === global) // imprimindo se this é igual a global é verdadeiro
}
logThis() // chamando a função logThis