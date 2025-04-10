const escola = [{
    nome: 'Turma M1', 
    alunos: [{
       nome: 'Gustavo',
       nota: 8.1 
    }, { 
        nome: 'Ana', 
        nota: 9.3 
    }] 
}, {
 nome: 'Turma M2',
    alunos: [{
       nome: 'Rebeca',
       nota: 8.9 
    }, { 
        nome: 'Roberto', 
        nota: 7.3 
    }]
}] 
const getNotaDoAluno = aluno => aluno.nota // função para pegar a nota do aluno
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno) // função para pegar as notas da turma
const notas1 = escola.map(getNotasDaTurma) // usa o map para pegar as notas da turma
console.log(notas1) // imprime as notas da turma
console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ] )); // concatena os valores e arrays passados como parâmetros
Array.prototype.flatMap = function(callback) { // função flatMap que recebe um callback
    return Array.prototype.concat.apply([], this.map(callback)) // aplica o concat nas notas da turma
}
const notas2 = escola.flatMap(getNotasDaTurma) // usa o flatMap para pegar as notas da turma
console.log(notas2) // imprime as notas da turma
