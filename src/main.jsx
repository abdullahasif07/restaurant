import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import store from './redux/store';  // Import the Redux store
import UserState from '../context/user/UserState.jsx'; 
import MenuState from '../context/menu/MenuState.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrapping app with Provider and pass the store */}
      <BrowserRouter>
        <UserState>
          <MenuState>
            <App />
          </MenuState>
        </UserState>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
