import React from "react";

function FightCard() {
    return (
        <div className="main-card">
        <div className="fight-card">
            <h2>RANDOM OPPONENT:</h2>
            <img src="https://picsum.photos/275/400" alt="" />
            <button type="button" className="fight-btn">FIGHT!</button>
        </div>
        <div className="fight-card">
            <h2 id="nation">SELECT NATION:</h2>
            <img src="https://picsum.photos/275/400" alt="" />
            <button type="button" className="fight-btn">FIGHT!</button>
        </div>
    </div>
    ) ;
}

export default FightCard;