import React from "react";
import { Navlink, Link } from "react-router-dom";
import { render } from "react-dom";

//  de mon home je vais chercher les autres elements composants
import Navigation from "../../Navigation";

import CrudTeamContext from '../../posts/CrudContext';


import "../../../styles/components/functions/pages/index.css";


class Index1_2 extends React.Component {
 
 
  render() {
   
    return (
      <>
        <div className="index1">
        {/* insertion component navigation  */}
            {/* <Navigation /> */}
                  
                <header className="main-header ">
                  <canvas className="cover" id="sparks"></canvas>
                  <div className="main-header-content ">

                    <span className="header-title ">WELCOME ON OPEN PROJECT</span>
                      <header className="entries-title  chart-container fancy" >PRESENTATION OF THE TEAMS </header>
                
                  </div>
                  {/*  */}
                    {/* create CRUUD  */}
                   
                  {/* crud config */}


                <div className="main-header-content">
                  <span className="header-title">PRESENTATION DE L'EQUIPE  ...</span>
                </div>
                <div className="gantt-config">
                  <div className="gantt-container">
                    <CrudTeamContext />
                  </div>


                    {/* END CREATE  */}
                      <div className="flex flex-content">
                      <section className="entries">
                      <button className="fancy">
                          <Link to="/index1" className="entries-title fancy">BEFORE</Link>
                          </button>    
                        <article className="chart-container">
                          <p>Revennir en Arrière !</p>
                        </article>

                        
                      </section>

                      <section className="entries">
                         <button className="fancy">
                           <Link to="/Home" className="entries-title fancy">SAVE</Link>
                          </button>
                       
                        <article className="chart-container">
                          <p>Enregistrer !</p>
                        </article>
                        

                      </section>

                    </div>

                  {/*  */}
                </div>
               
                </header>
  
               
  
               
      {/* end header */}
               
        </div>
      </>
    )
  }
};

export default Index1_2;

