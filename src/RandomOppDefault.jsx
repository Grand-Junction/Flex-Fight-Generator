import { Link } from 'react-router-dom';
import Button from "./Button";

function RandomOppDefault() {

        return (
            <>
                {/* <img src="https://picsum.photos/275/400" alt="" /> */}
                <h2 id='random-opp-h2'>READY TO FIGHT!</h2>
                <div className="results-btn">
                    <Link to="/random"><Button btnText="TIME TO FIGHT!"/></Link>
                </div>
            </>
        );
}

export default RandomOppDefault;