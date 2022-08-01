const route = require ('express').Router()
const userRoute = require(createUser, getAllUser, getSingleUser,updateUserById, deleteUser = require('../controllers/user');


route.post('/apl/vl/createuser', userRoute.createUser)
route.get('apl/vl/getUsers',userRoute.getAllUser)
route.get('apl/vl/getUsers/:id',userRoute.getSingleUser)
route.patch('apl/vl/updateuser/:id',userRoute.updateUser)
route.delete ('/apl/vl/deleteuser/:id',userRoute.updateUser)

module.exports = route