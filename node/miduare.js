//middleware patern (chain of responsibility)
// 1. Create a middleware function
// 2. Create a function that returns a middleware function
// 3. Create a function that returns a middleware function that returns a middleware function
// 4. Create a function that returns a middleware function that returns a middleware function that returns a middleware function

const passo1 = (ctx, next) => { // ctx = contexto, next = próximo
    ctx.valor1 = 'mid1'
    next()
}   

const passo2 = (ctx, next) => {      // ctx = contexto, next = próximo        
    ctx.valor2 = 'mid2'
    next()
}

const  passo3 = ctx => ctx.valor3 = 'mid3' // não chama o next, pois é o último middleware

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && // verifica se middlewares existe e se o índice é menor que o tamanho de middlewares
        middlewares[indice](ctx, () => execPasso(indice + 1)) // chama o próximo middleware
    }
    execPasso(0) // inicia a execução do primeiro middleware
}

const ctx = {} // cria um objeto vazio
exec(ctx, passo1, passo2, passo3) // chama a função exec passando o contexto e os middlewares
console.log(ctx) // { valor1: 'mid1', valor2: 'mid2', valor3: 'mid3' } // imprime o contexto com os valores dos middlewares

