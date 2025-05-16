import React, { useState } from "react";
import Welcome from "./Welcome";
import HomePage from "./HomePage";

function App() {

  const [goToHome, setGoToHome] = useState(true);

  function goHome() {
    setGoToHome((goToHome) => !goToHome);
  }

  return (
    <div onClick={goHome}>
      {goToHome ? <Welcome /> : <HomePage />}
    </div>
  );
}

export default App;
