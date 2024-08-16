import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/css/CartIcon.css'; // Import the CSS file

const CartIcon = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className="cart-icon" onClick={handleCartClick}>
      <i className="fa-solid fa-cart-shopping"></i>
      {itemCount > 0 && (
        <span className="cart-count">{itemCount}</span>
      )}
    </div>
  );
};

export default CartIcon;

