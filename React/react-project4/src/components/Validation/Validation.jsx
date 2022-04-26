
const Validation = (values) => {

  let errors = {}; 

  if (!values.fullname) {
    errors.fullname = "Name is required.";
  }
  if (!values.email) {
    errors.email = "Email is required.";
  }
  if (!values.password) {
    errors.password = "Password is required.";
   } else if (values.password.length < 5) {
    errors.password = "Password must be more than five characters."
  }
  
  if(values.password != values.cpassword)
  {
      errors.cpassword = "Password not matching";
  }

  
  return errors;
    
}

export default Validation;