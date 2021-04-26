import React, { Component } from 'react'; 
import reactDom from 'react-dom';
import App from "../App";

export const Header = () => {
    const [sign, setSign]=React.useState(false);
    return(
        
        <div className="topbar">
        
        <div className="loginC">
        <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand"  href="#"><i class="fab fa-vimeo-v fabicon"></i>idyayan</a>
        <div className="navbarbutton">
        <div className="col-lg-12 col-md-5 col-sm-3">
        <button className="btn btn-dark navbutton1">EXPLORE</button>
            <button  className="btn btn-dark navbutton2">COURSES</button>
            <button className="btn btn-dark navbutton3">FREE CODING</button>
            <button className="btn btn-dark navbutton4">TUTOR</button>
            <button className="btn btn-dark navbutton5">STUDY MATERIALS</button>
            <button className="btn btn-dark navbutton6">MORE</button>
            <button onClick={ () => setSign(true)} className="btn btn-dark navbutton7">SIGNIN</button>
        </div>
        </div>
        </nav>
        <div>
       
        {sign === true && <App />} 
        </div>
        </div>
        </div>
        
    )
    
}

export default Header;
