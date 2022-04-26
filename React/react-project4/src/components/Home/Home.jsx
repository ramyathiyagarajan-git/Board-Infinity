import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="content">
    <h1>Welcome to Board Infinity</h1> <br></br>
    <h2> <Link to="/signin"> SignIn </Link> to Get Started</h2><br></br>
    <p> Dont Have an Account? <Link to="/signup"> SignUp </Link> </p>

    </div>
  )
}

export default Home