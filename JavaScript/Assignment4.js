function signup()
    {

    var print1 = document.getElementById("user");
    var print2 = document.getElementById("pwd");
    var print3 = document.getElementById("email");
    var print4 = document.getElementById("dob");
    var print5 = document.getElementById("add");

    var username = document.getElementById("printusername");
    var password = document.getElementById("printpassword");
    var email = document.getElementById("printemail");
    var DOB = document.getElementById("printDOB");
    var address = document.getElementById("printaddress");
    
    
    username.innerHTML =  print1.value;
    password.innerHTML = print2.value;
    email.innerHTML = print3.value;
    DOB.innerHTML = print4.value;
    address.innerHTML = print5.value;
   
    }