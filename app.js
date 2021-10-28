const express= require("express")
const app = express()
const db = require("./db/models")

app.use(express.json())



db.sequelize.authenticate();
app.listen(8080);