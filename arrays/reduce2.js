const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false }, 
      { nome: 'Maria', nota: 9.2, bolsista: true },
      { nome: 'Pedro', nota: 9.8, bolsista: false },
      { nome: 'Ana', nota: 8.7, bolsista: true }  
  ]
//desafio 1  todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista // verifica se todos os alunos são bolsistas
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)) // false // [ false, true, false, true ]
  

// algums alunos são bolsistas?
const algumBolsista = (resultado, bolsista) => resultado || bolsista // verifica se algum aluno é bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) // true //[ false, true, false, true ] 