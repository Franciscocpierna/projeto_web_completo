// tagged template - processa o template de uma função
 function tag(partes, ...valores) {
     console.log(partes) 
     console.log(valores)
     return 'Outra String' 
 }
 
const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`) // [ ' está ', ' ' ] [ 'Gui', 'Aprovado' ]
