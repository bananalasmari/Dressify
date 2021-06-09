import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import '../../../assets/css/auth.css'


export default function ItemDetails(props) {
    
    return (
        <div className="container b-widget--background">
                  <div className="items-title"  data-aos="zoom-out" style={{ paddingTop: 42.8, paddingBottom: 40.9}}> Clothing </div>
                  <div className="row">
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                              <Card >
                                    <Card.Img variant="top" src="
                                   https://ounass-prod3.atgcdn.ae/small_light(dw=350,of=webp)/pub/media/catalog/product/2/1/214217820_black_in.jpg?1610642647.2564" />
                                    <Card.Body>
                                          <Card.Title>Card Title</Card.Title>
                                          <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                               </Card.Text>

                                               <Card.Text className="item-price">
                                                1.8000 SAR
                                               </Card.Text>
                                          <Button variant="primary">More Info</Button>
                                    </Card.Body>
                              </Card>
                        </div>

                        <div className="col-md-4 col-sm-6" data-aos="fade-up">
                              <Card >
                                    <Card.Img variant="top" src="
                                   https://ounass-prod3.atgcdn.ae/small_light(dw=440,of=webp)/pub/media/catalog/product/2/1/214375608_pink_in.jpg?1615969145.6825" />
                                    <Card.Body>
                                          <Card.Title>Card Title</Card.Title>
                                          <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                               </Card.Text>
                                               <Card.Text className="item-price">
                                                1.8000 SAR
                                               </Card.Text>
                                          <Button variant="primary">More Info</Button>
                                    </Card.Body>
                              </Card>
                        </div>

                        <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                              <Card >
                                    <Card.Img variant="top" src="
                                    https://ounass-prod4.atgcdn.ae/small_light(dw=350,of=webp)/pub/media/catalog/product/2/1/214189659_lbl_in.jpg?1611161634.5771" />
                                    <Card.Body>
                                          <Card.Title>Card Title</Card.Title>
                                          <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                               </Card.Text>
                                               <Card.Text className="item-price">
                                                1.8000 SAR
                                               </Card.Text>
                                          <Button variant="primary">More Info</Button>
                                    </Card.Body>
                              </Card>
                        </div>

                  </div>
            </div>


    )
}
