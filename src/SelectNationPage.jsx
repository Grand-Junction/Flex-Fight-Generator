import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainCardSelectNation from "./MainCardSelectNation";

function SelectNationPage() {

    return (
        <div id="homepage-parent-div">
            <Header />
                <MainCardSelectNation />
            <Footer />
        </div>
    );
 
}

export default SelectNationPage;