import React from "react";
// import { Navlink } from "react-dom";
//  de mon home je vais chercher les autres elements composants
import Navigation from "../Navigation";
import "../../styles/components/authers/home.css";

const Home = () => {
  return (
    <main>  
        <Navigation />
      <div className="home">
        <div className="homeContent">
          <div className="content">
            <h1>Traore cheick oumar tidiane</h1>
            <h2>Développeur Full-Stact</h2>
          </div>
            <p>hello SECTION HOME</p>
        </div>
      </div>
    </main>
  );
};

export default Home;