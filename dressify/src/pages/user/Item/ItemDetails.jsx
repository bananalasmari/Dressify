import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import '../../../assets/css/auth.css'


export default function ItemDetails(props) {
    console.log(props.match.params.id)
    const id = props.match.params.id
    return (
        <Container component="main" maxWidth="xs" >
            <div className="card card-auth">
                <div className="row">
                    <div className="col-lg-5 col-sm-6" data-aos="fade-up-left">
                        <img class="post-img" src=" https://ounass-prod4.atgcdn.ae/small_light(dw=350,of=webp)/pub/media/catalog/product/2/1/214189659_lbl_in.jpg?1611161634.5771" />
                    </div>
                    <div className="col-lg-6 col-sm-6" data-aos="fade-up">
                        <div className="post-details">
                            <h2 className="post-title">DOLCE & GABBANA</h2>
                            <a href="#"><p style={{ color: '#2d2d2d', fontWeight: 200, fontSize: 15 }}><span>@</span>Giordano</p></a>
                            <p class="item-price card-text">2.650 S.R<span style={{ padding: 12, color: '#2d2d2d', fontWeight: 200, fontSize: 15 }}>Including VAT</span></p>
                            <p>Feminine and playful, this top by Dolce & Gabbana is a perfect example of the Italian label's spirit.</p>
                            <ListGroup variant="flush">
                                <ListGroup.Item><h5>Size: <span style={{ color: '#7d7d7d' }}>M</span></h5></ListGroup.Item>
                                <ListGroup.Item><h5>Quantity: <span style={{ color: '#7d7d7d' }}>2 </span></h5></ListGroup.Item>
                                <ListGroup.Item><h5>Condition: <span style={{ color: '#7d7d7d' }}>Perfect </span></h5></ListGroup.Item>
                                <ListGroup.Item><p>All deliveries are offered based on availability</p></ListGroup.Item>
                                {/* <ListGroup.Item><p>2 days ago</p></ListGroup.Item> */}
                            </ListGroup>
                            <Button className="btn btn-primary btn-block" type="submit" style={{ margin: 20 }}>Add To Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
