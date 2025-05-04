import React from "react";
import Button from "./Button";

function MainCard() {
    return (
        <div className="main-card">
            <div className="fight-card">
                <h2>RANDOM OPPONENT:</h2>
                <img src="https://picsum.photos/300/400" alt="" />
                <Button />
            </div>
            <div className="fight-card">
                <h2 id="nation">SELECT NATION OPPONENT:</h2>
                <img src="https://picsum.photos/300/400" alt="" />
                <Button />
            </div>
        </div>
    );
}

export default MainCard;