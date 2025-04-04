console.log(typeof String) // function
console.log(typeof Array) // function
console.log(typeof Object) // function
console.log(typeof Number) // function
console.log(typeof Boolean) // function
console.log(typeof Function) // function
console.log(typeof Object.prototype) // object
console.log(typeof Array.prototype) // object
console.log(typeof String.prototype) // object
console.log(typeof Number.prototype) // object
console.log(typeof Boolean.prototype) // object
console.log(typeof Function.prototype) // object

String.prototype.outra = function() {
    return 'Outra string'
}
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
console.log('Teste'.outra()) // Outra string
console.log('Escola Code3r'.reverse()) // r3odeC alocsE
console.log('Escola Code3r'.reverse().outra()) // Outra string
Array.prototype.first = function() {
    return this[0]
}
console.log([1,2,3].first()) // 1
console.log(['a','b','c'].first()) // 'a'
