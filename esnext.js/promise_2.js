//usando callbacks aninhados
/*setTimeout(function() {
    console.log('Executando callback...'); // imprime a mensagem após 2 segundos
    setTimeout (function()  {
        console.log('Executando callback...'); // imprime a mensagem após 2 segundos
        setTimeout(function() {
            console.log('Executando callback...'); // imprime a mensagem após 2 segundos
        }, 2000);
    }, 2000);
    
}, 2000);
*/
//usando promises
function esperarPor(tempo = 2000) {
    return  new Promise(function(resolve) { // retorna uma promise
        setTimeout(function() {
            console.log('Executando promise...') // imprime a mensagem após 2 segundos
            resolve('vishhh') // resolve a promise
        },tempo) // resolve a promise após o tempo especificado
    })
}

esperarPor(3000).then(texto => console.log(texto)) // imprime a mensagem após 3
// espera por 3 segundos e imprime a mensagem             
