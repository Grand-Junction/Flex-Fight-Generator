import React from "react";

const date = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <ul className="footer-parent">
                <li className="footer-child" id="footer-copyright">Copyright © {date} ZIEGFRIEDT</li>
            </ul>
        </footer>
    );

}

export default Footer;