import React, {useEffect, useState} from 'react'
import Authentication from '../Validation/Authentication';
import './SignIn.css';

const SignIn = ({submitFormc}) => {

const [valuesc, setValuesc] = useState({

    fullnamec:"",
    passwordc:""
    
});

const [verify, setVerify] = useState();

const[errorsc, setErrorsc] = useState({});

const [dataIsCorrectc, setDataIsCorrectc] = useState(false);



const handleFormSubmitc = (event) => {

  event.preventDefault();
  const currentUser = localStorage.getItem('currentUser');
  setVerify(JSON.parse(currentUser));
  console.log(JSON.parse(currentUser))
  setDataIsCorrectc(true);
  setErrorsc(Authentication(valuesc,verify));
  console.log("from signin")
  console.log(valuesc);
  };

  useEffect(() => {
    if(Object.keys(errorsc).length === 0 && dataIsCorrectc){
      submitFormc(true);
    }
  
  },[errorsc]);

  const handleChangec = (event) => {

    setValuesc({
        ...valuesc,
        [event.target.name] : event.target.value,
    });

};

  return (
    <>
    
   <div className="container">
      <div className="app-wrapper">
      <div>
        <h2 className="title">SignUp before SignIn</h2>
      </div>
   <form className="form-wrapper">
      <div className="name">
        <label className="label">Full Name</label>
        <input 
        className="input" 
        type="text"
        name="fullnamec" 
       value ={valuesc.fullnamec} 
       onChange = {handleChangec}
        />
      {errorsc.fullnamec && <p className='error'>{errorsc.fullnamec}</p> }

      </div>
      
    <div className="password">
      <label className="label">Password</label>
      <input
       className="input" 
       type="password" 
       name="passwordc" 
      value ={valuesc.passwordc}
      onChange = {handleChangec}
       />
       {errorsc.passwordc && <p className='error'>{errorsc.passwordc}</p> }
    </div><br></br>
  <div>
      <button className="submit" onClick ={handleFormSubmitc}>SignIn</button>
  </div><br></br><br></br>
  <span><p>Designed by <i>Booard Infinity</i></p></span>
  <span className="image"><img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/onk6xipqsjldjr2uy6tg" alt='html-logo' width="100px"></img></span>
  
  </form>
 </div>
</div>
  
</>
    
  )
}

export default SignIn
