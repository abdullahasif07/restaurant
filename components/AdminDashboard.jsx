// components/AdminDashboard.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

function AdminDashboard() {
  const navi = useNavigate();
  const [viewMenu, setViewMenu] = useState(false);
  

  const toggleViewMenu = () => {
    const temp = !viewMenu;
    setViewMenu(temp);
  };

  return (
    <>
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>

        {!viewMenu && (
          <>
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
          </>
        )}

        <button onClick={toggleViewMenu}>
          {!viewMenu ? `Menu Settings` : "Go Back"}
        </button>

        {viewMenu && (
          <section className="menu-settings">
            <h2>Menu Settings</h2>
            <button onClick={() => navi("/menuform")}>Add Item</button>
            <Menu/>
          </section>
        )}
      </div>
    </>
  );
}

export default AdminDashboard;
