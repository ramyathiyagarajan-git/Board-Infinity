
    function calculate(){
     
        let outputScreen = document.getElementById("outputscreen");

        try {
            outputScreen.value = eval(outputScreen.value);
        }

        catch(err)

         {
             alert("Invalid");
         }
        
    }

    function display1() {

        let outputScreen = document.getElementById("outputscreen");
        let operand1 = document.getElementById("op1");

        outputScreen.value += operand1.value;
        
    }
   
    function display2() {

        let outputScreen = document.getElementById("outputscreen");
        let operator = document.getElementById("opt");

        outputScreen.value += operator.value;
        
    }

    function display3() {

        let outputScreen = document.getElementById("outputscreen");
        let operand2 = document.getElementById("op2");

        outputScreen.value += operand2.value;
    
    }
    
    function Clear() {

        let outputScreen = document.getElementById("outputscreen");
        let operand1 = document.getElementById("op1");
        let operand2 = document.getElementById("op2");
        let operator = document.getElementById("opt");

        let correct1 = document.getElementById("btn1");
        let correct2 = document.getElementById("btn2");
        let correct3 = document.getElementById("btn3");

        outputScreen.value = "";
        operand1.value = "";
        operator.value = "";
        operand2.value = "";


        correct1.style.backgroundColor = "#ecf0f3"; 
        correct2.style.backgroundColor = "#ecf0f3"; 
        correct3.style.backgroundColor = "#ecf0f3";

        outputscreen.style.color = "#FF4848"; // red
    }
    function del() {

        let outputScreen = document.getElementById("outputscreen");
        outputScreen.value = outputScreen.value.slice(0,-1);
        outputscreen.style.color = "#FF4848"; // red

    }

    function changeColor(id) {

    
        document.getElementById(id).style.color = "#6ECB63"; // green
        console.log(document.getElementById(id));
        
    } 

    function buttonColor(id) {

        document.getElementById(id).style.backgroundColor = "#6ECB63"; // green
        
    } 

