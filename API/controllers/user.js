const User =require('../models/userSchema')


exports.createUser = async (req,res) => {
    try{
let userExist = await User.findOne ({email : req.body.email})
if (userExist){
    return res.json({
        message: 'Error',
        response : 'user already exist'
    })
}else{
    let newUser = new User(req.body)
    let data = await newUser.save()
    return res.send({
        message:'success',
      userDate : data
})
}
    }
catch(err){
    console.log(err)
    return res.status(500).send({
        msg: err.message,
        status: 500
    })
}
}

exports.getAllUser = async(req,res) => {
let getUsers = await User.find ({})
return res.json({
    message : "sucess",
    response : getUsers
})

}
exports.getSingleUser = async (req,res)=>{
let getUsers = await User.findOne ({"_id": req.params.id})
return res.json({
    message : "Sucess",
    response : getUsers
})
}
 
exports.updateUserById = async (req,res) =>{
    try{
        let {names,email,country}= req.body
        let updated = await User.findByIdAndUpdate(req.params.id,{names , email , country },{new :true})
        return res.json ({
            message : "sucess",
            response :updated
        })
    }
    catch (err){
        return res.json({
            message : "err.message",
            response :"fail to update"
        })
    }
}
exports.deleteUser = async (req,res)=>{
    try{
        let deleteuser = await User.findByIdAndDelete ({_id: req.params.id})
        return res.json({
            message: "sucess",
            response:deleteuser
        })
    } catch (err){

    }
}