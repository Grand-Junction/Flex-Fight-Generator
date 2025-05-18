import React from "react";
import RandomOppDefault from "./RandomOppDefault";
import SelectNationDefault from "./SelectNationDefault";

function FightCard() {

    return (
        <div id="fight-main-div">
            <div className="fight-card">
                <RandomOppDefault /> 
            </div>
            <div className="fight-card">
                <SelectNationDefault />
            </div>
        </div>
    ) ;
}

export default FightCard;