const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/Shopping'

const connectMongo=async()=>{
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo !");
}

module.exports = connectMongo;