const mongoose=require("mongoose")

const carsSchema=new mongoose.Schema({
    id:String,
    idV:String,
    Brand:String,
    Model:String,
    Motorization:String,
    Color:String,
    image:String,
    Price:Number,
    isCommanded:String,        
})
const carsModel=new mongoose.model("car",carsSchema)
module.exports=carsModel
