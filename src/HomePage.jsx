import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainCardDefault from './MainCardDefault';

function HomePage() {

    return (
        <div id="homepage-parent-div">
            <Header />
                <MainCardDefault />
            <Footer />
        </div>
    );
 
}

export default HomePage;