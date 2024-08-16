import React, { useContext, useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import MenuContext from "../context/menu/CreateContext";
import MenuItem from "./MenuItem";
import { addToCart } from '../src/redux/actions/cartActions'
import CartIcon from "./CartIcon";

const CustomerMenu = () => {
  const { getItems } = useContext(MenuContext);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

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
    dispatch(addToCart(item));
    alert('Item added to cart successfully')
  };
  

  useEffect(() => {
    fetchItems();
  }, [getItems]);

  return (
    <div className="container my-3">
      <h1>Menu</h1>
      <CartIcon /> {/* Add CartIcon component here */}
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
