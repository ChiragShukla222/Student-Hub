const stuDataSave = async(req,res)=>{

      const stuData = await stuModel.create({
                rollno:rollno,
                name:name,
                city:city,
                fees:fees



      })

}


module.exports={
    stuDataSave
}