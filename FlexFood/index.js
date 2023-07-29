const express = require ('express')
const routes = require ('./routes/routes')
const app = express()

//Traz o dotenv e configura ele
require('dotenv').config()

//Habilita requisições de corpo, presentes em formulários
app.use(express.urlencoded({extended: true}))

//Habilita requisições do tipo JSON
app.use(express.json())

//Para rotas do tipo barra (/), use o arquivo de rotas
app.use('/', routes)

//Processa o arquivo .env e chama a variável
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})