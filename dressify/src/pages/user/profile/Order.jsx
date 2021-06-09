import React, { Component } from 'react'
import { useHistory } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import "../../../assets/css/profile.css"
import { BsBag } from 'react-icons/bs';
import Table from 'react-bootstrap/Table'


export default function Order({ user, Login }) {

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
                                          <span className="card-title">My Orders</span>
                                          <h2 style={{ fontSize: 70 }}><BsBag /></h2>
                                          <p>You haven't placed an order yet.</p>
                                          <Button href="/">Shop Now</Button>

                                          <Table striped bordered hover>
                                                <thead>
                                                      <tr>
                                                            <th>#</th>
                                                            <th>Product</th>
                                                            <th>Total</th>
                                                            <th>Status</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      <tr>
                                                            <td>1</td>
                                                            <td>item1</td>
                                                            <td>638 S.R</td>
                                                            <td style={{fontWeight: 'bold'}}>Delivered</td>
                                                      </tr>
                                                    
                                                </tbody>
                                          </Table>
                                    </div>
                              </div>
                        </div>
                  </div>
            </Container>
      )

}
