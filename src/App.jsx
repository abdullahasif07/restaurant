import './App.css'
import Login from '../components/Login'
import UserState from '../context/user/UserState'
import Navbar from '../components/Navbar'
import {Route, Routes, useNavigate } from 'react-router-dom';
import Signup from '../components/Signup';
import { useEffect } from 'react';


function App() {

  const navi = useNavigate();
  const temp = () =>{
    navi('/login');
  }
  useEffect(temp, []);
  
  return (
    <>
      
      <UserState>
          <Navbar />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
      </UserState>
    </>
  )
}

export default App
