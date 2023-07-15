const express = require ('express')
const routes = require ('./routes/routes')
const {engine} = require ('express-handlebars')
const app = express()
const port = 3000

app.use (express.static('./public'))
app.use ('/', routes)

app.engine ('handlebars', engine())
app.set ('view engine', 'handlebars')


app.listen (port, () => {
    console.log (`App rodando na porta ${port}`)
})
