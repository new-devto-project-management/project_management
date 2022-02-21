import React from "react";
// import { Navlink } from "react-dom";
//  de mon home je vais chercher les autres elements composants
import Navigation from "../Navigation";
import "../../styles/components/authers/home.css";

const Home = () => {
  return (
    <main>
      <div className="home">
          <Navigation />
        <div className="homeContent">
          <div className="content">
            {/* menu */}

            <div className="home-section">
            <h6>hello SECTION HOME</h6>
            </div>
          </div>
          


        </div>
      </div>
    </main>
  );
};

export default Home;