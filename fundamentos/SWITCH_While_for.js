const imprimirResultado = function (nota){
    switch(Math.floor(nota)){
        case 10:
        case 9: 
            console.log('Quadro de Honra')
            break
        case 8: case7:   
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break    
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break    
        default:
            console.log('Nota inválida')
                      
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

console.log('\nUsando WHILE')
function basico(min,max){
  const valor = Math.random() * (max - min) + min 
  return Math.floor(valor)

}
let opcao = 0

while (opcao != -1) {

    opcao = basico(-1,10)
    console.log(`opção escolhida foi ${opcao}`)


}
console.log('\nAté a proxima')
