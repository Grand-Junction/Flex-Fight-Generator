import { Link } from 'react-router-dom';
import Button from "./Button";
import Fighters from "./Fighters";
import RenderedFighterRandom from "./RenderedFighterRandom";

function RandomOppResult() {

    function randomRendered() {
        
        const randomFighter = Math.floor(Math.random() * Fighters.length);
        const randomFighterID = Fighters[randomFighter].id;
        const randomFighterName = Fighters[randomFighter].fighter;
        const randomFighterMain = Fighters[randomFighter].main;
        const randomFighterLevel = Fighters[randomFighter].level[Math.floor(Math.random() * Fighters[randomFighter].level.length)];

        return <RenderedFighterRandom 
        key={randomFighterID}
        selectedFighter={randomFighterName} 
        selectedMain={randomFighterMain}
        selectedLevel={randomFighterLevel}
        />
    }

    return (
        <div id="fight-main-div">
            <div className="fight-card">
                {randomRendered()}
                <div className="results-btn">
                    <Link to='/homepage'><Button btnText="RETURN TO FIGHT PAGE"/></Link>
                </div>
            </div>
        </div>
    );
}

export default RandomOppResult;