import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import '../../../assets/css/auth.css'
import { AiOutlineTags } from 'react-icons/ai';


export default function Retailer (props) {
    console.log(props.match.params.id)
    const id = props.match.params.id
    return (
        <Container component="main" maxWidth="xs" >
            <div className="card card-auth">
                <div className="row">
                    <div className="col-lg-3 col-sm-6" data-aos="fade-up-left">
                        <img class="retailer-logo" src="https://www.giordano.com.sa/wp-content/uploads/2017/01/us-placeholder-square.png" />
                    </div>
                    <div className="col-lg-8 col-sm-6" data-aos="fade-up">
                        <div className="post-details">
                            <h2 className="post-title">Giordano</h2>
                            <p style={{ color: '#2d2d2d', fontWeight: 200, fontSize: 15 }}><span>@</span>Giordano</p>
                            <p style={{ color: '#2d2d2d', fontWeight: 800, fontSize: 15 }} ><AiOutlineTags/> <span>33</span> Sold</p>
                            <p>Vintage & Hype | Bundle deals available | 💨 Fast shipping 💨</p>
                            <ListGroup variant="flush">
                                <ListGroup.Item><h5>Selling</h5></ListGroup.Item>                     
                            </ListGroup>
                     </div>
                    </div>
                </div>

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
        </Container>
    )
}
