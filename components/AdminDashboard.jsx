// components/AdminDashboard.js

import React from "react";
import { Link } from "react-router-dom";
function AdminDashboard() {
  

  return (
    <>
      <div className="admin-dashboard admin-home-page glass-effect">
        <h1>Admin Dashboard</h1>

        <button >
          <Link className='button-link' to='/admin/menusettings'>
              Menu Settings
          </Link>
        </button>
        <button >
          Manage Users
        </button>
        <button >
          Site Reports
        </button>
        <button >
          Admin Settings
        </button>

       
      </div>
    </>
  );
}

export default AdminDashboard;
