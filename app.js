
let express = require("express")
let app = express()

let cors = require("cors")

app.use('/', (req, res) => "Welcome")

module.exports = app