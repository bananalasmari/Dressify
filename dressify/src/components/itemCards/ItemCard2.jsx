import React from "react";
import Button from "react-bootstrap/Button";
import "../../assets/css/ItemList.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";

export default function ItemCard2(props) {
    const history = useHistory();
    console.log(props.item.image)
    const detailsHandler = () =>{
        history.push(`/Items/${props.item._id}`);
    }
  return (
    <div className="col-lg-4 col-sm-6" data-aos="fade-up">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.item.image}
        />
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>
            {props.item.description}
          </Card.Text>
          <Card.Text className="item-price">{props.item.price}</Card.Text>
          <Button variant="primary" onClick= {detailsHandler}>Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
