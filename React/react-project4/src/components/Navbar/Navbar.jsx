import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <Link  className="navbar-brand navbar-logo" to="/" >
        Board Infinity
      </Link>
    
      <div  className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <Link className="nav-link" to="/home" >
                <i className="fas fa-tachometer-alt">
                </i>Home
              </Link>
            </li>

            <li className="nav-item" >
              <Link className="nav-link" to="/about" >
                <i className="far fa-address-book">
                </i>About
              </Link> 
            </li>

            <li className="nav-item" >
              <Link className="nav-link" to="/contact" >
                <i className="far fa-copy">
                </i>Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin" >
                <i className="far fa-clone">
                </i>SignIn
              </Link>
            </li >
            <li className="nav-item">
              <Link className="nav-link" to="/signup" >
                <i className="fas fa-tachometer-alt">
                </i>SignUp
              </Link>
            </li>
        </ul>
      </div>
    </nav>
  
</>
  )
}

export default Navbar