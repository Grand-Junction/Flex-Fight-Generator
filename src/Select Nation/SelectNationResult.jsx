import React from "react";
import { Link } from "react-router-dom";
import Fighters from "../Fighters";
import Button from "../Components/Button";

const SelectNationResult = () => {
  return (
    <div id="fight-main-div">
      <div className="fight-card">
        <img
          src="../assets/select-nation-img.png"
          alt="generic vanguard card"
          className="img-default"
        />
        <h2 id="select-nation-res-h2">SELECT YOUR NATION:</h2>
        <label>
          <select name="CHOOSE HERE:" id="select-dropdown">
            <option value="keter">Keter Sanctuary</option>
            <option value="dragon">Dragon Empire</option>
            <option value="stoicheia">Stoicheia</option>
            <option value="dark">Dark States</option>
            <option value="brandt">Brandt Gate</option>
            <option value="lyrical">Lyrical Monasterio</option>
          </select>
        </label>
        <div className="results-btn">
          <div>
            <Button btnText="NEW SELECT OPPONENT" />
          </div>
          <Link to="/homepage">
            <Button btnText="RETURN TO FIGHT PAGE" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectNationResult;
