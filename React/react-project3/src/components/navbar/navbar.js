import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
    <Link to ="table" > Table </Link> 
    <Link to ="userform" > Userform </Link> 
    </div>
  )
}

export default Navbar