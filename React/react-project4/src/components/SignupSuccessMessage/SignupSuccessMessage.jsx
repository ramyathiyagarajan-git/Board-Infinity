import React from 'react';
import { Link } from 'react-router-dom';
import './SignupSuccessMessage.css';

const SignupSuccessMessage = () => {
  return (
    <div className="container">
        <div className="app-wrapper">
            <h1 className="form-success"> Account Created Successfully!</h1>
            <h3><Link to="/signin"> SignIn </Link></h3>
        </div>

    </div>
  )
}

export default SignupSuccessMessage;