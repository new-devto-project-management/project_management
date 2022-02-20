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
            <h1>Traore cheick oumar tidiane</h1>
            <h2>Développeur Full-Stact</h2>
            <div className="pdf">
              <a href="./media/CV.pdf" target="_blank">
                Télécharger CV
              </a>
            </div>
          </div>
        </div>
        <p>hello home menu</p>
      </div>
    </main>
  );
};

export default Home;