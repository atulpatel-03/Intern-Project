import React from 'react';
import Otp from "./Otp";
import Loginform from "./Loginform";
import ReactDOM from "react-dom";

const Login = () => {
    const [mobileno, setMobileno]=React.useState("")
    const [mobile,setMobile]= React.useState("");
    const [form, setForm]=React.useState(false);
    

    function handleChange(e){
        setMobileno(e.target.value);
    }
    function handleClick(){
        setMobileno(mobileno);
          
        if(mobileno.length === 10){
         
            setMobile("mobile");
        
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
            <button onClick={handleClick} className="btn btn-large next">Next</button>
            <div className="and">OR</div>
            <button onClick={ () => setMobile("google")} className=" btn btn-large google">Continue With Google</button>
        </div>
        { mobile === "mobile" && <Otp />}
        { mobile === "google" && <Loginform />}
        </div>
    )
}

export default Login;
