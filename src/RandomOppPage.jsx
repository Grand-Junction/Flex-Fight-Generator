import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainCardRandomOpp from "./MainCardRandomOpp";

function RandomOppPage() {

    return (
        <div id="homepage-parent-div">
            <Header />
                <MainCardRandomOpp />
            <Footer />
        </div>
    );
 
}

export default RandomOppPage;