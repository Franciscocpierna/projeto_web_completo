const porta = 3003
const express = require('express')
const app = express()



app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 })//converter para json
   
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);//executar o servidor na porta 3003
}) //executar o servidor com o comando node servidor.js