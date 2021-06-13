import React, { useState, useEffect } from 'react';


import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import axios from "axios";
import FormControl from 'react-bootstrap/FormControl'

import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import { useHistory } from "react-router-dom";
import { Toast } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import Toast from '/Users/manal/Desktop/SEI/projects/Project-4/dressify/src/components/toast/Toast.jsx';
import { createUseStyles } from 'react-jss'
// toast.configure()
import checkIcon from '../../../assets/check.svg';
import errorIcon from '../../../assets/error.svg';
import infoIcon from '../../../assets/info.svg';
import warningIcon from '../../../assets/warning.svg';

import { useParams } from 'react-router-dom'
import style from './style.css'












const useStyles = createUseStyles({
  success: {
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
  danger: {
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
export default function UpdateRetailer(props) {

  const history = useHistory()
  const classes = useStyles();





  const [flage, setFlage] = useState(false)

  const [success, setSuccess] = useState(false)
  // const [show, setShow] = useState(false);
  const [message, setMessage] = useState("")



  const [User, setUser] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [Image, setImage] = useState([]);
  const [bio, setBio] = useState('');



  //  const [flage , setFlage]= useState(false)

  //   const [success ,setSuccess] = useState(false)
  // const [show, setShow] = useState(false);







  const Userid = localStorage.getItem("user_id")
  console.log(Userid)



  const [items, setItems] = useState([]);

  const userOnsubmitHandler = (e) => {

    e.preventDefault()

    axios.post('/api/v1/user/updateRetailer/' + Userid,
      { name, email, address, Image })

      .then(data => {

        setFlage(true)
        setMessage(data.data.message)
        setSuccess(true)
        console.log("crashinggg")
        console.log(data)

        // localStorage.setItem("token", token)
        history.push('/MyAccount')
        // loginFunction()
        //   history.push("/")
        // localStorage.setItem("token",data.data.token)
      }).catch(err => {
        console.log(err)
        setMessage(err.response.data.message)
        setFlage(true)
        setSuccess(false)
        console.log(err)

      })

  }




  const id = localStorage.getItem("user_id")


  useEffect(() => {
    console.log(id)
    console.log("manal saud alotaibi")

    axios.get(`/api/v1/user/updateRetailer/${id}`)

      .then((data) => {
        setName(data.data.name);

        setImage(data.data.Image)
        console.log(data.data.Image)
        setAddress(data.data.address);
        setEmail(data.data.email);

        //  userDetail(data.data);
      })

  }, [])



  return (


    <Container component="main" maxWidth="xs">
      { flage &&
        (success ? <Toast className={classes.success} severity="success" autoClose={5000}  >{message}</Toast> :
          <Toast className={classes.danger} severity="error">{message}</Toast>)
      }





      <div className="card card-post" data-aos="fade-up">

        <Form onSubmit={(e) => userOnsubmitHandler(e)} >



          <Form.Group>
          <Form.Label>Profile link:</Form.Label>
            <Form.Control type="text" name="image" placeholder="Enter Profile link" onChange={(e) => setImage(e.target.value)} />
            {/* onChange={(e) => itemChangeHandler(e)} */}
          </Form.Group>

          <Form.Group controlId="formBasicName1" >
            <Form.Label>Name:</Form.Label>
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
            <Form.Label>Email:</Form.Label>
            <FormControl
              variant="outlined"
              required
              fullWidth
              id="emailAddress"
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
            <Form.Label>Address:</Form.Label>
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

          <Button variant="primary" type="submit"  >
            update
   </Button>
          {/* <Button 
        onClick={()=> logOut()}
      variant="outlined">log Out </Button> */}
        </Form>
      </div>
    </Container>

  )


}

