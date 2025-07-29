import { Link } from "react-router-dom";
import React from "react";
import Button from "./Button";

function Header() {

    return (
        <header>
            <nav>
                <ul id="header-parent">
                    <li className="header-child" id="app-title">Dear Days Fight Generator</li>
                    <span id="header-btn"><Link to="/"><Button btnText="RETURN HOME" /></Link></span>
                </ul>
            </nav>
        </header>
    );

}

export default Header;