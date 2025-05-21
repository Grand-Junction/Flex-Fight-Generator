import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";

function RandomOppResult() {
    return(
        <div id="fight-main-div">
            <div className="fight-card">
                <h2>RANDOM RESULT HERE</h2>
                <img src="https://picsum.photos/275/400" alt="" />
                <div className="results-btn">
                    <span><Button btnText="NEW RANDOM OPPONENT"/></span>
                    <span><Button btnText="RETURN TO FIGHT PAGE"/></span>
                </div>
            </div>
        </div>
    );
}

export default RandomOppResult;