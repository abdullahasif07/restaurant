import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const navigate = useNavigate();

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
    <div className="user-dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <section className="user-info">
        <h2>User Information</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
      </section>

      <section className="order-history">
        <h2>Order History</h2>
        <ul>
          <li>Order #1234 - Date: 2024-07-21 - Status: Delivered</li>
          <li>Order #5678 - Date: 2024-08-01 - Status: Processing</li>
        </ul>
      </section>

      <section className="user-actions">
        <h2>Actions</h2>
        <button onClick={handleMenuNavigation} className="btn btn-primary my-2">View Menu</button>
        <button onClick={handleCartNavigation} className="btn btn-primary my-2">View Cart</button>
        <button onClick={handleProfileSettingsNavigation} className="btn btn-primary my-2">Profile Settings</button>
      </section>
    </div>
  );
}

export default UserDashboard;
