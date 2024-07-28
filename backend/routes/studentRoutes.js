const express= require("express")
const route = express.Router();
const stuControllers = require("../controllers/studentController")
route.get("/",(req,res)=>{
    res.send("student route")
})

route.post("/stusave",stuControllers.stuDatasave)
route.get("/studata",stuControllers.stuDisplay)
route.post("/stusearch",stuControllers.stuSearch)
route.get("/updatedisplay",stuControllers.stuUpdate)
route.post("/updatedelete",stuControllers.stuDelete)
route.post("/editdisplay",stuControllers.stuEdit)

module.exports=route