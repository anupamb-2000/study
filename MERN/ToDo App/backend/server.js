require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todos')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/todos', todoRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port', process.env.PORT)
    })
 })
 .catch((err) => {
    console.error(err)
 })