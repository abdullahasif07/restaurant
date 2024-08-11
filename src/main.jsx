import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import UserState from '../context/user/UserState.jsx'; // Ensure correct relative path
import MenuState from '../context/menu/MenuState.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserState>
      <MenuState>
        <App />
      </MenuState>
      </UserState>
    </BrowserRouter>
  </React.StrictMode>
);
