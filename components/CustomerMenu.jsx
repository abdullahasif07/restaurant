import React, { useContext, useState, useEffect } from "react";
import MenuContext from "../context/menu/CreateContext";
import MenuItem from "./MenuItem";

const CustomerMenu = () => {
  const { getItems } = useContext(MenuContext);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const items = await getItems();
      setItems(items);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleAddToCart = (item) => {
  
    console.log("Adding to cart:", item);
  };

  useEffect(() => {
    fetchItems();
  }, [getItems]);

  return (
    <div className="container my-3">
      <h1>Menu</h1>
      <div className="row">
        {items.map((item) => (
          <MenuItem
            key={item._id}
            item={item}
            role="customer"
            fetchItems={fetchItems}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerMenu;
