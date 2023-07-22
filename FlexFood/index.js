const express = require ('express')
const routes = require ('./routes/routes')
const app = express()

//Traz o dotenv e configura ele
require('dotenv').config()

//Para rotas do tipo barra (/), use o arquivo de rotas
app.use('/', routes)

//Processa o arquivo .env e chama a variável
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})