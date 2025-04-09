const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false }, 
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }  
]

console.log(alunos.map(a => a.nota)) // [ 7.3, 9.2, 9.8, 8.7 ]
// Array.prototype.reduce2 = function(callback, valorInicial) {
//     let acumulador = valorInicial // valor inicial do acumulador
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual) // 7.3 9.2 9.8 8.7
    return acumulador + atual // soma as notas
}   , 0) // 0 é o valor inicial do acumulador
console.log(resultado) // 35.0