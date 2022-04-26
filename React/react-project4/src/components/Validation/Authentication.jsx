
const Authentication = ( valuesc, check ) => {

  console.log("In Authentication");
  console.log(check);

    let errorsc = {}; 
    if(check.fullname != valuesc.fullnamec ){
        errorsc.fullnamec = "User not matching"
      }
    
      if( check.password != valuesc.passwordc)
      {
        errorsc.passwordc = "Password not matching"
      }

  return errorsc;
     
}

export default Authentication;