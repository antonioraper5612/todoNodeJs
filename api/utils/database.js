//conect to database
const dotenv = require('dotenv').config()

//BASE DATOS
const { Sequelize } = require('sequelize');



const db = new Sequelize({
    dialect: 'postgres',
    host: "localhost",
    username: "postgres",
    password: "skar5612",
    database: "post",
    port: 5432,
    logging: false

})



module.exports = { db }