// import React from 'react';
// import Otp from "./Otp";
// import Loginform from "./Loginform";
// import ReactDOM from "react-dom";
// import firebase from "../firebase";

// const Login = () => {
//     const [mobileno, setMobileno]=React.useState("")
//     const [mobile,setMobile]= React.useState("");
//     const [form, setForm]=React.useState('');
    
//     function otpForm(otp){
//         setForm(otp);
//     }

//     function handleChange(e){
//         setMobileno(e.target.value);
//     }
//     function handleClick(){

//         setMobileno(mobileno);
        
            
          
//         if(mobileno.length === 10){
//             setMobile("mobile");
//             let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
//             let number='+91808537194';
//             firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
                
//                 let code= form;
//                 if(code == null) return;
//                 e.confirm(code).then(function(result){
//                     console.log(result.user,'user');
//                     document.querySelector('label').textContent= result.user.phoneNumber + "verified Number";

//                 })
//             }) 
            
            
        
//         }else{
//             alert("Please enter valid phone number")
            
//         }



//     }

//     return (
//         <div className="loginScreen">
//         <div className="logindiv">
//         <div className="login">Enter Mobile Number to Continue</div>
//         <form className="form-inline mobile">
//             <label>+91</label>
//             <input  className="mobileIn" type="tel" placeholder="Mobile Number" value={mobileno} onChange={handleChange} pattern="[0-9]{3}[0-9]{3}[0-9]{4}"   required />
//         </form>
           
//             <button onClick={handleClick}  className="btn btn-large next">Next</button>
//             <div className="and">OR</div>
//             <button onClick={ () => setMobile("google")} type="button" className=" btn btn-large google">Continue With Google</button>
//         </div>
//         { mobile === "mobile" && <Otp onClick={otpForm}/>}
//         { mobile === "google" && <Loginform />}
//         </div>
//     )
// }

// export default Login;

// ldskfgjlajkdg

import React, { Component } from 'react'
import firebase from './firebase'
export class Login extends Component {

  handleClick = () => {
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');     
    var number = '+918085371494';//+1 650-555-1234

    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
      var code = prompt("enter tyhe code");//123456


      if (code === null) return;


      e.confirm(code).then(function (result) {
        console.log(result.user);

        document.querySelector('label').textContent += result.user.phoneNumber + "Number verified";

      }).catch(function (error) {
        console.error(error);

      });

    })
      .catch(function (error) {
        console.error(error);

      });
  }
  render() {
    return (
      <div>
        <label></label>

        <div id="recaptcha"></div>

        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default Login;