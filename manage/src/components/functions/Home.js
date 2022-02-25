import React from "react";
// import { Navlink } from "react-dom";
//  de mon home je vais chercher les autres elements composants
import Navigation from "../Navigation";
import "../../styles/components/authers/home.css";
import Files from "./Files";

const Home = () => {
  return (
    <main>
      <div className="home">
          <Navigation />
        <div className="homeContent">
          <div className="content">
            {/* menu */}
            <Files/>

            <div className="home-section">
              <h6>hello SECTION HOME</h6>
              <p>lorem corps de home </p>
            </div>
          </div>

          {/* creat login interface */}




        </div>
      </div>
    </main>
  );
};

export default Home;