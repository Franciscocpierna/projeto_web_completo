//armazenando uma função em uma variável // função anônima
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3) // 5

//armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3)) // 5
console.log(soma(5, 5)) // 10

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3)) // -1
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!') // Legal!!!
imprimir2(2) // 2
imprimir2('Teste') // Teste
