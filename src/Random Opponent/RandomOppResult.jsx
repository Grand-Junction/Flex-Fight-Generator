import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../Components/Button";
import Fighters from "../Fighters";
import RenderedFighterRandom from "../Components/RenderedFighterRandom";

const RandomOppResult = () => {
  const [refreshPage, setRefreshPage] = useState(true);

  const randomRendered = () => {
    const fighterArray = [];
    for (let fighter in Fighters) {
      fighterArray.push(fighter);
    }

    const randomFighterChoice = Math.floor(Math.random() * fighterArray.length);
    const randomFighter = fighterArray[randomFighterChoice];

    return (
      <RenderedFighterRandom
        key={Fighters[randomFighter].id}
        selectedImg={Fighters[randomFighter].card}
        selectedFighter={Fighters[randomFighter].fighter}
        selectedMain={Fighters[randomFighter].main}
      />
    );
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

export default RandomOppResult;
