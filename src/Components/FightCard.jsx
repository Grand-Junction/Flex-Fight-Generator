import React from "react";
import RandomOppDefault from "../Random Opponent/RandomOppDefault";
import SelectNationDefault from "../Select Nation/SelectNationDefault";
import RandomOppResult from "../Random Opponent/RandomOppResult";

const FightCard = () => (
  <>
    <div id="fight-main-div">
      <div className="fight-card">
        <RandomOppDefault />
      </div>
      <div className="fight-card">
        <SelectNationDefault />
      </div>
    </div>
  </>
);

export default FightCard;
