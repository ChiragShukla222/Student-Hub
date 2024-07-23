const stuModel = require("../models/studentModel")

const stuDatasave = async(req,res)=>{
    const {rollno , name , city ,fees} = req.body;
    const stuData = await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    
    })
    res.status(200).send(stuData)
}
const stuDisplay =async(req,res)=>{
    // console.log("mu ddddd");
    // res.send("hiii")

    const mydata = await stuModel.find()
    res.status(200).json(mydata)
}
const stuSearch=async(req,res)=>{
    // console.log("working search")
    // res.send("searching working")
    
    // console.log(rollno)
    // res.send("ok")
    const rollno = req.body.rollno;
    const myans = await stuModel.find({rollno:rollno});
    console.log(myans)
    
    res.status(200).json(myans)
}
module.exports={
    stuDatasave,
    stuDisplay,
    stuSearch
}