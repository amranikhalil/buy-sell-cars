const express = require('express');
const mongoose = require('mongoose')
const cors =require('cors')
const multer=require('multer')

const app = express();
const userModel=require('./model/user')
const carsModel=require('./model/cars')

app.use(express.json())
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
mongoose.connect("mongodb://localhost:27017/user")


  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../src/images/cars')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
  app.post('/upload-car', upload.single('image'), function (req, res, next) {
    const {Brand,Model,Motorisation,Color}=req.body
    console.log(req.body)
    res.send("uploaded")
    const imageName=req.file.filename
    try{
        carsModel.create({image: imageName,Brand,Model,Motorisation,Color})

    }catch(error){
        res.send('not working')
    }
  })
  
  app.get('/get-carsinfo',(req,res)=>{
      carsModel.find({}).then(data=>{
        res.send(data)
      })
  })


app.post('/subscribe',(req,res)=>{
    userModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})


app.post('/login',(req,res)=>{
    const {email,password}=req.body
    userModel.findOne({email:email})
    .then(user=>{
        console.log(user)
        if(user){
            if(user.password===password){
                res.json({
                    success:true,
                    userType:user.userType
                })
                return;
            }else{
                res.json("password incorect")
                return
            }
        }res.json("no record existing")
    })
})

app.listen(3001,()=>{
    console.log("server is running")
})