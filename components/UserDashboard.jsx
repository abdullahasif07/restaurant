// components/UserDashboard.js

import React from 'react';

function UserDashboard() {
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
          {/* Additional orders can be listed here */}
        </ul>
      </section>

      <section className="user-settings">
        <h2>Settings</h2>
        <button>Update Profile</button>
        <button>Change Password</button>
      </section>
    </div>
  );
}

export default UserDashboard;
