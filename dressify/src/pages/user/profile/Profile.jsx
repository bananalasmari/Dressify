import React , {useState , useEffect} from 'react';


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

import {useParams} from 'react-router-dom'

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
export default function Profile(props) {

  const token = localStorage.getItem("jwtToken");
  

  
    const history = useHistory()
    const classes = useStyles();
    //state 
    // const [user , setUser]=useState({});
    

    const [user , setUser]=useState({});
   
    const {userid} = useParams()

   const [flage , setFlage]= useState(false)
  
    const [success ,setSuccess] = useState(false)
    // const [show, setShow] = useState(false);
    const [message ,setMessage] = useState("")
  
    const userChangeHandler =  (e) => {
      let name = e.target.name
      let email = e.target.email
      let address = e.target.address
      let value = e.target.value
       setUser({...user , [name] :value , [email] :value , [address] :value })
  }
   

 



  // useEffect(() => {
  //   if (userid) {
  //     console.log(userid.name)
  //     setEmail(userid.email);
  //     setName(userid.name);
  //     setAddress(userid.address);
  //   }
   
  // }, [userid])

  
     const userOnsubmitHandler = (e)=>{
       console.log("data")
    

      e.preventDefault()
console.log(token._id)
      axios.put('http://localhost:4000/api/v1/user/getUserDetails/' + user._id,
      {name : user.name , email : user.email , address : user.address }, {
      headers: {
        Authorization: 'Bearer ' + user.token
      }
    }).then( data =>{
      console.log(data)
      localStorage.setItem("token",data.data.token)
    }).catch(err=>{
console.log(err)


    })
     




      // dispatch(update({ userId: userInfo._id, email, name, address }))


  //  axios.get('http://localhost:4000/api/v1/user/getUserDetails/',{ 
  //   name : user.name , email : user.email , address : user.address
  // }).then( data =>{
  //   console.log(data)
  //   setFlage(true)
  //   setMessage(data.data.message)
  //   setSuccess(true)
  //   console.log(data)
  //   // setTimeout(()=> history.push('/login'),2000)
  // }).catch(error =>{
  //   setMessage(error.response.data.message)
  //   setFlage(true)
  //   setSuccess(false)
  //   console.log(error)
  // })
     }
  
    return (
        <Container component="main" maxWidth="xs">
        {/* { flage && 
        ( success ? <Toast className={classes.success} severity="success" autoClose={5000}  >{message}</Toast> : 
      <Toast className={classes.danger} severity="error">{message}</Toast> )
   }  */}
        
        

     <Form style={{position: "fixed"}} onSubmit={(e) => userOnsubmitHandler(e)}>
       <Form.Group controlId="formBasicName1" >
       <Form.Label>  </Form.Label>
       <FormControl 
       autoComplete="fname"
       name="name"
       variant="outlined"
       required
       fullWidth
       id="firstName"
       label=" Name"
       autoFocus
       value={user.name}
       onChange={(e)=>userChangeHandler(e)} >
             
            </FormControl>
       
       </Form.Group>

     <Form.Group controlId="formBasicEmail1" >
       <Form.Label> </Form.Label>
       <FormControl 
        variant="outlined"
        required
        fullWidth
        id = "emailAddress"
        label="Email Address"
        name="email"
        value={user.email}
        autoComplete="email"
        onChange={(e)=>userChangeHandler(e)}  >
            
            </FormControl>
       <Form.Text className="text-muted">
         We'll never share your email with anyone else.
       </Form.Text>
     </Form.Group>
   
     {/* <Form.Group controlId="formBasicPassword1">
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
     </Form.Group> */}
     <Form.Group controlId="formGridAddress1">
   <Form.Label> </Form.Label>
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
    value= {user.address}
   
    onChange={(e)=>userChangeHandler(e)}  />
  
 </Form.Group>

     <Button variant="primary" type="submit"  >
      update
     </Button>
   </Form>
   </Container> 
    )
import React, { Component } from 'react'
import { useHistory } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import "../../../assets/css/profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Profile({ user, Login }) {

      const history = useHistory()

      const logOut = () => {
            localStorage.removeItem("token")
            Login()
            history.push("/")

      }
      return (
            <Container component="main" maxWidth="xs">
                  <div className="card user-detils">
                    <div className="row">
                    <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                          <ul className="user-list">
                                <h3 className="user-title">My Account</h3>
                                <a href="/Order"><li> My Orders</li></a>
                                <a href="/Profile"><li>My Profile</li></a>
                                <a href="/Address"><li>My Address Book</li></a>
                                <a href="/Credit"><li>Credit / Debit Cards</li></a>
                          </ul>
                     </div>
                     <div className="col-lg-8 col-sm-6" data-aos="fade-up">
                           <div className="card-body">
                                 <span className="card-title">Your recent orders</span>
                                 <p>You don’t have any recent orders. For your purchase history.</p>
                           </div>
                           <div className="card-body">
                           <span className="card-title" >Your Details</span>
                                 <div className="row">
                                <div className="col-lg-4 col-sm-6"><span>Name: </span> Banan</div>
                                <div className="col-lg-6 col-sm-6"><span>Email Address:  </span>Banan@banan.com</div>
                                 </div>
                                
                                
                                 
                           </div>
                     </div>
                     </div>
                     </div>
            </Container>
);

}}