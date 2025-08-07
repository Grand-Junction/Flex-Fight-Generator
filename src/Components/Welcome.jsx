import { Link } from "react-router-dom";
import Button from "./Button";

const Welcome = () => (
  <div id="welcome-div">
    <div className="welcome-div-2">
      <h1 id="welcome-child-1">
        Dear Days <br />
        Battleground
      </h1>
      <div className="results-btn" id="welcome-page-btn">
        <Link to="/homepage">
          <Button btnText="STAND UP, VANGUARD!" />
        </Link>
      </div>
    </div>
  </div>
);

export default Welcome;
