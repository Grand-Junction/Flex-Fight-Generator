import React, { useState } from "react";
import FightCard from "./FightCard";

function MainCard() {

    const [ updateState, setUpdateState ] = useState(true);

    function setState() {
        setUpdateState((updateState) => !updateState);
    }

    return (
        <div onClick={setState}>
            <FightCard />
        </div>
    );
}

export default MainCard;