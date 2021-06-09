import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormFile from "react-bootstrap/FormFile";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../../../assets/css/auth.css";

export default function ItemPost() {
  const history = useHistory();
  const [item, setItem] = useState({});
  const [validated, setValidated] = useState(false);

  const itemChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setItem({ ...item, [name]: value });
  };

  const onSubmitHandler = (e) => {
     
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      else{
      e.preventDefault();
      axios.post("http://localhost:4000/api/additem", {
          title: item.title,
          description: item.description,
          style: item.style,
          category: item.category,
          brand: item.brand,
          condition: item.condition,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      }
      setValidated(true);
    };

  return (
    <Container component="main" maxWidth="xs">
      <div className="card card-post" data-aos="fade-up">
        <h3 class="auth-title" data-aos="fade-up">
          Offer Item
        </h3>
        <Form
          className="container"
          noValidate
          validated={validated}
          onSubmit={(e) => onSubmitHandler(e)}
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your item title"
              onChange={(e) => itemChangeHandler(e)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              placeholder="Describe your item to us"
              onChange={(e) => itemChangeHandler(e)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control
              required
              as="select"
              placeholder="Select item Category"
              onChange={(e) => itemChangeHandler(e)}
            >
              <option disabled selected="selected">
                Select item Category{" "}
              </option>
              <option>Clothes</option>
              <option>Shoes</option>
              <option>Bags</option>
              <option>Jewellery</option>
            </Form.Control>
          </Form.Group>
          <Form.Group required controlId="exampleForm.ControlInput1">
            <Form.Label>Brand</Form.Label>
            <Form.Control required type="text" placeholder="Enter item Brand" onChange={(e) => itemChangeHandler(e)}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter item price in S.R" onChange={(e) => itemChangeHandler(e)}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter item Quantity"
              onChange={(e) => itemChangeHandler(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.File required id="exampleFormControlFile1" label="Image" />
          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              id="validationFormik0"
            />
          </Form.Group>
          <Button className="btn btn-primary btn-block" type="submit">
            Post Item
          </Button>
        </Form>
      </div>
    </Container>
  );
}
