import React from 'react'
import './userform.css'
import { useState } from "react";

function Userform(props) {

var [form, setForm] = useState({"data1" :'', "data2": '', "data3": ''}); 

const handleFormChange = (ev, type) => {

  ev.preventDefault();
  const formLocal =form;
  formLocal[type] = ev.target.value;
  setForm(formLocal)
  
}


const changeToParent = () => {
  props.callParent(form);
}


  return (
    
    <div className ="container">

                    <h1 className ="header">Get Data</h1>

                    

                    <label ><b>Data1:</b></label>
                    <input type={"number"} onChange={(ev) => handleFormChange(ev, 'data1')} /> <br/>

                    <label ><b>Data2:</b></label>
                    <input type={"number"} onChange={(ev) => handleFormChange(ev, 'data2')} /> <br/>  
    
                    <label ><b>Data3:</b></label>
                    <input  type={"number"} onChange={(ev) => handleFormChange(ev, 'data3')} /><br/><br/>

                   <button  onClick={() => changeToParent()} className="signupbtn">Enter</button>

                   

    </div>
    
  )
}

export default Userform