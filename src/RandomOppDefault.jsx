import { Link } from "react-router-dom";
import Button from "./Button";

// DEFAULT RANDOM OPPONENT CARD

function RandomOppDefault() {
  return (
    <>
      <img
        src="../assets/vg-card.png"
        alt="generic vanguard card"
        className="img-default"
      />
      {/* <h2 id="random-opp-h2">READY TO FIGHT!</h2> */}
      <div className="results-btn">
        <Link to="/random">
          <Button btnText="RANDOM OPPONENT" />
        </Link>
      </div>
    </>
  );
}

export default RandomOppDefault;
