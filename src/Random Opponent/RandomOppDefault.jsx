import { Link } from "react-router-dom";
import Button from "../Components/Button";

const RandomOppDefault = () => {
  return (
    <div>
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
    </div>
  );
};

export default RandomOppDefault;
