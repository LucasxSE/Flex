const {Pessoas} = require('../models')
require('dotenv').config()

module.exports = class PessoaController{
    static async show(req, res){
        //Select na tabela, vai buscar e trazer TUDO o que está em Pessoa
        const pessoas = await Pessoas.findAll()
        res.send(pessoas)
    }

    static async show1(req, res){
        //Select pela Primary Key
        const pessoa = await Pessoas.findByPk(req.params.id)
        res.send(pessoa)
    }

    static async create(req, res){
        const pessoa = await Pessoas.create({
            //Requisição está vindo do corpo e não no cabeçalho
            name: req.body.name,
            email: req.body.email,
            senha: req.body.senha,
            status: req.body.status,
            tipo: req.body.tipo
        })
        res.send('Salvo com sucesso')
    }

    static async update(req, res){
        const pessoa = await Pessoas.findByPk(req.params.id)
        await pessoa.update({
            name: req.body.name,
            name: req.body.name,
            email: req.body.email,
            senha: req.body.senha,
            status: req.body.status,
            tipo: req.body.tipo
        })
        res.send('Alterado com sucesso')
    }

    static async delete(req, res){
        const pessoa = await Pessoas.findByPk(req.params.id)
        await pessoa.destroy()
        res.send(true)
    }
}