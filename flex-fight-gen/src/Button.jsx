import React from "react";

function Button(props) {
    return (
        <button onClick={props.clickFunction} type="button" id="site-entry">ENTER HERE</button>
    );
}

export default Button;