import React , {useState} from 'react';
// import { Col, Row, Button, Form, FormGroup, Label, Input } ;

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import axios from "axios";
import FormControl from 'react-bootstrap/FormControl'

import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import {useHistory} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
// toast.configure()
export default function Register() {

  const history = useHistory()

  //state 
  const [user , setUser]=useState({});
  

 const [flage , setFlage]= useState(false)
  const [success ,setSuccess] = useState(false)
  const [message ,setMessage] = useState("")

  

  const userChangeHandler =  (e) => {
    let name = e.target.name
    let value = e.target.value
     setUser({...user , [name] :value })
}

   const userOnsubmitHandler = (e)=>{
     console.log("hhhii")
    e.preventDefault()
 axios.post('http://localhost:4000/api/v1/user/',{
  name : user.name , email : user.email , password : user.password , address : user.address
}).then( data =>{
  console.log(data)
  setFlage(true)
  setMessage(data.data.message)
  setSuccess(true)
  this.state = {email: '',
password: ''};

  setTimeout(()=> history.push('/login'),2000)
}).catch(error =>{
  setMessage(error.response.data.message)
  setFlage(true)
  setSuccess(false)
  console.log(error)
})
   }

    return (
      <Container component="main" maxWidth="xs">
         { flage && 
         ( success ? <ToastContainer severity="success">{message}</ToastContainer> : 
       <ToastContainer severity="error">{message}</ToastContainer> )
    } 
         
         
 
      <Form style={{position: "fixed"}} onSubmit={(e) => userOnsubmitHandler(e)}>
        <Form.Group controlId="formBasicName" >
        <Form.Label>Name</Form.Label>
        <FormControl 
        autoComplete="fname"
        name="name"
        variant="outlined"
        required
        fullWidth
        id="firstName"
        label=" Name"
        autoFocus
         onChange={(e)=>userChangeHandler(e)} />
        </Form.Group>

      <Form.Group controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <FormControl 
         variant="outlined"
         required
         fullWidth
         id = "emailAddress"
         label="Email Address"
         name="email"
         autoComplete="email"
         onChange={(e)=>userChangeHandler(e)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <FormControl 
        
        type="password" placeholder="Password" onChange={(e)=>userChangeHandler(e)} />
      </Form.Group>
      <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <FormControl placeholder="1234 Main St" onChange={(e)=>userChangeHandler(e)} />
  </Form.Group>

      <Button variant="primary" type="submit"  >
        Submit
      </Button>
    </Form>
    </Container>
    )
}
