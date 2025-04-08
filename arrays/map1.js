const nums = [1, 2, 3, 4, 5];
//for com propósito
let resultado = nums.map(function(e) {
    return e * 2;
}
);
console.log(resultado); // [ 2, 4, 6, 8, 10 ]
resultado = nums.map(e => e * 2) // [ 2, 4, 6, 8, 10 ]
console.log(resultado) // [ 2, 4, 6, 8, 10 ]

const soma10 = e => e + 10 // [ 11, 12, 13, 14, 15 ]
console.log(soma10)// [ 11, 12, 13, 14, 15 ]
console.log(nums.map(soma10)) // [ 11, 12, 13, 14, 15 ]

const triplo = e => e * 3 // [ 3, 6, 9, 12, 15 ]
console.log(triplo)// [ 3, 6, 9, 12, 15 ]
console.log(nums.map(triplo)) // [ 3, 6, 9, 12, 15 ]
console.log(nums.map(soma10).map(triplo)) // [ 33, 36, 39, 42, 45 ]
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // R$ 11.00 R$ 12.00 R$ 13.00 R$ 14.00 R$ 15.00
resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
console.log(resultado) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]



