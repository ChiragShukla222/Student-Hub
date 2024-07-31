import axios from "axios"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

const Editdata = () => {
  const [mydata , setMydata] =useState({})

    
  const loadData=()=>{
    let api = "http://localhost:9000/students/editdata"
    axios.post(api).then((res)=>{
         // setMydata(res)
          //console.log("working res")
    })
  }
  useEffect(()=>{
    loadData();
  })
  return (
    <div>
      edit data page
    </div>
  )
}

export default Editdata
