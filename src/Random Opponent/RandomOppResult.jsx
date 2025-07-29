import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../Components/Button";
import Fighters from "../Fighters";
import RenderedFighterRandom from "../Components/RenderedFighterRandom";

function RandomOppResult() {
  const [refreshPage, setRefreshPage] = useState(true);

  function randomRendered() {
    const randomFighter = Math.floor(Math.random() * Fighters.length);
    const randomFighterID = Fighters[randomFighter].id;
    const randomFighterCard = Fighters[randomFighter].card;
    const randomFighterName = Fighters[randomFighter].fighter;
    const randomFighterMain = Fighters[randomFighter].main;
    const randomFighterLevel =
      Fighters[randomFighter].level[
        Math.floor(Math.random() * Fighters[randomFighter].level.length)
      ];

    return (
      <RenderedFighterRandom
        key={randomFighterID}
        selectedImg={randomFighterCard}
        selectedFighter={randomFighterName}
        selectedMain={randomFighterMain}
        selectedLevel={randomFighterLevel}
      />
    );
  }

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
}

export default RandomOppResult;
