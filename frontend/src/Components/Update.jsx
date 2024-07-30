import React, { useEffect, useState } from 'react'
import { Navigate,useNavigate} from "react-router-dom"
import axios from "axios"
import Table from 'react-bootstrap/Table';

const Update = () => {
  const[mydatad ,setData] = useState([]);
  let navigate = useNavigate();
  //navigate is just like an link in the layout but it directs us without clicking on any thing
  const loadData=()=>{
      let api = "http://localhost:9000/students/updatedisplay"
      axios.get(api).then((res)=>{
        console.log(res)
        setData(res.data)
      })
  }
  useEffect(()=>{
    loadData();
  },[])

  const myDel=(myid)=>{
    let api = "http://localhost:9000/students/updatedelete"
    axios.post(api,{myid:myid}).then((res)=>{
        alert("record deleted")
      loadData()
    })
  }
  const myedit=(myid)=>{
    navigate = (`/editdata}${myid}`)
    console.log("edit workig")
  
    //create an new edit component for the edit //
  }
  const answer =mydatad.map((edit)=>{
      return(
        <>
            <tr>
              <td>{edit.rollno}</td>
              <td>{edit.name}</td>
              <td>{edit.city}</td>
              <td>{edit.fees}</td>
              <td>
              <button onClick={()=>{myedit(edit._id)}}>Edit</button>
              {/* <a href="#" onClick={()=>{edit(keys._id)}}>edit
                 
                </a> */}
              <button onClick={()=>{myDel(edit._id)}}>DEL</button>
              </td>
             </tr>
            

  
        </>
      )
  })
  
  return (
    <>
    <h1>update</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#Roll number</th>
          <th>Student Name</th>
          <th>City</th>
          <th>Total Fees</th>
          <th>
          </th>
        </tr>
      </thead>
      <tbody>
      {answer}
        </tbody>
        </Table>   
    </>
  )
}

export default Update
