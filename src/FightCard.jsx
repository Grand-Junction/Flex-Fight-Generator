import React from "react";
import RandomOppDefault from "./RandomOppDefault";
import SelectNationDefault from "./SelectNationDefault";
import RandomOppResult from "./RandomOppResult";

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
    );
}

export default FightCard;