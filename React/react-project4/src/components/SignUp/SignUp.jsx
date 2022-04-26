import React, {useEffect, useState} from 'react'
import Validation from '../Validation/Validation';
import './SignUp.css';


function SignUp ({submitForm}){

const [values,setValues] = useState({

    fullname:"",
    email:"",
    address:"",
    password:"",
    cpassword:""
});

const[errors, setErrors] = useState({});

const [dataIsCorrect, setDataIsCorrect] = useState(false);


const handleFormSubmit = (event) => {

event.preventDefault();
setErrors(Validation(values));
console.log("from handle form")
console.log(values);
setDataIsCorrect(true);
saveData(values);

};

const saveData = (values) => {
  localStorage.setItem('currentUser', JSON.stringify(values))
}

useEffect(() => {
  if(Object.keys(errors).length === 0 && dataIsCorrect){
    submitForm(true);
  }

},[errors]);

const handleChange = (event) => {

    setValues({...values, [event.target.name] : event.target.value,});

};

  return (
      <>
    
   <div className="container">
      <div className="app-wrapper">
      <div>
        <h2 className="title">Create Account</h2>
      </div>
   <form className="form-wrapper" >
      <div className="name">
        <label className="label">Full Name</label>
        <input 
        className="input" 
        type="text"
        name="fullname" 
        value ={values.fullname} 
        onChange = {handleChange}
        />
      {errors.fullname && <p className='error'>{errors.fullname}</p> }
      </div>
      <div className="email">
       <label className="label">Email</label>
       <input 
       className="input" 
       type="email" 
       name="email" 
       value ={values.email}
       onChange = {handleChange} 
       />
       {errors.email && <p className='error'>{errors.email}</p> }
     </div>
     <div className="name">
        <label className="label">Address</label>
        <input
        className="input"
        type="text"
        name="address" 
        value ={values.address} 
        onChange = {handleChange}
        />
      </div>
    <div className="password">
      <label className="label">Password</label>
      <input
       className="input" 
       type="text" 
       name="password" 
       value ={values.password}
       onChange = {handleChange}
       />
       {errors.password && <p className='error'>{errors.password}</p> }
    </div>
  <div className="password">
      <label className="label"> Confirm Password</label>
      <input 
      className="input" 
      type="text" 
      name="cpassword" 
      value ={values.cpassword} 
      onChange = {handleChange}
      />
      {errors.cpassword && <p className='error'>{errors.cpassword}</p> }
  </div><br></br>
  <div>
      
        <button className="submit" onClick = {handleFormSubmit} > SignUp</button>
  </div>
   </form>
 </div>
</div>
  
</>
)
  
}

export default SignUp;