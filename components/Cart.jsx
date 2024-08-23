import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart } from '../src/redux/actions/cartActions'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log("Cart Items:", cartItems); // Debugging line
  

  const handleDelete = async (id) => {
    try {
      await dispatch(removeFromCart(id));
      alert('Item deleted successfully')
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };


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
                <button
                className="btn "
                onClick={() => handleDelete(item._id)}
                style={{ cursor: 'pointer' }}
              >Remove From Cart</button>
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
