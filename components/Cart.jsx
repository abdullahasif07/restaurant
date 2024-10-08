import React, { useContext, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart } from '../src/redux/actions/cartActions'
import OrderContext from '../context/order/CreateContext.js';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const {addOrder} = useContext(OrderContext);
  

  const handleDelete = async (id) => {
    try {
      dispatch(removeFromCart(id));
      alert('Item deleted successfully')
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const placeOrder = () =>{
      let amount = 0;
      cartItems.forEach(item => {
        amount += item.price;
      });

      const order = {
        items : cartItems,
        amount,
        delivery_details: "default", // will work on this,
        payment_method: selectedButton === 'button1'? 'credit card': 'cash on delivery', // must be selected will work on this
        
      }

      addOrder(localStorage.getItem('auth-token'), order).then((response) => {
        alert('Order added successfully');
      }).catch((error) => {
        alert('Failed to add order');
      });
  }

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

      
      <div style={{ display: 'flex', gap: '10px', margin:'40px 0', fontWeight:'bolder' }}>
      <p >Select Payment Method : </p>
      <button
        style={{
          backgroundColor: selectedButton === 'button1' ? '#007BFF' : '#ccc',
          color: selectedButton === 'button1' ? '#fff' : '#000',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => handleButtonClick('button1')}
      >
        Credit Card
      </button>
      <button
        style={{
          backgroundColor: selectedButton === 'button2' ? '#007BFF' : '#ccc',
          color: selectedButton === 'button2' ? '#fff' : '#000',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => handleButtonClick('button2')}
      >
        Cash On delivery
      </button>
    </div>


    <button
                className="btn "
                onClick={() => {placeOrder();}}
                style={{ cursor: 'pointer', backgroundColor:'black', color:'white', display:'block' }}
              >place Your Order</button>
    </div>
  );
};

export default Cart;
