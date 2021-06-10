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
      )

}