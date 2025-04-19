import React, { useState } from "react";
import Button from "./Button";
import HomePage from "./HomePage";

function Welcome(props) {

    const [button, setButton] = useState(false);

    function isClicked() {
        console.log(`it works`);
        setButton((prevValue) => !prevValue);
        console.log(button);
    }

    return (
    <div id="welcome-div">
        <h1>Welcome to Dear Days 2!</h1>
        <h2>Prepare to test your mettle! No lose intended!</h2>
        <Button clickFunction={isClicked}/>
    </div>
    );
}

export default Welcome;