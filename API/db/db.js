
require('dotenv').config()
const mongoose = require('mongoose')

module.exports = {
connect : () => {
mongoose.connect(
process.env.DB_URI_ONLINE, {
    useUnifiedTopology : true,
    useNewUrlParser : true,
})
const connection = mongoose.connection
connection.once('open', () => {
    console.log('sucess')
})

connection.on('error', () => console.log('failed to connect'))
}
}