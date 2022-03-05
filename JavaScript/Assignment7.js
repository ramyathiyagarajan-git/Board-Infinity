
let arr = []

function Data() {

   var data = document.getElementById("data").value;
   arr.push(data);

}

function display() {
   
    let outputScreen = document.getElementById("outputscreen");

    outputScreen.value = arr;

}
 function minmax(){

    let minimum = document.getElementById("min");
    let maximum = document.getElementById("max");

    minimum.innerHTML= Math.min.apply(null, arr);
    maximum.innerHTML= Math.max.apply(null, arr);

 }

 function Clear() {

    let operand1 = document.getElementById("data");
    
    operand1.value = "";

}