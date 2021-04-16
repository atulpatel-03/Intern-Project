import React from 'react';
import Profile from "./Profile";

const Grade = () => {
    const[isClick, setClick]= React.useState("13th");

    

    return (
        <div className="grade">
            <text className="gradeheading">Select Grade:</text>
            
        <div clasName="gradebuttondiv">  
            <button onClick={() => setClick("13th")} className="btn btn-dark gradebutton1">13th</button>
            
            <button href="imp"  onClick={() => setClick("12th")} className="btn btn-dark gradebutton2">12th</button>
            <button onClick={() => setClick("11th")} className="btn btn-dark gradebutton3">11th</button>
            <button onClick={() => setClick("10th")} className="btn btn-dark gradebutton4">10th</button>
            <button onClick={() => setClick("9th")} className="btn btn-dark gradebutton5">9th</button>
            <button onClick={() => setClick("8th")} className="btn btn-dark gradebutton6">8th</button>
            <button onClick={() => setClick("7th")} className="btn btn-dark gradebutton7">7th</button>
            <button onClick={() => setClick("6th")} className="btn btn-dark gradebutton8">6th</button>
            <button onClick={() => setClick("5th")} className="btn btn-dark gradebutton9">1-5</button>
            <button onClick={() => setClick("1")} className="btn btn-dark gradebutton0">lkg-ukg</button>
</div>
            <hr className="gradeline"></hr>
            <div  className="tabs">
            { isClick === "13th" && <Profile title="13" name="Atul Patel" />}
            { isClick === "12th" && <Profile title="12" name="Yogesh Sharma"/>}
            { isClick === "11th" && <Profile title="11" name="Chirag Ahuja" />}
            { isClick === "10th" && <Profile title="10" name="Satyam Jaiswal" />}
            { isClick === "9th" && <Profile title="9" name="Piyush Mishra" />}
            { isClick === "8th" && <Profile title="8" name="Hirdesh Garg" />}
            { isClick === "7th" && <Profile title="7" name="Manish Kumar" />}
            { isClick === "6th" && <Profile title="6" name="Gourav kumar" />}
            { isClick === "5th" && <Profile title="1-5" name="Priyanshu kharkur" />}
            { isClick === "1" && <Profile title="LKG-UKG" name="Amit Yadav" />}

            </div>
            
           
            
        </div>
    )
}

export default Grade
