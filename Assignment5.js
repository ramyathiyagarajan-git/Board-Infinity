function hide_show() {
      
    show.style.display="block";
    hide.style.display="none";
}

function print() {
    
    var print1 = document.getElementById("name");
    var print2 = document.getElementById("act");
    var print3 = document.getElementById("hob");
    var print4 = document.getElementById("int");
   

    var username = document.getElementById("printuser");
    var activities = document.getElementById("printact");
    var hobbies = document.getElementById("printhob");
    var interests = document.getElementById("printint");
    
    
    username.innerHTML =  print1.value;
    activities.innerHTML = print2.value;
    hobbies.innerHTML = print3.value;
    interests.innerHTML = print4.value;

}