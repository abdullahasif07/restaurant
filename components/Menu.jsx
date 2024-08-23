import React, { useContext, useState, useEffect } from "react";
import MenuContext from "../context/menu/CreateContext";
import MenuItem from "./MenuItem";

const Menu = () => {
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

  useEffect(() => {
    fetchItems();
  }, [getItems]); 

  return (
    <div className="menu">
      <h1>Menu</h1>
      <div className="menuitems">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} fetchItems={fetchItems}/>
        ))}
      </div>
    </div>
  );
};

export default Menu;
