const ToDo = require('../models/todoModels')
const mongoose = require('mongoose')

// get all ToDos
const getToDos = async (req, res) => {
    const toDos = await ToDo.find({}).sort({createdAt: -1})

    res.status(200).json(toDos)
}

// create a new ToDo
const createToDo = async (req, res) => {
    const { toDoText } = req.body

    let emptyFields = []

    if(!toDoText) {
        emptyFields.push('toDoText')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to db
    try {
        const toDo = await ToDo.create({ toDoText })
        res.status(200).json(toDo)
        console.log(toDoText)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
} 

// delete a todo
const deleteToDo = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such ToDo' })
    }

    const toDo = await ToDo.findOneAndDelete({_id: id})

    if (!toDo) {
        return res.status(400).json({ error: 'No such ToDo' })
    }

    res.status(200).json(toDo)
}

module.exports = {
    getToDos,
    createToDo,
    deleteToDo
}