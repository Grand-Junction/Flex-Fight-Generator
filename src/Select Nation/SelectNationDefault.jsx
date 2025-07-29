import { Link } from 'react-router-dom';
import Button from "../Components/Button"

function SelectNationDefault() {
    return (
        <>
            <h2 id="nation">SELECT NATION:</h2>
            <Link to="/select"><Button btnText="TIME TO FIGHT!"/></Link>
        </>
    );
}

export default SelectNationDefault;