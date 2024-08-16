// App.js

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import AdminDashboard from '../components/AdminDashboard';
import UserDashboard from '../components/UserDashboard';
import ProtectedRoute from '../components/ProtectedRoute';
import Navbar from '../components/Navbar'; 
import MenuForm from '../components/MenuForm';
import CustomerMenu from '../components/CustomerMenu';
import Cart from '../components/Cart'; 


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menuform" element={<MenuForm />} />
        <Route path="/cart" element={<Cart />} /> {/* Add route for Cart */}
        <Route path="/customer-menu" element={<CustomerMenu />} />
        <Route element={<ProtectedRoute role="admin" />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>
        <Route element={<ProtectedRoute role="customer" />}>
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;



