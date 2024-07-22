const express = require("express")
const app = express()
const mongoose =require("mongoose")
require("dotenv").config()

const PORT = process.env.PORT
const stuRoute = require("./routes/studentRoutes")


const cors = require("cors")
const bodyparser = require('body-parser')


// to set data base
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/mern").then(()=>{
    console.log("database connected")
})
// middle ware used with post when req.body is used to get the data
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use("/students",stuRoute)
app.listen(PORT,()=>{
    console.log("running on 9000")
})