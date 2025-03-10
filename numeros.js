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
console.log(media.toString()) // em string
console.log(media.toString(2)) // em binário
console.log(typeof media) // Number
console.log(typeof Number) // Number é uma função
console.log("10" / 2) // 5
console.log("10" + 2) // 102
console.log("10" - 2) // 8
console.log("10" * 2) // 20
console.log("10" / 2) // 5
console.log("Show!" * 2) // NaN
console.log(0.1 + 0.7) // 0.7999999999999999
// console.log(10.toString()) // não funciona
console.log((10).toString()) // funciona
console.log(typeof((10).toString())) // string
console.log(7 / 0) // Infinity
console.log((0.1 + 0.7).toFixed(2)) // 0.8