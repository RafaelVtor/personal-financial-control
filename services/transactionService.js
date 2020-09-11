const mongoose = require('mongoose');
// const ObjectId = mongoose.Types.ObjectId;


// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

module.exports = {

    addValue: async function (req, res) {
        //Lembrar: usar IF para o "type"
        try {
            const transaction = req.body
            const newTransaction = await TransactionModel.create(transaction)
            res.send(newTransaction)
        } catch (error) {

            res.send(error)
        }
    },

    findAll: async function (req, res) {

        try {
            const allTransactions = await TransactionModel.find()

            res.send(allTransactions)

        } catch (error) {
            res
                .status(500)
                .send({ message: error.message || 'Erro ao listar todos os documentos' });
        }
    },

    findOne: async function (req, res) {
        try {

        } catch (error) {

        }
    },
    findPeriod: async function (req, res) {
        //burcar por periodo/mês
        const period = req.params.date
        try {
            const monthTransactions = await TransactionModel.find().where({ yearMonth: period })
            console.log(monthTransactions.length)
            res.send(monthTransactions)
        } catch (error) {
            res.send(error)
        }
    },
    update: async function (req, res) {
        if (!req.body) {
            return res.status(400).send({
                message: 'Dados para atualização vazio',
            });
        }

        const id = req.params.id;
        const body = req.body

        try {
            const transaction = await TransactionModel.findByIdAndUpdate({ _id: id }, body, { new: true })
            res.send(transaction)
        } catch (error) {
            res.status(500).send({ message: 'Erro ao atualizar a Transaction id: ' + id });
        }
    },
    remove: async function (req, res) {

        const id = req.params.id;

        try {

            const transaction = await TransactionModel.findByIdAndDelete({ _id: id })
            res.send('Deletado com sucesso!!!')
        } catch (error) {
            res
                .status(500)
                .send({ message: 'Nao foi possivel deletar o Grade id: ' + id });

        }


    }
}

