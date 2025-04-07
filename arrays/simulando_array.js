const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray) // { '0': 'Rafael', '1': 'Ana', '2': 'Bia' }
Object.defineProperty(quaseArray, 'toString', {
  value: function () { return Object.values(this) },
  enumerable: false
})
console.log(quaseArray[0]) // Rafael
console.log(quaseArray[1]) // Ana
console.log(quaseArray.toString()) // [ 'Rafael', 'Ana', 'Bia' ]

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(meuArray) // [ 'Rafael', 'Ana', 'Bia' ]
console.log(meuArray[0]) // Rafael  
console.log(meuArray[1]) // Ana