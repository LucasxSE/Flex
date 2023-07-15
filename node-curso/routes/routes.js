const express = require ('express')
const router = express.Router()
const path = require ('path')

router.get('/home', (req, res) =>{
    res.send ('Olá, Lucas, não altere o package')
})

router.get('/', (req, res) => {
    res.render ('index')
})

router.get('/sobre', (req, res) => {
    res.render ('sobre')
})

router.get('/oi', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'))
})

router.get('/formulario', (req, res) =>{
    res.sendFile(path.resolve('./public/pages/formulario.html'))
})

router.get('./listadetarefas', (req, res) => {
    res.sendFile(path.resolve('./public/pages/listadetarefas.html'))
})

router.use(function(req, res, next){
    res.status(404).sendFile(path.resolve('./public/pages/404.html'))
})

module.exports = router