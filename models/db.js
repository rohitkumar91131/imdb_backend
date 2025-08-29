require("dotenv").config();

const mongoose = require("mongoose")

async function connectMongoose(){
    await mongoose.connect(process.env.DB_URL)
}

connectMongoose()
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>{
    console.log("Error in db connection " +err.message)
})