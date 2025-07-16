function RenderedFighterRandom(props) {
  return (
    <div className="rendered-fighter-random">
      <img className="fighter-img-bg" src={props.selectedImg} alt="" />
      <h3>Your Opponent For This Fight:</h3>
      <h2 className="random-selected-fighter">{props.selectedFighter}</h2>
      <em>
        <h3 id="bossTxt">{props.selectedMain}</h3>
      </em>
    </div>
  );
}

export default RenderedFighterRandom;
