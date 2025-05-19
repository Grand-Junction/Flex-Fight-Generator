import { Link } from 'react-router-dom';
import Button from "./Button";

function Welcome() {

    return (
    <div id="welcome-div">
        <div className="welcome-div-2">
            <h1 id="welcome-child-1">Welcome to Dear Days 2!</h1>
            <h2>Prepare to test your mettle! No lose intended!</h2>
            <Link to="/homepage"><Button btnText="ENTER HERE" /></Link>
        </div>
    </div>
    );
}

export default Welcome;