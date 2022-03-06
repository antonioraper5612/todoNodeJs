
const express = require("express")

const cors = require('cors')

const { todoRouter } = require('./router/todo.router')


const app = express()
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())

app.use("/api/v1/todo", todoRouter)

module.exports = { app }