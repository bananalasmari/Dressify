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
import {useHistory, useParams} from "react-router-dom"
import Container from 'react-bootstrap/Container'

export default function NewPassword(props) {
  const history = useHistory()


  const [user , setUser] = useState({})
  
   const {token} = useParams()
  console.log(token)
  const userChangeHandler =  (e) => {
    let name = e.target.name
    let value = e.target.value
     setUser({...user , [name] :value })
     console.log("hello")
}

  const OnsubmitHandler = (e)=>{
    e.preventDefault()
 
    console.log(token)
    console.log("click")
    console.log("password :"+ user.password)
    axios.post('http://localhost:4000/api/v1/user/reset/'+ token ,{ 
        "password" : user.password })
      
    
    .then( data =>{
    
    //  props.loginFunction()
      console.log("dressify")
 
    localStorage.setItem("token", data.data.token);
    history.push('/login')
    //  history.push('/signIn')
    }).catch(err =>{
      console.log(err.response)
    })
       }
    return (
        <Container component="main" maxWidth="xs" >
           <div className="card card-auth">
        <Form  onSubmit ={(e) =>OnsubmitHandler(e)} >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>update Password</Form.Label>
          <FormControl type="password" placeholder="Enter password" 
           variant="outlined"
           margin="normal"
           required
           fullWidth
  
           onChange = {(e)=>userChangeHandler(e)}
           
           label="password"
           name="password"
           autoComplete="password"
           autoFocus
           />
          
        </Form.Group>
      
      
        <Button variant="primary" type="submit"  >
          Reset password
        </Button>
      </Form>
      </div>
      </Container>
);
}
