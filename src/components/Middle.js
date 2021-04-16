import React from 'react';

const Middle = () => {
    return (
        <div className="middle">
            <div className="ellipse">
                <h1 className="intro">INTRODUCTION</h1>
                <p className="content">A complete platform for online and offline tutoring
                which is a network of knowledge where student can learn from the desired teacher as well as it 
                enables teacher to teach the students.</p>
            </div>
        
            <div className="whatsapp"></div>
            <div className="middleC">now your tutor is just one step away</div>
            <div className="middleC2">let’s gain together</div>
            
            <form className="middleform"> 
        
            <input className="findIn" type="text"  placeholder="SEARCH YOUR TUTOR" name="name" />
            <button type="button"  className="btn btn-light find">FIND</button>
            
        </form>
     
        <div className="or">OR</div>
        <div className="findme"><p>find me a tutor</p></div>
        <div className="downloadc">Find Your Tutor Today ! Download App Now</div>
        <div className="downloadcc">Get Link to download the App</div>
        <div className="gplay"></div>
        <div className="appstore"></div>
        <div className="num">+91</div>
        
        <form className="number"> 
        
        <input className="numbertext" type="text" name="name" />
        <button className="numberbutton">GET LINK</button>
        
        </form>
        
        </div>
    )
}

export default Middle;
