const obj = { a: 1, b: 2, c: 3,soma(){ return a + b + c} }
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3}
// console.log(JSON.parse('{"a":1,"b":2,"c":3}')) // { a: 1, b: 2, c: 3 }
// console.log(JSON.parse('{"a":1,"b":2,"c":3}', (key, value) => {
//     if(key === '') return value // retorna o valor original
//     return value + 1 // retorna o valor original + 1
// }))
 console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
 console.log(JSON.parse('{"a":1.7,"b":"string","c":true,"d":{},"e":[],"f":null}')) // { a: 1, b: 'string', c: true, d: {}, e: [], f: null }
 