const { todo } = require("../models/todo.model")

//IMPORTACIONES UTULS
const { catchAsync } = require("../utils/catchAsync")
const { filterObj } = require("../utils/filterObj")

exports.todoAll = catchAsync(async (req, res, next) => {
    const resTodoAll = await todo.findAll({ where: { statusTodo: "pending", status: "active" } })
    res.status(200).json({ data: resTodoAll, status: "success" })
})


exports.createTodo = catchAsync(async (req, res, next) => {

    const { content } = req.body
    if (!content) {
        res.status(404).json({ status: "Error content value undefined" })
        return
    }
    const newTodo = await todo.create({
        content,
        statusTodo: "pending"
    })
    res.status(200).json({ data: newTodo, status: "success" })
})

exports.updateTodo = catchAsync(async (req, res, next) => {
    const { id } = req.params

    const data = filterObj(req.body, "content", "status")

    const searchTodo = await todo.findOne({ where: { id } })
    if (!searchTodo) {
        res.status(404).json({ status: "Error", message: "Cant update todo, invalid ID" })
        return
    }

    searchTodo.update({ ...data })
    res.status(204).json({ status: "success" })
})


exports.deleteTodo = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const searchTodo = await todo.findOne({ where: { id, status: "active" } })
    if (!searchTodo) {
        res.status(404).json({ status: "Error", message: "Cant delete todo, invalid ID" })
        return
    }
    searchTodo.update({ status: 'deleted' })
    res.status(204).json({ status: "success" })
})