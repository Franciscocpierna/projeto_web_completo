console.log(typeof Array, typeof new Array, typeof [])
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // Carlos
console.log(aprovados[2]) // Ana
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia' ]
aprovados[9] = 'Rafael'
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]
console.log(aprovados[9]) // Rafael
console.log(aprovados[3]) // Paulo
console.log(aprovados.length) // 10
console.log(aprovados[7]) // undefined
console.log(aprovados[8]===undefined) // true
aprovados.sort()
console.log(aprovados) // [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael' ]
delete aprovados[1] // delete não altera o length do array
console.log(aprovados) // [ 'Abia', <1 empty item>, 'Bia', 'Carlos', 'Paulo', 'Rafael' ]
console.log(aprovados[1]) // undefined
console.log(aprovados[2]) // Bia
aprovados = ['Bia', 'Carlos', 'Ana']
// aprovados = new Array('Bia', 'Carlos', 'Ana')
aprovados.splice(1, 2,'elemento1','elemento2') // remove 2 elementos a partir do índice 1
console.log(aprovados) // [ 'Bia', 'Ana' ]