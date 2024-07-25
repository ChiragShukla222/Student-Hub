import React, { useState } from 'react'
import axios from "axios"
import Table from 'react-bootstrap/Table'

const Search = () => {
  const[rollno , setRollno] = useState("");
    const[mydata,setMydata]= useState([])
    const handleSubmit=()=>{
          let api="http://localhost:9000/students/stusearch"
          axios.post(api,{rollno:rollno}).then((res)=>{
            setMydata(res.data)
          })
    }

    const ans =mydata.map((key)=>{
      return(
        <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>

            </tr>
        </>
      )
    })


  
    
  
  return (
    <>
   <div className="searchstyle">
   <h1>Search Student</h1>
    Enter Rollno :<input type="text" value={rollno}
    onChange={(e)=>{setRollno(e.target.value)}}/>
    <br /> <br />
    <button onClick={handleSubmit}>search</button>
  
   </div>
   <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rollno</th>
          <th> Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
   </Table>
    
    </>
  )
}

export default Search
