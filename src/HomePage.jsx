import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainCard from "./MainCard";

function HomePage() {

    return (
        <div id="homepage-parent-div">
            <Header />
            <MainCard />
            <Footer />
        </div>
    );
 
}

export default HomePage;