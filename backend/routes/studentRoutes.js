const express = require("express")
const route = express.Router();
 
const stuContollers=require("../controllers/studentController")
route.post("/stusave",stuContollers.stuDataSave)


module.export=route