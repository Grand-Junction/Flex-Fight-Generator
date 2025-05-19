import { Link } from 'react-router-dom';
import Button from "./Button";

function RandomOppDefault() {

        return (
            <>
                <h2>RANDOM OPPONENT:</h2>
                <img src="https://picsum.photos/275/400" alt="" />
                <Link to="/random"><Button btnText="TIME TO FIGHT!"/></Link>
            </>
        );
}

export default RandomOppDefault;