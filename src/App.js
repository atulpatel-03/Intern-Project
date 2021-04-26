import React, { Component } from 'react';
import firebase from './firebase';
import Otp from "./components/Otp";
import Loginform from './components/Loginform';


const App = () => {
  const [mobileno, setMobileno]=React.useState("")
  const [mobile,setMobile]= React.useState("");
  const [form, setForm]=React.useState('');


    
    function otpForm(otp){
        setForm(otp);
    }

  function handleChange(e){
      setMobileno(e.target.value);
  }

  function handleClick(){
    setMobileno(mobileno);
    
    if(mobileno.length === 10){
      var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');     
    var number = '+91'+mobileno;//+1 650-555-1234

    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
      setMobile("mobile");
      var code =form;


      if (code === null) return;


      e.confirm(code).then(function (result) {
        console.log(result.user);


        document.querySelector('.otptext').textContent += result.user.phoneNumber + "Number verified";
      

      }).catch(function (error) {
        console.error(error);

      });

    })
      .catch(function (error) {
        console.error(error);

      });
    }else{
      alert("Please enter valid phone number")
    }
  }

  return (
    <div className="loginScreen">
        <div className="logindiv">
        <div className="login">Enter Mobile Number to Continue</div>
        <form className="form-inline mobile">
            <label>+91</label>
            <input  className="mobileIn" type="tel" placeholder="Mobile Number" value={mobileno} onChange={handleChange} pattern="[0-9]{3}[0-9]{3}[0-9]{4}"   required />
        </form>
           
    <div>
     

        <div id="recaptcha"></div>

        <button onClick={handleClick} className="btn btn-large next">Click</button>
        <div className="and">OR</div>
            <button  type="button" className=" btn btn-large google">Continue With Google</button>
    </div>
    
    </div>
    { mobile === "mobile" && <Otp onClick={otpForm}></Otp>}
    </div>
  )
}

export default App

