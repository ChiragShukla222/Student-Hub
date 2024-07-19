const express =require("express")
const app = express();
 const mongoose = require("mongoose")
const PORT=8000
const stuRoute = require("./routes/studentRoutes")
const bodyparser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyparser.json())
app.use("/students",stuRoute)
app.listen(PORT,()=>{
    console.log(`Port ${PORT}!!!`)
})