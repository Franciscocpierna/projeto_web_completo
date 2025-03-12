let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)
isAtivo = 1
console.log(!!isAtivo)
console.log("*********")
console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log("*********")
console.log("Os falsos...")
console.log(!!0) //retorna false
console.log(!!'') //retorna false
console.log(!!null) //retorna false
console.log(!!NaN) //retorna false
console.log(!!undefined)
console.log(!!(isAtivo = false)) // Retorna false
console.log("*********")
console.log("Para finalizar...")
console.log(!!('' || null || 0 || ' '))// Retorna true
console.log("*********")
let nome = ''
console.log(nome || 'Desconhecido')// Retorna Desconhecido
nome = 'Lucas'
console.log(nome || 'Desconhecido')// Retorna Lucas
console.log("*********")
