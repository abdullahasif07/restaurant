// components/ProtectedRoute.js

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ role }) {
  const isAuthenticated = !!localStorage.getItem('auth-token'); // Corrected token key
  const userRole = localStorage.getItem('role');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (userRole !== role) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
