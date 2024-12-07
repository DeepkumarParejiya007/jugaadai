import React from "react";
import teamlogo from '../assets/dark-team-logo.jpg';
import '../all.css';
import SignIn from "./signup";
import {Link} from "react-router-dom";

export default function Entry() {
    return( 
        <div className="entryMain">
            <div className="teamIntro">
                <div className="teamLogo">
                    <img src={teamlogo} alt="team logo" />
                </div>
                <div className="teamName">
                    <h1> The Continental Group presents </h1>
                </div>
            </div>
            <div id="sign">
                <div className="greeting">
                    <h1>Welcome to JugaadAI</h1>
                </div>
                <div className="authbtns">
                    <Link to='/signin'><button type="button">SignIn</button></Link>
                    <br />
                    <Link to='/signup'><button type="button">SignUp</button></Link>
                </div>
                
                <p id="bottom">@All Rights are reserved by JugaadAI</p>
            </div>
        </div>
    );
}