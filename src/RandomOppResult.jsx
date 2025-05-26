import { Link } from 'react-router-dom';
import { useFetcher } from '@axanc/react-hooks';
import Button from "./Button";
import Fighters from "./Fighters";
import RenderedFighterRandom from "./RenderedFighterRandom";

function RandomOppResult() {

    const fetcher = useFetcher();

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

    function refreshPage() {
        fetcher.load("/random");
    }

    return (
        <div id="fight-main-div">
            <div className="fight-card">
                {randomRendered()}
                 <div className="results-btn">
                    <span onClick={refreshPage}><Button btnText="NEW RANDOM OPPONENT"/></span>
                    <Link to='/homepage'><Button btnText="RETURN TO FIGHT PAGE"/></Link>
                </div>
            </div>
        </div>
    );
}

export default RandomOppResult;