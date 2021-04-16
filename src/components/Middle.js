import React from 'react';

const Middle = () => {
    return (
        <div className="middle">
                    <div className="ellipse">
                <h1 className="intro" style={{color:'blue'}}>INTRODUCTION</h1>
                <p className="content">A complete platform for online and offline tutoring
                which is a network of knowledge where student can learn from the desired teacher as well as it 
                enables teacher to teach the students.</p>
            </div>
        
            <div className="whatsapp"></div>
            <div class="mymiddle">
            <div className="middleC">now your tutor is just one step away</div>
            <div className="middleC2">let’s gain together</div>
            </div>
            <form className="middleform"> 
        
            <input className="findIn" type="text"  placeholder="SEARCH YOUR TUTOR" name="name" />
            <button type="button"  className="btn btn-light find">FIND</button>
            
        </form>
     
        <div className="or">OR</div>
        <button className="btn btn-large findme">find me a tutor</button>
        <div className="downloadc">Find Your Tutor Today ! Download App Now</div>
        <div className="downloadcc">Get Link to download the App</div>
        <div className="gplay"></div>
        <div className="appstore"></div>
        
        <div className="num">+91</div>
        <form className="number"> 
        
        <input className="numbertext" type="text" name="name" />
        <button className="btn btn-large numberbutton">GET LINK</button>
        
        </form>
        <div className="feauture">
            <text className="feauturet">Keep Learning along with
            free coding classes
            </text>
            <div className="feauturediv">
            <h1 className="feauturedivdiv">Coding Classes for age 6 - 12</h1>
            <div className="feauturebutton"></div>
            </div>
        </div>
        </div>
      

   
    )
}

export default Middle;
