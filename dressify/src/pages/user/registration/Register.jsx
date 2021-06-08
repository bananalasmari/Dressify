import React , {useState} from 'react';
// import { Col, Row, Button, Form, FormGroup, Label, Input } ;

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import axios from "axios";
import FormControl from 'react-bootstrap/FormControl'

import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import {useHistory} from "react-router-dom";
import { Toast } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import Toast from '/Users/manal/Desktop/SEI/projects/Project-4/dressify/src/components/toast/Toast.jsx';
import {createUseStyles} from 'react-jss'
// toast.configure()
import checkIcon from '../../../assets/check.svg';
import errorIcon from '../../../assets/error.svg';
import infoIcon from '../../../assets/info.svg';
import warningIcon from '../../../assets/warning.svg';

const useStyles = createUseStyles({
  success:{
    display: 'block',
      width: 700, 
     padding: 30,
     position: "fixed",
     top: "10px",
    
     backgroundColor: '#5cb85c',
     icon: checkIcon,
    
     right: "10px",
   
     zIndex: 9999,
     color: 'black',
  
  },
  danger :{
    display: 'block',
      width: 700, 
     padding: 30,
     position: "fixed",
     top: "10px",
     right: "10px",
     backgroundColor: '#d9534f',
     backgroundImage: errorIcon,
     zIndex: 9999,
     color: 'black',
  
  }
  })


export default function Register() {

  const history = useHistory()
  const classes = useStyles();
  //state 
  const [user , setUser]=useState({});
  

 const [flage , setFlage]= useState(false)

  const [success ,setSuccess] = useState(false)
  // const [show, setShow] = useState(false);
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
  console.log(data)
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
         ( success ? <Toast className={classes.success} severity="success" autoClose={5000}  >{message}</Toast> : 
       <Toast className={classes.danger} severity="error">{message}</Toast> )
    } 
         
         
 
      <Form style={{position: "fixed"}} onSubmit={(e) => userOnsubmitHandler(e)}>
        <Form.Group controlId="formBasicName1" >
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

      <Form.Group controlId="formBasicEmail1" >
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
    
      <Form.Group controlId="formBasicPassword1">
        <Form.Label>Password</Form.Label>
        <FormControl 
         variant="outlined"
         margin="normal"
         required
         fullWidth
         name="password"
         label="Password"
         type="password"
         id="password"
         autoComplete="current-password"
       placeholder="Password" onChange={(e)=>userChangeHandler(e)} />
      </Form.Group>
      <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <FormControl placeholder="1234 Main St" 
     variant="outlined"
     margin="normal"
     required
     fullWidth
     name="address"
     label="address"
     type="address"
     id="address"
     autoComplete="current-address"
    
    
    onChange={(e)=>userChangeHandler(e)} />
  </Form.Group>

      <Button variant="primary" type="submit"  >
        Submit
      </Button>
    </Form>
    </Container>
    )
}
