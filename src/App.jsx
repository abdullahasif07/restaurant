// App.js

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import AdminDashboard from '../components/AdminDashboard';
import UserDashboard from '../components/UserDashboard';
import ProtectedRoute from '../components/ProtectedRoute';
import Navbar from '../components/Navbar'; // Ensure Navbar is imported
import MenuForm from '../components/MenuForm';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menuform" element={<MenuForm />} />
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



