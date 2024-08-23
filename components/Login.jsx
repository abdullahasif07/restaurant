// components/Login.js

import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from "../context/user/CreateContext";
import '../styles/css/login.css'; // Import the CSS file

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
        console.log("role found success")
        navigate('/user-dashboard');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form glass-effect">
      <h3>Login to Continue</h3>
      <p>Enter Email Address</p>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <p>Enter Password</p>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
