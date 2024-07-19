const mongoose = require("mongoose")

const studentSchema =  new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fess:Number
})

module.exports=mongoose.model("student",studentSchema)