function soboanota(nota){
    if (nota >=7){
        console.log("Aprovado")
    }else{
        console.log("Reprovado")
    }

}
soboanota(8.1)
soboanota(6.9)

function verdadeirooufalso(valor){
    if(valor)
        console.log("Verdadeiro")
    else
        console.log("falso")

}
verdadeirooufalso(true)//verdadeiro
verdadeirooufalso(false)//false
verdadeirooufalso()//false
verdadeirooufalso(undefined)//false
verdadeirooufalso(NaN)//false
verdadeirooufalso("")//false
verdadeirooufalso(0)//falso
verdadeirooufalso(3)//verdadeiro
verdadeirooufalso(" ")//verdadeiro
verdadeirooufalso("?")//verdadeiro
verdadeirooufalso([])//verdadeiro
verdadeirooufalso({})//verdadeiro
console.log("")
function teste1(num){
   if(num>7){
     console.log(num)
     console.log("final")
   }else if (num==7) {
     console.log("igual a 7")
   }else{
     console.log("menor 7")
   }

}
  
   


teste1(6)
teste1(8)
teste1(7)
console.log("")
Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}
const imprimirResultado = function (nota){
    if (nota.entre(9,10)) {
        console.log("Quadro de Honra")

    }else if(nota.entre(7, 8.99)){
        console.log("Aprovado")
    }else if(nota.entre(4, 6.99)){
        console.log("Recuperação") 
    }else if(nota.entre(0, 3.99)){
        console.log("Reprovado")
    }else {
        console.log('Nota inválida')
    } 
    console.log("Fim")
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(11)
