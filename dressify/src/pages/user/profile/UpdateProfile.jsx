import React , {useState , useEffect} from 'react';


import withReactContent from 'sweetalert2-react-content'

import Card from 'react-bootstrap/Card'


import "../../../assets/css/auth.css";
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
export default function UpdateProfile({user ,loginFunction , test }) {


  console.log(user)
  
  
  const logOut = () => {
    localStorage.removeItem("token")
    loginFunction()
    history.push("/")

}
  
    const history = useHistory()
    const classes = useStyles();
    
    
    const {token} = useParams()

      console.log(token)
   const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
   
    const {userid} = useParams()

   const [flage , setFlage]= useState(false)
  
    const [success ,setSuccess] = useState(false)
    // const [show, setShow] = useState(false);
    const [message ,setMessage] = useState("")
    
  


 
console.log(user)

const data = localStorage.getItem("user_id")
console.log(data)

  
     const userOnsubmitHandler = (e)=>{
   
    

      e.preventDefault()

      axios.post('/api/v1/user/getUserDetails/' + data,
      {name  , email  , address })
      .then( data =>{
      console.log(data)
      setFlage(true)
      setMessage(data.data.message)
      setSuccess(true)
      setTimeout(() => history.push('/MyAccount'), 2000)
      // history.push('')
    }).catch(err=>{
      setMessage(err.response.data.message)
      setFlage(true)
      setSuccess(false)
console.log(err)


    })
     
  }

  useEffect(() => {
    console.log(data)
    
  axios.get(`/api/v1/user/UserDetails/${data}`)

    .then((data) => {
     setName(data.data.name);
   
     setAddress(data.data.address);
     setEmail(data.data.email);
    //  userDetail(data.data);
    })
    .catch((error) => console.error(error));
}, []);
   
  
    return (
  
        


      <Container component="main" maxWidth="xs">
      { flage && 
      ( success ? <Toast className={classes.success} severity="success"  >{message} </Toast> : 
    <Toast className={classes.danger} severity="error">{message}</Toast> )
 } 
      
    
    
            <div className="card card-post" data-aos="fade-up">
            <span class="card-title">Update Profile details:</span>

   <Form   onSubmit={(e) => userOnsubmitHandler(e)}>
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
     value={name}
     onChange={(e) => setName(e.target.value)}
  >
        
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
      value={email}
      autoComplete="email"
      onChange={(e) => setEmail(e.target.value)}
    >
        
          </FormControl>
     <Form.Text className="text-muted">
       We'll never share your email with anyone else.
     </Form.Text>
   </Form.Group>
 
  
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
  value={address}
  onChange={(e) => setAddress(e.target.value)}
    />

</Form.Group>

<Button className="btn-update" type="submit">Update Profile</Button>
   {/* <Button 
        onClick={()=> logOut()}
      variant="outlined">log Out </Button> */}
 </Form>
 </div>
 </Container> 

    )


    }
