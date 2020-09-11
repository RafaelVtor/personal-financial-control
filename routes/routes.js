const express = require('express');
const transactionRouter = express.Router();

const controller = require('../services/transactionService.js')

console.log(controller)

transactionRouter.post('/addValue', controller.addValue);
transactionRouter.get('/findAll', controller.findAll)
transactionRouter.get('/findOne/:id', controller.findOne);
transactionRouter.get('/period/:date', controller.findPeriod)
transactionRouter.put('/update/:id', controller.update);
transactionRouter.delete('/remove/:id', controller.remove);
// transactionRouter.delete('/grade', controller.removeAll);

module.exports = transactionRouter;
