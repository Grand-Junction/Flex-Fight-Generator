import React from "react";

function Button(props) {
    return (
        <button type="button" className="btn-component">{props.btnText}</button>
    );
}

export default Button;