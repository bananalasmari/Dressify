import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/ItemList.css";
import ItemCard3 from "../../components/itemDetails/ItemCard3";
export default function DisplayItems() {
  const [items, setItems] = useState([]);
  //user id
  const id = 12
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/items/seller/${id}`)
      .then((data) => {
        setItems(data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container b-widget--background">
      <div className="row">
        {items.map((item) => (
          <ItemCard3 item={item} />
        ))}
      </div>
    </div>
  );
}
