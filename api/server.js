
const { db } = require('./utils/database')

const { app } = require('./app')


db.sync().then(() => {
  console.log("database corriendo")

})
  .catch((error) => console.log(error))


app.listen(4000, () => {
  console.log("Server Corriendo")
})