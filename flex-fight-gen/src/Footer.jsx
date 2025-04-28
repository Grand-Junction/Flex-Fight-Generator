import React from "react";

const date = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <ul className="flex-parent-2">
                <li className="flex-child" id="footer-copyright">Copyright © {date} ZIEGFRIEDT</li>
            </ul>
        </footer>
    );

}

export default Footer;