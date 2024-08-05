// components/Login.js

import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from "../context/user/CreateContext";

function Login() {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate(); // Use useNavigate hook

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await loginUser(credentials);
    if (success) {
      const role = localStorage.getItem('role');
      if (role === 'admin') {
        navigate('/admin-dashboard'); // Use navigate for routing
      } else {
        navigate('/user-dashboard');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" onChange={handleChange} required />
      <input type="password" name="password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
