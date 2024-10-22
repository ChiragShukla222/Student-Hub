import React from 'react'
import Table from 'react-bootstrap/Table';
import {useState , useEffect} from "react"
import axios from "axios"
import Studentdesign from '../Studentdesign';


const Display = () => {
  const [mydata , setMydata]= useState([])
  const loadData =async()=>{
    let url= "http://localhost:9000/students/studata"
    let response= await axios.get(url);
    // axios.get(url).then((res)=>{
      console.log(response.data)
    setMydata(response.data)
    // })
  }
  useEffect(()=>{
    loadData()
  },[])
  

  const ans = mydata.map((student)=><Studentdesign
      key = {student.rollno}
        rollno={student.rollno}
        name={student.name}
        city={student.city}
        fees={student.fees}
  />)
 
  return (
    <>
    <h1 style={{color:"light-blue",marginTop:"25px",textAlign:"center"}}>Student's Data</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>ROLL-NO </th>
          <th>NAME</th>
          <th>CITY</th>
          <th>FEES</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </Table>

    </>
  )
}

export default Display
