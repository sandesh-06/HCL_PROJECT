const mongoose = require('mongoose')
const mongoURI = "mongodb://0.0.0.0:27017/project+"

//to connect to mongoose
const connectToMongo = async ()=>{
    await mongoose.connect(mongoURI);
    console.log("connected to mongo")
}

//export the function
module.exports = connectToMongo