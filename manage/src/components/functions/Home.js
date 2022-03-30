import React from "react";
import { Navlink, Link } from "react-router-dom";
import { render } from "react-dom";

//  de mon home je vais chercher les autres elements composants
import Navigation from "../Navigation";
import AppSide from "./AppSide";
import LogTeam from "../logs/LogTeam";

import Gantt from "../logs/Gantt";
// import NavBar from '../crud/navbar/NavBar';
// import CrudContext from '../posts/CrudContext';
import CrudTeamContext from '../posts/CrudContext';
// import CrudPertContext from '../posts/CrudPertContext';
import video from "../../styles/assets/Data.mp4";

import '../../styles/components/logs/_MessageArea.css';
import "../../styles/components/functions/home.css";


class Home extends React.Component {
  state = {
    ressource: [
      { id: 1, ressources: "Méthode Traditionnelle " },
      { id: 2, ressources: "Méthode Agile" },
      { id: 3, ressources: "Méthodes PERT" },
      { id: 4, ressources: "Méthodes Adaptative" },
      { id: 5, ressources: "Méthode du Chemin Critrique" },
      { id: 6, ressources: "PRINCE2" },
    ],

  };

  render() {

    return (
      <>
        <div className="home">
        
          <video autoPlay loop muted
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
            right: "0%",
            width: "100%",
            height: "100%",
            zIndex: "-1",
            objectFit: "cover",
            transform: 'translate(-50% -50%)',

          }}>
            <source src={video} type="video/mp4"/>
          </video>
          {/* insertion component navigation  */}
          <Navigation />

          <header className="main-header">
            <video autoPlay loop muted
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
            right: "0%",
            width: "100%",
            height: "100%",
            zIndex: "-1",
            objectFit: "cover",
            transform: 'translate(-50% -50%)',

          }}>
            <source src={video} type="video/mp4"/>
          </video>
            <canvas className="cover" id="sparks"></canvas>
            <div className="main-header-content">

              {/* create CRUUD  */}
              <span className="header-title">Welcome on Open Project</span>
              <p>Un projet open source destinée a la gestion de projet...</p>
              {/* <input type="text" placeholder="nom du projet.." />
              <button className="fancy">Confirmer</button> */}
            </div>
          </header>




          {/* end header */}



          <div className="homeContent">

            {/* insert side bar component  */}
            <aside clasName="side-bar">
              <AppSide />
            </aside>
            <div className="content">
              {/* menu */}

              <div className="home-section">
             
                {/* insert component presentation de l'equipe dev et attribytion des tâches  */}
                    {/* gantt config */}


                <div className="main-header-content">
                  <span className="header-title">PLANIFICATION DU WBS & GANTT ...</span>
                </div>
                <div className="gantt-config">
                  <div className="gantt-container">
                    <Gantt />
                  </div>

                </div>


                {/* animation  */}
                <div className="anime">
                  <div className="circles">
                    <div></div>
                    <div></div>
                    <div></div>
                    <span></span>
                  </div>
                  <span>chargement ...</span>
                  <text className="fancy" >EXPORTER LE FORMULAIRE DE PRESENTATION DE L'EQUIPE DE DEVELOPPEUR  <i className='fab fa-get-pocket' />  </text>

                </div>
                {/* formulaire */}


                {/* crud config */}


                <div className="main-header-content">
                  <span className="header-title">PRESENTATION DE L'EQUIPE  ...</span>
                </div>
                <div className="gantt-config">
                  <div className="gantt-container">
                    <CrudTeamContext />
                  </div>

                </div>


                {/* Wbs config */}

                {/* 
                   <div className="main-header-content">
                        <span className="header-title">PLANIFICATION DU WBS ...</span>
                    </div>
                  <div className="gantt-config">
                    <div className="gantt-container">
                      <CrudContext /> 
                    </div>
                    
                  </div> */}

                {/* Pert config */}

                {/* 
                <div className="main-header-content">
                        <span className="header-title">PLANIFICATION DU PERT  ...</span>
                    </div>
                  <div className="gantt-config">
                    <div className="gantt-container">
                      <CrudPertContext /> 
                    </div>
                    
                  </div> */}

                

                {/* crud config */}
                {/* <div className="gantt-config">

                  <div className="gantt-container">
                    <LogTeam />
                  </div>

                </div> */}
              </div>



            </div>

            {/* creat login interface */}

          </div>
        </div>
      </>
    )
  }
};

export default Home;

