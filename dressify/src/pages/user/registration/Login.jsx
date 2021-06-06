import React , {useState} from 'react';
import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import FormGroup from 'react-bootstrap/FormGroup';
// import FormLabel from 'react-bootstrap/FormLabel';
// import InputGroup from 'react-bootstrap/InputGroup';

import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import axios from "axios"
import {useHistory} from "react-router-dom"
import Container from 'react-bootstrap/Container'

export default function Login(props) {
  const history = useHistory()

  const [user , setUser] = useState({})

  const changeUserHandler = ({target : {name , value}}) => setUser({...user , [name] : value})

  const OnsubmitHandler = (e)=>{
    e.preventDefault()
    console.log("click")
    axios.post('http://localhost:4000/api/v1/user/login',{ "email" : user.email ,"password" :user.password })
    .then( data =>{
      console.log(data)
      localStorage.setItem("token",data.data.token)
      props.loginFunction()
     history.push('/signIn')
    }).catch(err =>{
      console.log(err.response)
    })
       }
    return (
      <Container component="main" maxWidth="xs" onSubmit ={(e) =>OnsubmitHandler(e)}>
      <Form style={{position: "fixed"}} >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <FormControl type="email" placeholder="Enter email" 
         onChange = {(e)=>changeUserHandler(e)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword"  >
        <Form.Label>Password</Form.Label>
        <FormControl type="password" placeholder="Password" onChange = {(e)=>changeUserHandler(e) && HTMLInputElement} />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </Container>
);
}
