const express = require('express');
const { expensesController } = require('../controllers/expenses.controller.js');

const router = express.Router();

router.get('/', expensesController.getAll);

router.post('/', express.json(), expensesController.create);

router.delete('/:id', expensesController.deleteOne);

router.get('/:id', expensesController.getOne);

router.put('/:id', express.json(), expensesController.updatePut);

router.patch('/:id', express.json(), expensesController.updatePatch);

module.exports = router;
