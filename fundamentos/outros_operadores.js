console.log("operadores aritméticos")

const [a, b, c, d] = [3, 5, 1, 15]
console.log("a b c d = ",a,b,c,d)
const soma= a+b+c+d
console.log("soma todos= ",soma)

const subtracao = b - a
console.log("subtracao b-a = "+subtracao)

const multiplicacao = a*b
console.log("multiplicaca a e b = ",multiplicacao)

const divisao = d/a
console.log("divisao d/a = ",soma)

const modulo  = a%2
console.log("divisao a%2 = ",modulo)
console.log(soma, subtracao, multiplicacao, -divisao, modulo) 

console.log("")
console.log("operadores Relacionais")
console.log("01-'1'==1", '1'==1) // V
console.log("'1'===1", '1'===1) //F
console.log("'3'!=3", '3'!=3) //F
console.log("'3'!==3", '3'!==3) //V

console.log("5==4", 5==4) // F
console.log("5==5", 5==5) // V
console.log("5>=5", 5>=5) // V
console.log("3<=5", 3<=5) // V

const d1 = new Date(0)
const d2 = new Date(0)
console.log("d1=", d1)
console.log("d2=", d2)
console.log("d1==d2", d1==d2)//F
console.log("d1===d2", d1===d2)//F

console.log("d1.getTime()", d1.getTime())
console.log("d2.getTime()", d2.getTime())
console.log("d1.getTime()===d2.getTime()", d1.getTime()===d2.getTime()) //V

console.log("undefined == null", undefined == null) //V
console.log("undefined === null", undefined === null)//F

console.log("Operadores lógicos")
/*
v e v -> v
v e f -> f
f e ? -> f

v ou ? -> V
f ou v -> v
f ou f -> f
ou exclusivo
v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

!v -> f
!f -> v


*/

function compras(trabalho1,trabalho2){
    const comprarSorvete = trabalho1 ||trabalho2
    const comprartv50 = trabalho1 && trabalho2 
    //const comprartv32 = !!(trabalho1 ^ trabalho2)//bitwise xor exclusivo
    const comprartv32 = trabalho1 != trabalho2  
    const matersaudavel = !comprarSorvete // operador unário
    return { comprarSorvete, comprartv50, comprartv32, matersaudavel}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))