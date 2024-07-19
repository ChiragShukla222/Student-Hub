import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Insert = () => {

        const[input,setInput] =useState({})
        
        const handleInput=(e)=>{
          let name= e.target.name 
          let value = e.target.value 
          setInput(values=>({...values,[name]:value}))
          console.log(input)
        }

        const handleSubmit=()=>{
          let api="http://localhost:8000/students/stusave"
          axios.post(api,input).then((res)=>{
            console.log(res)
            alert("data saved")
          })

        }


  return (
    <>

           <div className="styleoffrom">
              {/* roll no */}
             
              <h1>Insert Student Record</h1>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Roll number</Form.Label>
        <Form.Control type="text" onChange={handleInput} name="rollno" value={input.rollno}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      
      {/* name */}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" onChange={handleInput} name="name" value={input.name}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      {/* city */}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" onChange={handleInput} name="city" value={input.city} />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      

      {/* fees */}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Fees</Form.Label>
        <Form.Control type="text" onChange={handleInput} name="fees" value={input.fees} />
        <Form.Text className="text-muted">
      
        </Form.Text>
      </Form.Group>

     


      {/* btn */}
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
           </div>

    </>
  )
}

export default Insert
