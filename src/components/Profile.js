import React from 'react';
import Demo from "./Demo";

const Profile = (props) => {
    const [demo,setDemo]=React.useState(false)
    return (
        <div className="profile">
           <div className="profiletab">
           <div className="profileimg"></div>
           <div className="title">Grades {props.title}</div>
           <div className="time">5:00 pm - 8:00 pm</div>
           <hr class="profileline"></hr>
           <div className="teachername">{props.name}</div>
           <div className="study">B.tech - IIT BOMBAY</div>
           <div className="subject">Math Expert</div>
           <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
           <div className="profilebutton">
               <button className="sendbutton">SEND REQUEST</button>
               <button onClick={ () => setDemo(true)}  className="demobutton">DEMO VIDEO</button>
           </div>
           </div>
           { demo === true && <Demo />}
          
        </div>
        
    )
}

export default Profile;
