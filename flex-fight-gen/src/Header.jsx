import React from "react";

function Header() {
    return (
        <nav>
            <ul className="flex-parent">
                <li className="flex-child" id="app-title">Dear Days Fight Generator</li>
                <li className="flex-child" id="return-home">Return Home</li>
            </ul>
        </nav>
    );

}

export default Header;