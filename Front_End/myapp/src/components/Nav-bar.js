import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light">
      <div className="container-fluid">

        <Link className="navbar-brand mx-2" to="/">
           TestApp
        </Link>

      

        {/* Navbar Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav mx-2">
            {/* Home */}
            <Link className={`nav-link  ${location.pathname === '/' ? "active" : ""}`} to="/">
              Home
            </Link>


            {/* About us */}
            <Link className={`nav-link  ${location.pathname === '/about' ? "active" : ""}`} to="/about">
              About us
            </Link>

          </div>



          {/* Logout Button (only if user is authenticated) */}
          {localStorage.getItem('token') && <div className="d-flex ms-auto me-2">
            <button className="btn btn-outline-danger" onClick={handleLogout}  >Logout</button>
          </div>}

        </div>
      </div>
    </nav>
  )
}

export default Navbar;