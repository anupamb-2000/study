const express = require('express')
const { 
    getToDos,
    createToDo,
    deleteToDo
} = require('../controllers/toDoController')

const router = express.Router()

// GET all todos
router.get('/', getToDos)

// POST a new todo
router.post('/', createToDo)

// DELETE a todo
router.delete('/:id', deleteToDo)

module.exports = router