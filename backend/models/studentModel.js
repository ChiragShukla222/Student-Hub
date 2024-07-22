const mongoose = require("mongoose")

const studentSchmea = new mongoose.Schema({
        rollno:Number,
        name:String,
        city:String,
        fees:Number

})

module.exports = mongoose.model("students",studentSchmea)