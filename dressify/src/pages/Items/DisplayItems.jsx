import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/ItemList.css";
import ItemCard2 from "../../components/itemDetails/ItemCard2";
export default function DisplayItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/items")
      .then((data) => {
        setItems(data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container b-widget--background">
      <div className="row">
        {items.map((item) => (
          <ItemCard2 item={item} />
        ))}
      </div>
    </div>
  );
}
