import React from "react";
import {  Link } from "react-router-dom";
import { render  } from "react-dom";
import { Tooltip, Button } from "@blueprintjs/core";

//  de mon home je vais chercher les autres elements composants
import "../../../styles/components/functions/pages/index.css";


class Index1 extends React.Component {
 
 
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
                 
                  </div>
                  <header className="entries-title  chart-container fancy" >OPEN RECENT PROJECT </header>
                  {/* create CRUUD  */}
                  <form className="index-content">
                    <div className="flex">
                    <div className="chefDequipe">
                    {/* chefs d'"quipe" */}
                    <Tooltip
                      content="personne physique chargée dans le cadre d'une mission définie,
                                                            d'assumer la maîtrise du projet."
                      position="right"
                    >
                      {/* c'est-à-dire de veiller à sa bonne réalisation dans les
                                                            objectifs de technique, de coût et de délai. */}

                      <input
                        aria-label="personne physique chargée dans le cadre d'une mission définie,
                                                            d'assumer la maîtrise du projet, c'est-à-dire de veiller à sa bonne réalisation dans les
                                                            objectifs de technique, de coût et de délai."
                        placeholder="chef de Projet..."
                        required
                        aria-required="true"
                      />
                    </Tooltip>
                    <label>Chef de projet / Project Manager</label>
                  </div>

                        
                     <article>
                        {/* respo */}
                      <input type="text" placeholder="Entrer le nom du projet...."/>
                      <label>Nom du projet</label>

                

                     </article>
                     <article>
                        {/* respo */}
                      <input type="password" placeholder="Entrer le mot d passe du projet...."/>
                      <label>Password</label>
                     </article>
                    </div>
                    {/*  */}
                    <div className="flex flex-content">
                      <section className="entries">
                      <button className="fancy">
                          <Link to="/Index0" className="entries-title fancy">BEFORE</Link>
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

                  </form>

                    {/* END CREATE  */}
                  
               
                </header>
  
               
  
               
      {/* end header */}
               
        </div>
      </>
    )
  }
};

export default Index1;

