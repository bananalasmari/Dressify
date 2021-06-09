import React, { Component } from 'react'
import { useHistory } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import "../../../assets/css/profile.css"
import { BsBag } from 'react-icons/bs';


export default function Address({ user, Login }) {

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
                                <a href="/Order"><li>My Orders</li></a>
                                <a href="/Profile"><li>My Profile</li></a>
                                <a href="/Address"><li>My Address Book</li></a>
                                <a href="/Credit"><li>Credit / Debit Cards</li></a>
                          </ul>
                     </div>
                  
                     <div className="col-lg-8 col-sm-6" data-aos="fade-up">
                           <div className="card-body">
                           <span className="card-title" >My Address Book</span>
                                 <div className="row">
                                <div className="col-lg-12 col-sm-6"><span>Address: </span> Riyadh, Saudi Arabia</div>
                                 </div>
                                
                                
                                 
                           </div>
                     </div>
                     </div>
                     </div>
            </Container>
      )

}
