function esperarPor(tempo = 2000) {
    return  new Promise(function(resolve) { // retorna uma promise
        setTimeout(function() {
            //console.log('Executando promise...') // imprime a mensagem após 2 segundos
            resolve() // resolve a promise
        },tempo) // resolve a promise após o tempo especificado
    })
}

/*esperarPor(2000) // espera por 2 segundos e imprime a mensagem
               .then(() => console.log('Executando promise 1')) // imprime a mensagem após 2 segundos
               .then(() => esperarPor()) // espera por 2 segundos e imprime a mensagem
               .then(() => console.log('Executando promise 2')) // imprime a mensagem após 2 segundos
               .then(() => esperarPor()) // espera por 2 segundos e imprime a mensagem
               .then(() => console.log('Executando promise 3')) // imprime a mensagem após 2
               .then(() => esperarPor()) // espera por 2 segundos e imprime a mensagem

*/
function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() =>  resolve(10), 5000)  // espera 5 segundos e resolve a promise com o valor 10)
    })
}  

async function retornarValorRapido(){
    return 20 // retorna o valor 20
}

async function executar() {
   let valor = await retornarValorRapido() // espera o valor 20 ser retornado 
   await esperarPor(1500) // espera por 2 segundos e imprime a mensagem
   console.log(`Async/Await ${valor}`) // imprime a mensagem após 2 segundos
  
   await esperarPor(1500) // espera por 2 segundos e imprime a mensagem
   console.log(`Async/Await ${valor + 1}`) // imprime a mensagem após 2 segundos
  
   await esperarPor(1500) // espera por 2 segundos e imprime a mensagem
   console.log(`Async/Await ${valor + 2}`) // imprime a mensagem após 2 segundos
   return valor + 3 // retorna o valor 13
}  

async function executarDeVerdade() {
    
 const valor = await executar()
 console.log(valor)// imprime o valor retornado pela função executar
}

executarDeVerdade() // chama a função executarDeVerdade
            