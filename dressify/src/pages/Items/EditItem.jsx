import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function EditItem(props) {
    console.log(props.match.params.id)
    const itemId = props.match.params.id;
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios
          .get(`http://localhost:4000/api/items/${itemId}`)
          .then((data) => {
            setItem(data.data);
          })
          .catch((error) => console.error(error));
      }, []);

      const itemChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setItem({ ...item, [name]: value });
      };
    
      const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
          .put(`http://localhost:4000/api/items/${itemId}`, {
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
      };

    return (
    <Form onSubmit={(e) => onSubmitHandler(e)}>
      <Form.Group>
        <Form.Label>Item Name</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Item Name"
          value={item.title}
          onChange={(e) => itemChangeHandler(e)}
        />
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          placeholder="Item Description"
          value={item.description}
          onChange={(e) => itemChangeHandler(e)}
        />
        <Form.Label>Style</Form.Label>
        <Form.Control
          name="style"
          size="sm"
          as="select"
          value={item.style}
          onChange={(e) => itemChangeHandler(e)}
        >
          <option>Vintage</option>
          <option>Streetwear</option>
          <option>70s/60s</option>
          <option>80s/90s</option>
          <option>Trendy</option>
          <option>Sporty</option>
          <option>Grunge</option>
          <option>Bohemian</option>
          <option>Casual</option>
        </Form.Control>
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          name="category"
          placeholder="Clothes, bags, shoes, accessories, etc"
          value={item.category}
          onChange={(e) => itemChangeHandler(e)}
        />
        <Form.Label>Brand</Form.Label>
        <Form.Control
          type="text"
          name="brand"
          placeholder="Brand Name"
          value={item.brand}
          onChange={(e) => itemChangeHandler(e)}
        />
        <Form.Label>Condition</Form.Label>
        <Form.Control
          size="sm"
          as="select"
          name="condition"
          value={item.condition}
          onChange={(e) => itemChangeHandler(e)}
        >
          <option>Used - Good</option>
          <option>Used - Excellent</option>
          <option>Brand New</option>
        </Form.Control>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          placeholder="Price"
          value={item.price}
          onChange={(e) => itemChangeHandler(e)}
        />
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={item.quantity}
          onChange={(e) => itemChangeHandler(e)}
        />
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          name="image"
          placeholder="Image"
          value={item.image}
          onChange={(e) => itemChangeHandler(e)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}
