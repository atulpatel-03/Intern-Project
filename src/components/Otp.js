import React from 'react'

const Otp = () => {
    return (
        <div className="otp">
        <div className="otptext">please enter otp sent to your

mobile number xxxxxxxxxx <a className="edit"> Edit</a></div>
        <input type="text" className="otpform" maxlength="1" />
        
        <a className="resend">RESEND OTP</a>
        <button className="btn btn-large otpbutton">VARIFY  AND PROCEED</button>
        </div>
    )
}

export default Otp;
