const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:String,
    surname:String,
    email:String,
    password:String,
    userType:String,
    active:String
})
const userModel=new mongoose.model("users",userSchema)
module.exports=userModel
