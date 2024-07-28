import React from 'react'
import {useState,useEffect} from "react"
const Editdata = () => {
    const [mydata,setMydata] =useState([])

    const loadData=()=>{
        let api = "http://localhost:9000/students/editdisplay"
        axios.post(api).then((res)=>{
            
        })
    }
    useEffect(()=>{
                loadData();
    },[])
  return (
    <>
    </>
  )
}

export default Editdata
