const mongoose=require("mongoose")

const salesSchema=new mongoose.Schema({
     idVoiture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'car',
  },
  idClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  idVendeur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },     
  purchaseDate: Date,              
})
const salesModel=new mongoose.model("sales", salesSchema)
module.exports=salesModel
