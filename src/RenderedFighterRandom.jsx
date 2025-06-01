
function RenderedFighterRandom(props) {
    return (
        <div className="rendered-fighter-random">
            <h3>Your Opponent For This Fight:</h3>
            <h2 className="random-selected-fighter">{props.selectedFighter}</h2>
            <em><h3 id="bossTxt">"{props.selectedMain}"</h3></em>
            <h3 id="difficulty">Difficulty Level:</h3>
            <h2 className="random-selected-fighter">{props.selectedLevel}</h2>
        </div>
    );
}

export default RenderedFighterRandom;