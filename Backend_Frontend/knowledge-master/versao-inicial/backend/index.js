const app = require('express')()
const consign = require('consign')


consign()
    // ... outras configurações
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')     // ⬅️ PASSO 2: Carrega as rotas que USAM o Passport
    .into(app)



app.listen(3000, () => {
    console.log('Backend executando')
})

