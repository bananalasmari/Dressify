import React, { useEffect, useState } from "react";
import axios from "axios";


export default function ItemDetails(props) {
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
    return (
        <div>
            <h2>Item Details</h2>
            <h1>{item.title}</h1>
        </div>
    )
}

