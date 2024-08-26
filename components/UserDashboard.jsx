import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/css/Customer.css'; // Import the CSS file
import OrderContext from '../context/order/CreateContext';

function UserDashboard() {
  const navigate = useNavigate();
  const {getOrdersOfCustomer} = useContext(OrderContext);

  const [ordersList, setOrdersList] = useState(null);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrdersOfCustomer(localStorage.getItem('auth-token'));
      
      orders.success && setOrdersList(orders.orders);
      setLoading(false);
    };

    try {
      fetchOrders();
    } catch (error) {
      console.log(error, "error occurred in fetching order");
    }


  }, []);

  const handleMenuNavigation = () => {
    navigate("/customer-menu");
  };

  const handleCartNavigation = () => {
    navigate("/cart");
  };

  const handleProfileSettingsNavigation = () => {
    navigate("/profile-settings");
  };
  

  return (
    !loading && <div className="customer-container">
      <h1>Welcome to Your Dashboard</h1>
      <section className="customer-info">
        <h2>User Information</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
      </section>

      <section className="customer-order-history">
        <h2>Order History</h2>
        {ordersList && <ul>
          {ordersList[0] && <li>amount: {ordersList[0].amount} - Date: {new Date(ordersList[0].date).toLocaleDateString('en-US')} - Status: {ordersList[0].status}</li>}
          {ordersList[1] && <li>amount: {ordersList[1].amount} - Date: {new Date(ordersList[1].date).toLocaleDateString('en-US')} - Status: {ordersList[1].status}</li>}
        </ul>}
      </section>

      <section className="customer-actions">
        <h2>Actions</h2>
        <button onClick={handleMenuNavigation} className="btn btn-primary my-2">View Menu</button>
        <button onClick={handleCartNavigation} className="btn btn-primary my-2">View Cart</button>
        <button onClick={handleProfileSettingsNavigation} className="btn btn-primary my-2">Profile Settings</button>
      </section>
    </div>
  );
}

export default UserDashboard;
