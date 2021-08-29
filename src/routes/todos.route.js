const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos.controller');
const { ensureAuth } = require('../middleware/auth');

// @desc Get todo follow id
// GET '/:id'
router.get('/:id', todosController.getById);

// @desc Get all todos
// GET '/'
router.get('/', todosController.getAll);


// @desc Create new todo
// POST '/create'
router.post('/create', todosController.create);

module.exports = router