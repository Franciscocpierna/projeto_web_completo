Array.prototype.reduce2 = function(callback, valorInicial) { // função reduce2 que recebe um callback e um valor inicial
    const indiceInicial = valorInicial ? 0 : 1 // se valorInicial for passado, o valor inicial do acumulador é 0, caso contrário é 1 
    let acumulador = valorInicial || this[0]// valor inicial do acumulador
    for(let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this) // chama o callback passando o acumulador, o elemento atual, o índice e o array
    }
    return acumulador // retorna o acumulador
}   
const soma = (total , valor)=> total + valor // soma os valores
const nums = [1, 2, 3, 4, 5, 6] // array de números
console.log(nums.reduce2(soma,21)) // chama o reduce passando a função soma
