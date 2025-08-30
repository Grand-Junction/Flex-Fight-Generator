import { Link } from "react-router-dom";
import Button from "../Components/Button";

const SelectNationDefault = () => {
  return (
    <div>
      <img
        src="../assets/vg-card.png"
        alt="generic vanguard card"
        className="img-default"
      />
      <div className="results-btn">
        <Link to="/select">
          <Button btnText="SELECT NATION" />
        </Link>
      </div>
    </div>
  );
};

export default SelectNationDefault;
