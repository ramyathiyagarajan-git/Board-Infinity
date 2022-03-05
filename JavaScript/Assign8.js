function formObject() {

    var row=1;

    let object = {

        Name : document.getElementById("name").value,
        RegNo : document.getElementById("reg").value,
        Email : document.getElementById("email").value,
        Section : document.getElementById("sec").value,
        DOB : document.getElementById("dob").value,
        Science: document.getElementById("sci").value,
        Maths: document.getElementById("mat").value,
        Social: document.getElementById("soc").value,
        English: document.getElementById("eng").value,
        Hindi: document.getElementById("hin").value

    };

    console.log(object); 

    var display =document.getElementById("display");

    var newRow = display.insertRow(row);

    

    for(let i=0;i<10;i++)
    {   
        newRow.insertCell(i).innerHTML= Object.value(object);
    
    }
 
    row++;


    /*var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);
    var cell10 = newRow.insertCell(9);*/


    /*cell1.innerHTML = object.Name;
    cell2.innerHTML = object.RegNo;
    cell3.innerHTML = object.Email;
    cell4.innerHTML = object.Section;
    cell5.innerHTML = object.DOB;
    cell6.innerHTML = object.Science;
    cell7.innerHTML = object.Maths;
    cell8.innerHTML = object.Social;
    cell9.innerHTML = object.English;
    cell10.innerHTML = object.Hindi;*/

    
    

 }

 function Clear() {

    document.getElementById("name").value ="";
    document.getElementById("reg").value ="";
    document.getElementById("email").value ="";
    document.getElementById("sec").value ="";
    document.getElementById("dob").value ="";
    document.getElementById("sci").value ="";
    document.getElementById("mat").value ="";
    document.getElementById("soc").value ="";
    document.getElementById("eng").value ="";
    document.getElementById("hin").value ="";

}

 function hide_show() {
      
    show.style.display="block";
}