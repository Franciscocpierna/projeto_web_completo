const porta = 3003
const express = require('express')
const app = express()
const bancoDeDados = require('C:/projeto_web_completo/node/projeto/src/bancodedados.js')//importar o banco de dados

app
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

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);//executar o servidor na porta 3003
}) //executar o servidor com o comando node servidor.js