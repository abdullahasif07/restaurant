import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/user/CreateContext";

function Navbar() {
  const logged = localStorage.getItem('logged') === 'true';
  const userHandler = useContext(UserContext);
  const {signOut} = userHandler;
  
  const navi = useNavigate();

  const logOut = () =>{
    navi('/login');
    signOut();
    alert('logged out Successfully');
  }

  const dashboardType = '/' + localStorage.getItem('role');
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {localStorage.getItem('role') && <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link`} aria-current="page" to={dashboardType}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link`} to={dashboardType}>
                Menu
              </Link>
            </li>
          </ul>}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`btn btn-primary mx-2 ${logged?'d-none':''}`} to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`btn btn-primary ${logged?'d-none':''}`} to="/signup">
                SignUp
              </Link>
            </li>
            <li onClick={logOut} className={`nav-item btn btn-primary ${!logged?'d-none':''}`}>
                LogOut
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
