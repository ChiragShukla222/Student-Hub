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
const stuUpdate =async(req,res)=>{
    console.log("function call ok")
    const mydatad = await stuModel.find();
    res.status(200).json(mydatad)

}
const stuDelete=async(req,res)=>{
    console.log("del fucntion called")
    const myid = req.body.myid;
    const myres = await stuModel.findByIdAndDelete(myid)
    res.status(200).json(myres)
    
}
const stuEdit =async(req,res)=>{
    console.log("edit function ")
    
    const id =req.body.id;

    const mydatad = await stuModel.findById(id)
    
    res.status(200).json(mydatad)
}
module.exports={
    stuDatasave,
    stuDisplay,
    stuSearch,
    stuUpdate,
    stuDelete,
    stuEdit
}