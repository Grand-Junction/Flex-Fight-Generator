import React, { useState } from "react";
import Button from "./Button";

function Header() {

    const [ backHome, setBackHome ] = useState(true);

    function returnHome() {
        setBackHome((backHome) => !backHome);
    }

    return (
        <header>
            <nav>
                <ul id="header-parent">
                    <li className="header-child" id="app-title">Dear Days Fight Generator</li>
                    <span id="header-btn" onClick={returnHome}><Button btnText="RETURN HOME" /></span>
                    {backHome ? null : <Welcome />}
                </ul>
            </nav>
        </header>
    );

}

export default Header;