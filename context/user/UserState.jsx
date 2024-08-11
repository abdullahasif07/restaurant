import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './CreateContext';

const UserState = (props) => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Function to handle user login
  const loginUser = async (credentials) => {
    try {
      const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const res = await response.json();
      //console.log(res)

      if (res.success) {
        localStorage.setItem('auth-token', res.token);
        localStorage.setItem('logged', 'true');
        localStorage.setItem('role', res.role); // Store user role

        // Redirect based on role
        if (res.role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/user-dashboard');
        }
        return true;
      } else {
        alert('Incorrect credentials');
        return false;
      }
    } catch (error) {
      //console.error('Error during login:', error);
      alert('An error occurred during login');
      return false;
    }
  };

  // Function to handle user signup
  // UserState.jsx

const signUpUser = async (credentials) => {

  //console.log("Payload sent:", JSON.stringify(credentials));

  try {
    
    const response = await fetch('http://localhost:5000/api/user/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw await response.json();
    }

    const authToken = await response.json();

    if (authToken.success) {
      localStorage.setItem('auth-token', authToken.token);
      navigate('/login');
    } else {
      alert('Sign up unsuccessful');
    }
  } catch (error) {
    //console.error('Error during sign up:', error);
    alert(error.error);
  }
};

  // Function to handle user logout
  const signOut = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('role');
    localStorage.setItem('logged', 'false');

    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <UserContext.Provider value={{ loginUser, signUpUser, signOut }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
