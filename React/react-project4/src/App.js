import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn";
import SigninSuccessmessage from "./components/SignInSuccessmessage/SignInSuccessmessage";
import SignUp from "./components/SignUp/SignUp";
import SignupSuccessMessage from "./components/SignupSuccessMessage/SignupSuccessMessage";


function App() {

  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const [formIsSubmittedc, setFormIsSubmittedc] = useState(false);

  const submitForm = ()=>
  {
     setFormIsSubmitted(true);
  };

  const submitFormc = ()=>
  {
     setFormIsSubmittedc(true);
  };


  return (
    <div>
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path = "signin" element={!formIsSubmittedc ? (<SignIn submitFormc={submitFormc}></SignIn>): (<SigninSuccessmessage></SigninSuccessmessage>)} ></Route>
        <Route path = "signup" element={!formIsSubmitted ? (<SignUp submitForm = {submitForm}></SignUp>): (<SignupSuccessMessage></SignupSuccessMessage>) }></Route>
        </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
