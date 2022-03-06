const { DataTypes } = require("sequelize")
const { db } = require("../utils/database")



const todo = db.define("todo", {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    statusTodo: {
        type: DataTypes.STRING(8),
        allowNull: false,
        defaultValue: "pending"
        // pending ,done
    },
    status: {
        type: DataTypes.STRING(8),
        allowNull: false,
        defaultValue: "active"
        // active ,deleted
    }
}, {
    timestamps: false
})

module.exports = { todo }