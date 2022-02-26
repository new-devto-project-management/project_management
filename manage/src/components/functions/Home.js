import React from "react";
// import { Navlink } from "react-dom";
//  de mon home je vais chercher les autres elements composants
import Navigation from "../Navigation";
import "../../styles/components/authers/home.css";
import AppSide from "./AppSide";


const Home = () => {
  return (
    <main>
      <div className="home">
          <Navigation />
          
            
        <div className="homeContent">
          <div clasName="side-bar">
              <AppSide/>
            </div>
          <div className="content">
            {/* menu */}
            
            <div className="home-section">
              <div class="circles">
                  <div></div>
                  <div></div>
                  <div></div>
                  <span></span>
              </div>    
          </div> 
          
          </div>

          {/* creat login interface */}




        </div>
      </div>
    </main>
  );
};

export default Home;