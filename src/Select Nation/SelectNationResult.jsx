import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import keterFighters from "../NationFighters/keterFighters";
import Button from "../Components/Button";
import RenderedFighterRandom from "../Components/RenderedFighterRandom";
import SelectNationChoice from "./SelectNationChoice";

const SelectNationResult = () => {
  const [refreshPage, setRefreshPage] = useState(true);

  const randomRendered = () => {
    const nationValue = document.querySelector("#select-dropdown");
    const randomFighterKeter = Math.floor(Math.random() * keterFighters.length);
    const KeterFighterID = keterFighters[randomFighterKeter].id;
    const KeterFighterCard = keterFighters[randomFighterKeter].card;
    const KeterFighterName = keterFighters[randomFighterKeter].fighter;
    const KeterFighterMain = keterFighters[randomFighterKeter].main;

    switch (nationValue.value) {
      case "keter":
        return (
          <RenderedFighterRandom
            key={KeterFighterID}
            selectedImg={KeterFighterCard}
            selectedFighter={KeterFighterName}
            selectedMain={KeterFighterMain}
          />
        );
      case "dragon":
        console.log("dragon", "this is dragon");
        break;
    }
  };

  const pageRefresh = () => {
    setRefreshPage(!refreshPage);
    return randomRendered();
  };

  return (
    <div id="fight-main-div">
      <div className="fight-card">
        {refreshPage === true ? randomRendered() : pageRefresh()}
        <div className="results-btn">
          <div onClick={pageRefresh}>
            <Button btnText="NEW RANDOM OPPONENT" />
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
