const porta = 3003
const express = require('express')
const app = express()//importar o express para criar o servidor
const bodyParser = require('body-parser')//importar o body-parser para ler o corpo da requisição
const bancoDeDados = require('C:/projeto_web_completo/node/projeto/src/bancodedados.js')//importar o banco de dados

app.use(bodyParser.urlencoded({ extended: true }))//configurar o body-parser para ler o corpo da requisição
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())//retorna os produtos em formato json
   
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))//retorna o produto com o id informado na url
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//retorna o produto salvo em formato json
})

app.put('/produtos:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//retorna o produto salvo em formato json
})

app.delete('/produtos:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)//retorna o produto salvo em formato json
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);//executar o servidor na porta 3003
}) //executar o servidor com o comando node servidor.js