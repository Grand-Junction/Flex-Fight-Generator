import { Link } from 'react-router-dom';
import Button from "./Button";
import Fighters from "./Fighters";
import RenderedFighterRandom from "./RenderedFighterRandom";

function RandomOppResult() {

    function randomRendered() {

        const randomFighter = Math.floor(Math.random() * Fighters.length) + 1;
        const randomFighterID = Fighters[randomFighter].id;
        const randomFighterName = Fighters[randomFighter].fighter;
        const randomFighterLevel = Fighters[randomFighter].level[Math.floor(Math.random() * Fighters[randomFighter].level.length)];

        return <RenderedFighterRandom 
        key={randomFighterID}
        selectedFighter={randomFighterName} 
        selectedLevel={randomFighterLevel}
        />
    }

    return (
        <div id="fight-main-div">
            <div className="fight-card">
                {randomRendered()}
                 <div className="results-btn">
                    {/* <span><Button btnText="NEW RANDOM OPPONENT"/></span> */}
                    <Link to='/homepage'><Button btnText="RETURN TO FIGHT PAGE"/></Link>
                </div>
            </div>
        </div>
    );
}

export default RandomOppResult;