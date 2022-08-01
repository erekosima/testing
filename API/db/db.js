
require('dotenv').config()
const mongoose =require('mongoose')

module.exports= {
connect : () => {
mongoose.connect(
process.env.Db_UTI_ONLINE,{
    useUnifiedTopology : true,
    useCreteIndex :true ,
    useNewUrlParser : true,
    useFindAndModify :false
})
const connection = mongoose.connection
connection.once('open',() => {
    console.log('sucess')
}

)

connection.on('error',() => console.log('failed to connect'))


}
}