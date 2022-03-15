import React from "react";
import { Navlink, Link } from "react-router-dom";
import { render } from "react-dom";

//  de mon home je vais chercher les autres elements composants
import Navigation from "../Navigation";
import AppSide from "./AppSide";

import LogTeam from "../logs/LogTeam";
import Gantt from "../logs/Gantt";
// import NavBar from '../crud/navbar/NavBar';
import CrudContext from '../posts/CrudContext';
import CrudTeamContext from '../posts/CrudContext';
import CrudPertContext from '../posts/CrudPertContext';
import '../../styles/components/logs/_MessageArea.css';
import "../../styles/components/functions/home.css";


class Home extends React.Component {
  state = {
    ressource:[
      {id:1, ressources:"Méthode Traditionnelle "},
      {id:2, ressources:"Méthode Agile"},
      {id:3, ressources:"Méthodes PERT"},
      {id:4, ressources:"Méthodes Adaptative"},
      {id:5, ressources:"Méthode du Chemin Critrique"},
      {id:6, ressources:"PRINCE2"},
    ],

  };
 
  render() {
   
    return (
      <>
        <div className="home">
        {/* insertion component navigation  */}
            <Navigation />
                  
                <header className="main-header">
                  <canvas className="cover" id="sparks"></canvas>
                  <div className="main-header-content">
                    <span className="header-title">Project Name</span>
                    <input type="text" placeholder="nom du projet.."/>
                    <button className="fancy">Confirmer</button>
  
                    {/* <div className="flex">
                      
                      <button className="fancy" onClick={this.handelClick}>Resources</button>
                    </div> */}
                  </div>
                </header>
  
                <div className="flex">
                  <section className="entries">
                    <header className="entries-title">News</header>
                    <article>
                    {/* i ahve bugs */}
                      <p>News content will be here, and will be truncated so it&hellip;</p>
                    </article>
                    
                  </section>
  
                  <section className="entries">
                    <header className="entries-title">Bug Tracker</header>
                    <article>
                    {/* i ahve bugs */}
                      <p>News content will be here, and will be truncated so it&hellip;</p>
                    </article>
                  </section>
                </div>
  
                <div className="flex">
                  <div className="chart-container">
                    <header>Capacity</header>
                    
                  </div>
                  <div className="chart-container">
                    <header>Projected</header>
                    
                  </div>
                 
                </div>
      {/* end header */}
               
         
              
          <div className="homeContent">
            
          {/* insert side bar component  */}
            <aside clasName="side-bar">
                <AppSide/>
              </aside>
            <div className="content">
              {/* menu */}
              
              <div className="home-section">
               <div className="main-header-content">
                    <span className="header-title">PLANIFICATION DE L'EQUIPE DU PROJET ...</span>
                </div>
              {/* insert component presentation de l'equipe dev et attribytion des tâches  */}
               {/* crud config */}
                  <div className="gantt-config">
                    
                    <div className="gantt-container">
                      <LogTeam/>
                      {/* <CrudTeamContext />  */}
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
                 <text className="fancy" >EXPORTER LE FORMULAIRE DE PRESENTATION DE L'EQUIPE DE DEVELOPPEUR  <i className='fab fa-get-pocket'/>  </text>
                
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


                   <div className="main-header-content">
                        <span className="header-title">PLANIFICATION DU WBS ...</span>
                    </div>
                  <div className="gantt-config">
                    <div className="gantt-container">
                      <CrudContext /> 
                    </div>
                    
                  </div>

                   {/* Pert config */}


                <div className="main-header-content">
                        <span className="header-title">PLANIFICATION DU PERT  ...</span>
                    </div>
                  <div className="gantt-config">
                    <div className="gantt-container">
                      <CrudPertContext /> 
                    </div>
                    
                  </div>

                  {/* gantt config */}


                      <div className="main-header-content">
                        <span className="header-title">PLANIFICATION DU GANTT ...</span>
                      </div>
                <div className="gantt-config">
                  <div className="gantt-container">
                      <Gantt />
                  </div>
                  
                </div>
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

