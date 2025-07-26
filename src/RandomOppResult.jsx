import { Link } from "react-router-dom";
import Button from "./Button";
import Fighters from "./Fighters";
import RenderedFighterRandom from "./RenderedFighterRandom";

function RandomOppResult() {
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

  return (
    <div id="fight-main-div">
      <div className="fight-card">
        {randomRendered()}
        <div onClick="" className="results-btn">
          <Link to="/random" onClick={() => window.location.reload()}>
            <Button btnText="NEW RANDOM OPPONENT" />
          </Link>
          <Link to="/homepage">
            <Button btnText="RETURN TO FIGHT PAGE" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RandomOppResult;
