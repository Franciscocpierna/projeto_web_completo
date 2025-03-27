console.log("Funções Callback #01")

const fabricante = ["mercedes", "Audi", "BMW"]
function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricante.forEach(imprimir)
fabricante.forEach(fabricante => console.log(fabricante))

console.log("Funções Callback #02")
