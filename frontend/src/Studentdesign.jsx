import React from 'react'

const Studentdesign = (props) => {
  return (
   <>
        <tr>
                <td>{props.rollno}</td>
                <td>{props.name}</td>
                <td>{props.city}</td>
                <td>{props.fees}</td>


        </tr>
   </>
  )
}

export default Studentdesign
