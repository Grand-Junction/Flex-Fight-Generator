import React, { useState } from "react";
import Welcome from "./Welcome";
import HomePage from "./HomePage";


function App() {

  const [ pageState, setPageState ] = useState(true);

  function isClicked() {
    console.log(`it works`);
    setPageState((initialValue) => !initialValue);
  }

  return (
    <div onClick={isClicked}>
      {pageState ? <Welcome /> : <HomePage />}
    </div>
  );
}

export default App;
