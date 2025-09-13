import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./Welcome.jsx";
import HomePage from "./HomePage.jsx";
import RandomOppPage from "../Random Opponent/RandomOppPage.jsx";
import SelectNationPage from "../Select Nation/SelectNationPage.jsx";
import Error from "./Error.jsx";

const App = () => {
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/homepage">
          <HomePage />
        </Route>
        <Route path="/random">
          <RandomOppPage />
        </Route>
        <Route path="/select">
          <SelectNationPage />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  </Router>;
};

export default App;
