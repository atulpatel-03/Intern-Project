import React from 'react';
import Loginform from "./Loginform";
import {BrowserRouter as Link} from "react-router-dom";

const Otp = (props) => {
    const [otp, setOtpno]=React.useState("");
    const [sample, setSample]=React.useState("");
    function handleChange(e){
        setOtpno(e.target.value);
    }

    function handleClick(){

        setOtpno(otp);
        if(otp.length === 6)
        {
            props.onClick(otp);
            setSample("loginform");
        }else{
            alert("Please enter correct otp");
        }
        
    }

    return (
        <div className="otp">
        <div className="otptext">please enter otp sent to your

mobile number xxxxxxxxxx <a className="edit"> Edit</a></div>
        <input type="tel" className="otpform" onChange={handleChange} value={otp} maxlength="6"  required/>
        
        <a className="resend">RESEND OTP</a>
        <button onClick={handleClick} className="btn btn-large otpbutton">VARIFY  AND PROCEED</button>
        { sample === "loginform" && <Loginform />}
        </div>
    )
}

export default Otp;
