console.log("Funções Callback #01")

const fabricante = ["mercedes", "Audi", "BMW"]
function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricante.forEach(imprimir)
fabricante.forEach(fabricante => console.log(fabricante))

console.log("Funções Callback #02")
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
//sem callback
//quatro resultados abaixo são iguais
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
    //console.log(notasBaixas) 
}
console.log(notasBaixas)
notasBaixas = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas)
const notasBaixas3 = notas.filter(nota => nota<7)
console.log(notasBaixas3)

const notasMenorque7 = nota => nota<7
const notasBaixas4 = notas.filter(notasMenorque7)
console.log(notasBaixas4)


console.log("Funções Callback #03")
/*
executa no browse
document getElementsByTagName('body')[0].onclick = function  (e)  {
      console.log("O evento ocorreu")
}
*/ 
