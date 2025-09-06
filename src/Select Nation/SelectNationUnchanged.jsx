import React from "react";

const SelectNationUnchanged = () => {
  return (
    <div>
      <img
        src="../assets/select-nation-img.png"
        alt="generic vanguard card"
        className="img-default"
      />
      <h2 id="select-nation-res-h2">SELECT YOUR NATION:</h2>
      <label>
        <select name="" id="select-dropdown">
          <option value="keter">Keter Sanctuary</option>
          <option value="dragon">Dragon Empire</option>
          <option value="stoicheia">Stoicheia</option>
          <option value="dark">Dark States</option>
          <option value="brandt">Brandt Gate</option>
          <option value="lyrical">Lyrical Monasterio</option>
        </select>
      </label>
    </div>
  );
};

export default SelectNationUnchanged;
