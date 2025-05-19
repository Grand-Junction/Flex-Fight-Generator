import { Link } from 'react-router-dom';
import Button from "./Button"

function SelectNationDefault() {
    return (
        <>
            <h2 id="nation">SELECT NATION:</h2>
            <img src="https://picsum.photos/275/400" alt="" />
            <Link to="/select"><Button btnText="TIME TO FIGHT!"/></Link>
        </>
    );
}

export default SelectNationDefault;