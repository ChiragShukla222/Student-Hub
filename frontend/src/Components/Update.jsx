import React, { useEffect, useState } from 'react'
import { useNavigate} from "react-router-dom"
import axios from "axios"
import Studentdesign from '../Studentdesign';
const Update = () => {
  const[mydatad ,setData] = useState([]);
  let nav = useNavigate();
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
  const edit=(myid)=>{
    nav = (`/editdata/${myid}`)
  
    //create an new edit component for the edit //
  }
  const ans =mydatad.map((key)=>{
      return(
        <>
            <tr>
              <td>{key.rollno}</td>
              <td>{key.name}</td>
              <td>{key.city}</td>
              <td>{key.fees}</td>
              <td>
              <button onClick={()=>{edit(key._id)}}>Edit</button>
              <button onClick={()=>{myDel(key._id)}}>DEL</button>
              </td>
             </tr>
            

  
        </>
      )
  })
  
  return (
    <>
    <h1>update</h1>
    <table>
      <tr>
        <th>rollno</th>
        <th>name</th>
        <th>city</th>
        <th>fees</th>
             </tr>
      <tbody>
        {ans}
      </tbody>
    </table>
    </>
  )
}

export default Update
