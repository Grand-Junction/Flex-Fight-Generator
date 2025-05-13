import React from "react";
import Button from "./Button";

function Welcome() {

    return (
    <div id="welcome-div">
        <div className="welcome-div-2">
            <h1 id="welcome-child-1">Welcome to Dear Days 2!</h1>
            <h2>Prepare to test your mettle! No lose intended!</h2>
            <span><Button btnText="ENTER HERE" /></span> 
        </div>
    </div>
    );
}

export default Welcome;