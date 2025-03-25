function soma(){

    let soma = 0
    for (i in arguments){
       soma += arguments[i]
    }
    return soma
}

total=soma(3,4,9,100).toFixed(2)
console.log(`total = ${total} `)
console.log(soma())
console.log(soma(1.1,2.2,3.3).toFixed(2))
console.log(soma(1.1,2.2,3.3," teste"))
console.log(soma('a','b','c'))

console.log("parametro padrão")
soma = 0
function soma1(a,b,c){
      a=a || 1
      b=b || 1
      c=c || 1
      return a+b+c
       

}

console.log(soma1(),soma1(3), soma1(5,4,2,9), soma1(0,0,0))
console.log(soma1(5,4))

console.log("segunda forma para valor padrão ")
function soma2(a,b,c){
    a = a  !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // o primeiro 1 é indice de argumentos no parametros(0,1,2)
    c = isNaN(c) ? 1 : c
    return a+b+c
     

}
console.log(soma2(),soma2(3), soma2(5,4,2,9), soma2(0,0,0))
console.log(soma2(5,4))

console.log("terceira forma")

function soma3(a=1,b=1,c=2){
   
    return a+b+c
     

}
console.log(soma3(),soma3(3), soma3(5,4,2,9), soma3(0,0,0))
console.log(soma3(5,4))
console.log(soma3(5,4,3))