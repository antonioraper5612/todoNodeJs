const express = require("express")
const router = express.Router()


//CONTROLADOR
const { todoAll, createTodo, updateTodo, deleteTodo } = require("../controller/todo.controller")

router.route("/").get(todoAll).post(createTodo)

router.route("/:id").patch(updateTodo).delete(deleteTodo)




module.exports = { todoRouter: router }