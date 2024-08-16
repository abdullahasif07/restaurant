import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log("Cart Items:", cartItems); // Debugging line

  return (
    <div className="container my-3">
      <h1>Your Cart</h1>
      <div className="row">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id} className="col-md-3 my-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <p className="card-text">Price: ${item.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
