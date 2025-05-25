
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from "./Welcome";
import HomePage from "./HomePage";
import RandomOppPage from "./RandomOppPage";
import SelectNationPage from "./SelectNationPage";

function App() {

  return (
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
          </Switch>
        </div>
    </Router>
  );
}

export default App;
