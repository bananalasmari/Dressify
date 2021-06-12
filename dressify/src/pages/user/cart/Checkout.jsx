import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'



export default function Cart() {
      return (
            <Container component="main" maxWidth="xs">
                  <div className="card user-detils">
                        <div className="row">
                              <div className="col-lg-6 col-sm-6" data-aos="fade-up">
                                    <ul className="user-list">
                                          <h3 className="user-title">My Cart</h3>
                                          <p>Order Summary</p>
                                          <Table striped bordered hover>
                                                <thead>
                                                      <tr>
                                                            <th>#</th>
                                                            <th></th>
                                                            <th>Product</th>
                                                            <th>QTY</th>
                                                            <th>Total</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      <tr>
                                                            <td>1</td>
                                                            <td> <Card.Img style={{width: 100}} src="https://ounass-prod1.atgcdn.ae/small_light(p=zoom,of=webp,q=65)/pub/media/catalog/product/2/1/214217820_black_in.jpg?1610642647.2564"></Card.Img></td>
                                                            <td>Fendi Dress</td>
                                                            <td>2</td>
                                                            <td>1800 S.R</td>
                                                      </tr>
                                                    
                                                </tbody>
                                          </Table>
                                          <hr></hr>
                                          <h5><h4>Total</h4>1800 S.R</h5>
                                    </ul>
                              </div>
                              <div className="col-lg-6 col-sm-6" data-aos="fade-up">
                                    <div className="card-body">
                                          <h2 className="card-title">Select Payment Method</h2>
                                          <Tabs defaultActiveKey="Credit" id="uncontrolled-tab-example">
                                                <Tab eventKey="Credit" title="Credit Card">
                                                      <Form>
                                                            <Form.Group controlId="formBasicEmail">
                                                                  <Form.Label>Name on Card *</Form.Label>
                                                                  <Form.Control type="text" placeholder="Enter Name on Card *" />
                                                                  <Form.Text className="text-muted">
                                                                        We'll never share your Credits with anyone else.</Form.Text>
                                                            </Form.Group>

                                                            <Form.Group controlId="formBasicPassword">
                                                                  <Form.Label>Card Number *</Form.Label>
                                                                  <Form.Control type="number" placeholder="Enter Card Number *" />
                                                            </Form.Group>

                                                            <Form.Row>
                                                                  <Form.Group controlId="formGridCity">
                                                                        <Form.Label>Expiration Date *</Form.Label>
                                                                        <Form.Control type="date"/>
                                                                  </Form.Group>


                                                                  <Form.Group controlId="formGridZip" aria-required>
                                                                        <Form.Label>Security Code *</Form.Label>
                                                                        <Form.Control />
                                                                  </Form.Group>
                                                            </Form.Row>

                                                            <a href="/Credit"><Button style={{ width: 450 }}>Place Order</Button></a>
                                                      </Form>
                                                </Tab>
                                                <Tab eventKey="Cash" title="Cash on Delivery">
                                                      <Card style={{padding: 12}}>
                                                            <Card.Text><p>Cash on Delivery</p></Card.Text>
                                                            <Card.Text>Please note: In case of Returns, we will refund via an online store credit.</Card.Text>
                                                            <Button style={{ width: 400 }}>Place Order</Button>
                                                      </Card>
                                                </Tab>
                                          </Tabs>

                                          <div className="row">


                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>


            </Container>

      )
}

