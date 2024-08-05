// components/AdminDashboard.js

import React from 'react';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <section className="user-management">
        <h2>User Management</h2>
        <button>View All Users</button>
        <button>Add New User</button>
        <button>Remove User</button>
      </section>

      <section className="site-reports">
        <h2>Site Reports</h2>
        <button>View Sales Report</button>
        <button>View User Activity</button>
        <button>View System Logs</button>
      </section>

      <section className="admin-settings">
        <h2>Admin Settings</h2>
        <button>Change Admin Password</button>
        <button>Update System Settings</button>
      </section>
    </div>
  );
}

export default AdminDashboard;
