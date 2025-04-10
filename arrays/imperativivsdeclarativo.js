const alunos = [
  { nome: 'João', nota: 7.9 },          
  { nome: 'Maria', nota: 9.2 }
      
]
// implementação imperativa
let total = 0 // variável total
for (let i = 0; i < alunos.length; i++) { // loop para percorrer o array
  total += alunos[i].nota // soma as notas
}
const media = total / alunos.length // calcula a média
console.log(`A média das notas é ${media.toFixed(2)}`) // imprime a média com 2 casas decimais


// implementação declarativa
const somaNotas1 = (acumulador, aluno) => acumulador + aluno.nota // função para somar as notas  
const mediaDeclarativa = alunos.reduce(somaNotas1, 0) / alunos.length // usa o reduce para somar as notas e calcula a média
console.log(`A média das notas é ${mediaDeclarativa.toFixed(2)}`) // imprime a média com 2 casas decimais   
//outra forma de fazer
const getNota = aluno => aluno.nota // função para pegar a nota do aluno
const somaNotas = (total, atual) => total + atual // função para somar as notas
const total2 = alunos.map(getNota).reduce(somaNotas, 0) // usa o map para pegar as notas e o reduce para somar as notas
console.log(`A média das notas é ${(total2 / alunos.length).toFixed(2)}`) // imprime a média com 2 casas decimais