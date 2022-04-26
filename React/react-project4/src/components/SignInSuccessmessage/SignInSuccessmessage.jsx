import React from 'react';
import './SignInSuccessmessage.css';

const SigninSuccessmessage = () => {
  return (
    <div className="containers">
        <div className="app-wrappers">
            <h1 className="form-successs"> #Welcome to Board Infinity!</h1><br></br>
            <h4>You Have Successfully LoggedIn</h4><br></br>
            <span><p>Designed by <i>Booard Infinity</i></p></span>
            <span className="images"><img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/onk6xipqsjldjr2uy6tg" alt='html-logo' width="100px"></img></span>
        </div>

    </div>
  )
}

export default SigninSuccessmessage;