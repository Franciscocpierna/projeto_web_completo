//console.log('Global', global) // imprimindo o objeto global
//console.log('Global', globalThis) // imprimindo o objeto globalThis
global.minhAapp = Object.freeze({ // criando um objeto global
    nome: 'Sistema legal',
    saudacao() {
        return 'Estou em todos os lugares'
    }
})