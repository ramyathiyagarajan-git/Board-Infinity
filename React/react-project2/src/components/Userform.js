import React from 'react'
import './Userform.css'
import {useState} from "react";

const userObject = {
 username:"undefined",
 password:"undefined",
 email:"undefined",
 address:"undefined",
 dob:"undefined",
}

function Userform() {

  const [username, setUsername] = useState(userObject.username);
  const [password, setPassword] = useState(userObject.password);
  const [email, setEmail] = useState(userObject.email);
  const [address, setAddress] = useState(userObject.address);
  const [dob, setDob] = useState(userObject.dob);


  /*const[form, setForm ] = useState({'username':'', 'password':'','email':''})

  const handleFormChange = (ev, type) => {

    const formLocal = form;

    formLocal[type]= ev.target.value;

    setForm(formLocal);
  
  }*/

  
  var changeValue1 = (event) =>{

    userObject.username = event.target.value;
    setUsername(userObject.username);
  
  }
  var changeValue2 = (event) =>{

    userObject.password =event.target.value;
    setPassword(userObject.password);
  }
  var changeValue3 = (event) =>{

    userObject.email = event.target.value;
    setEmail(userObject.email);

  }
  var changeValue4= (event) =>{

    userObject.address = event.target.value;
    setAddress(userObject.address);

  }
  var changeValue5 = (event) =>{

    userObject.dob = event.target.value;
    setDob(userObject.dob);

  }
  return (
  <>
   
    <div class="container">

                    <h1 class ="header">Sign Up</h1>

                    <label for="username"><b>Username:</b></label>
                    <input id="user" type="text" placeholder="Enter Username" name="username" onChange={(event)=>changeValue1(event)} required /> <br/>

                    <label for="password"><b>Password:</b></label>
                    <input id="pwd" type="password" placeholder="Enter password" name="password"onChange={(event)=>changeValue2(event)} required/> <br/>  
    
                    <label for="email"><b>Email:</b></label>
                    <input id="email" type="text" placeholder="xyz@gmail.com" name="email"onChange={(event)=>changeValue3(event)} required/><br/>
 
                    <label for="Address"><b>Address</b></label>
                    <input  id="add" type="text" placeholder="Enter address" name="address"onChange={(event)=>changeValue4(event)} required/><br/>
        
                    <label for="birthday"><b>DOB</b></label><br/>
                    <input  id="dob" type="date" placeholder="dd-mm-yyyy" name="birthday"onChange={(event)=>changeValue5(event)} required/><br/><br/>

                  
                   <button  type="button" class="signupbtn">SignUp</button>

    </div>
    <h1 class="head">User Data</h1>
    <table >
        <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
               </tr>
        </thead>
        <tbody>
                <tr>
                     <td> {username} </td>
                     <td >{password} </td>
                     <td> {email} </td>
                     <td> {address} </td>
                     <td> {dob} </td>
                </tr>
         </tbody>
    </table>
  
   </>
    
  )
}

export default Userform