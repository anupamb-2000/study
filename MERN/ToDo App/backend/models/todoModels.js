const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
    toDoText: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('ToDo', todoSchema)