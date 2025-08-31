import { Link } from "react-router-dom";
import Button from "../Components/Button";
import SelectNationChoice from "./SelectNationChoice";

const SelectNationDefault = () => {
  return (
    <div>
      <SelectNationChoice />
      <div className="results-btn">
        <Link to="/select">
          <Button btnText="SELECT NATION" />
        </Link>
      </div>
    </div>
  );
};

export default SelectNationDefault;
