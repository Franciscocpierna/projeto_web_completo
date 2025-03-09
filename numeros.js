const peso = 1.0
const peso2 = Number('2.0')
console.log(peso, peso2)
console.log(Number.isInteger(peso))
console.log(Number.isInteger(peso2))
const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso + avaliacao2 * peso2
const media = total / (peso + peso2)
console.log(media)
console.log("******************")
console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2)) // em binário
console.log(typeof media) // Number
console.log(typeof Number) // Number é uma função