import './grid3.css';
import React from 'react'
import Grid4 from './grid4';

function Grid3() {
  return (
    <div className='fit'>
            <div className="grid3">   
                <img src="https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640" alt='html-logo' width="100px" height={110}></img>
                <br></br> 
                <h3>Register</h3>
            </div>
            <Grid4></Grid4>
    </div>
  )
}

export default Grid3