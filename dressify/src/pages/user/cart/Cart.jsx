import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card'



export default function Cart () {
            return (
                  <Container component="main" maxWidth="xs">
      <div className="card user-detils">
        <div className="row">
          <div className="col-lg-4 col-sm-6" data-aos="fade-up">
            <ul className="user-list">
              <h3 className="user-title">My Cart</h3>
              <p>Order Summary</p>
             <hr></hr>
              <h5><h4>Total</h4>1800 S.R</h5>
              <a href="/Checkout"><Button style={{width: 260}}>Checkout</Button></a>
       
            </ul>
          </div>
          <div className="col-lg-8 col-sm-6" data-aos="fade-up">
            <div className="card-body">
              <h2 className="card-title">Select Payment Method</h2>
              <div className="row">
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
              </div>
            </div>
          </div>
        </div>
      </div>


    </Container>

            )
      }

