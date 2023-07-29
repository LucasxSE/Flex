const express = require ('express')
const router = express.Router()
const path = require ('path')
const IndexController = require('../controllers/IndexController')
const PessoaController = require('../controllers/PessoaController')

router.get(('/old'), (req, res) => {
    res.send('Bem Vindo')
})

router.get('/', IndexController.oi)

router.get('/pessoas', PessoaController.show)
router.get('/pessoas/:id', PessoaController.show1)
router.post('/pessoas', PessoaController.create)
router.put('/pessoas/:id', PessoaController.update)
router.delete('/pessoas/:id', PessoaController.delete)

//Todas as rotas dvem ficar acima do erro 404
router.use(function(req, res, next){
    res.status(404).send('Rota não encontrada')
})

module.exports = router