import { Link } from "react-router-dom";
import Button from "../Components/Button.jsx";

// DEFAULT RANDOM OPPONENT CARD

function RandomOppDefault() {
  return (
    <>
      <img
        src="../assets/vg-card.png"
        alt="generic vanguard card"
        className="img-default"
      />
      <div className="results-btn">
        <Link to="/random">
          <Button btnText="RANDOM OPPONENT" />
        </Link>
      </div>
    </>
  );
}

export default RandomOppDefault;
