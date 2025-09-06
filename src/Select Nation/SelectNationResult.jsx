import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Fighters from "../Fighters";
import Button from "../Components/Button";
import RenderedFighterRandom from "../Components/RenderedFighterRandom";
import SelectNationUnchanged from "./SelectNationUnchanged";

const SelectNationResult = () => {
  const [updateFighter, setUpdateFighter] = useState(true);

  /* -----  ----- */

  const newlySelected = () => {
    setUpdateFighter(!updateFighter);
  };

  const chosenOpponent = () => {
    newlySelected();
    const newFighters = [];
    const selectOption = document.querySelector("#select-dropdown");
    switch (selectOption.value) {
      case "keter":
        Fighters.filter((keter) => {
          if (keter.nation === "Keter Sanctuary") {
            newFighters.push(keter);
          }
        });
        break;
    }

    /* -----  ----- */

    const randomFighter = Math.floor(Math.random() * newFighters.length);

    const randomFighterID = newFighters[randomFighter].id;
    const randomFighterCard = newFighters[randomFighter].card;
    const randomFighterName = newFighters[randomFighter].fighter;
    const randomFighterMain = newFighters[randomFighter].main;

    return (
      <RenderedFighterRandom
        key={randomFighterID}
        selectedImg={randomFighterCard}
        selectedFighter={randomFighterName}
        selectedMain={randomFighterMain}
      />
    );
  };

  return (
    <div id="fight-main-div">
      <div className="fight-card">
        {updateFighter === true ? <SelectNationUnchanged /> : chosenOpponent()}
        <div className="results-btn">
          <div onClick={chosenOpponent}>
            <Button btnText="CHALLENGE OPPONENT" />
          </div>
          <Link to="/homepage">
            <Button btnText="RETURN TO FIGHT PAGE" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectNationResult;
