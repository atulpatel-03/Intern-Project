import React, { Component } from 'react'; 
import Login from "./Login";

export const Header = () => {
    const [sign, setSign]=React.useState(false);
    return(
        <div className="loginC">
        <nav class="navbar navbar-expand-lg topbar">
        <a class="navbar-brand"  href="#"><i class="fab fa-vimeo-v fabicon"></i>idyayan</a>
        <div className="navbarbutton">
        <button className="btn btn-dark navbutton1">EXPLORE</button>
            <button  className="btn btn-dark navbutton2">COURSES</button>
            <button className="btn btn-dark navbutton3">FREE CODING</button>
            <button className="btn btn-dark navbutton4">TUTOR</button>
            <button className="btn btn-dark navbutton5">STUDY MATERIALS</button>
            <button className="btn btn-dark navbutton6">MORE</button>
            <button onClick={ () => setSign(true)} className="btn btn-dark navbutton7">SIGNIN</button>
        </div>
        </nav>
        <div>
        {sign === true && <Login />} 
        </div>
        </div>
    )
    
}

export default Header;
