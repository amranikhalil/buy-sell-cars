const { mongoose } = require ('mongoose');

const url = "mongodb+srv://khalilos:admin@cluster0.0spclay.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version


const connectionParams={
  useNewUrlParser:true,
  useUnifiedTopology:true
}
mongoose.connect(url).then(()=>{
  console.log("connection works")
}).catch((e)=>{
  console.log(e)
})
