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
import { useParams } from 'react-router-dom'

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
export default function Profile({ user, loginFunction, test }) {


  console.log(user)


  const logOut = () => {
    localStorage.removeItem("token")
    loginFunction()
    history.push("/")

  }

  const history = useHistory()
  const classes = useStyles();


  const { token } = useParams()

  console.log(token)
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const { userid } = useParams()

  const [flage, setFlage] = useState(false)

  const [success, setSuccess] = useState(false)
  // const [show, setShow] = useState(false);
  const [message, setMessage] = useState("")





  console.log(user)

  const data = localStorage.getItem("user_id")
  console.log(data)


  const userOnsubmitHandler = (e) => {

    e.preventDefault()

    axios.post('http://localhost:4000/api/v1/user/getUserDetails/' + data,
      { name, email, address })
      .then(data => {
        console.log(data)
        // localStorage.setItem("token",data.data.token)
      }).catch(err => {
        console.log(err)


      })

  }

  useEffect(() => {
    if (user) {
      console.log(user.name)
      setEmail(user.email);
      setName(user.name);
      setAddress(user.address);
    }

  }, [user])



  return (




    <Container component="main" maxWidth="xs">
      <div className="card user-detils">
        <div className="row">
          <div className="col-lg-4 col-sm-6" data-aos="fade-up">
            <ul className="user-list">
              <h3 className="user-title">My Account</h3>
              <a href="/Order"><li>My Orders</li></a>
              <a href="/MyAccount"><li>My Profile</li></a>
              <a href="/Credit"><li>Credit / Debit Cards</li></a>
            </ul>
          </div>
          <div className="col-lg-8 col-sm-6" data-aos="fade-up">
            <div className="card-body">
              <span className="card-title">YOUR DETAILS</span>
              <div className="row">
                <div className="col-md-12 col-sm-6">
                  <p>Name: <span>{name}</span></p>
                </div>
                <div className="col-md-12 col-sm-6">
                  <p>Email: <span>{email}</span></p>
                </div>
                <div className="col-md-12 col-sm-6">
                  <p>Address: <span>{address}</span></p>
                </div>

                <div className="col-md-12 col-sm-6">
                <Button className="btn-update" href="/UpdateProfile">Update Profile</Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </Container>

  )


}
