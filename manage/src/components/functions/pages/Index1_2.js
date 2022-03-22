import React from "react";
import { Navlink, Link } from "react-router-dom";
import { render } from "react-dom";

//  de mon home je vais chercher les autres elements composants
import Navigation from "../../Navigation";


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
                    <form className="index-content">
                    <div className="flex">

                        
                     <article>
                        {/* respo */}
                      <input type="text" placeholder=" projet...."/>
                      <label>Maître d'œuvre </label>
                     </article>

                     <article >
                      {/* client */}
                      <input type="text" placeholder="...."/>
                      <label> Maître d'ouvrage </label>
                     </article>

                     <article >
                      {/* type de project */}
                      <input type="text" placeholder="ENTRER LA STATEGIE DE DEVEELOPPEMENT ...."/>
                      <label> STRATEGIE DE DEVELOPPEPEMENT </label>
                     </article>
                       <article>
                        {/* respo */}
                      <input type="text" placeholder="Entrer nom du responsable du projet...."/>
                      <label>Maître d'œuvre </label>
                     </article>

                     <article >
                      {/* client */}
                      <input type="text" placeholder="Entrer nom du client...."/>
                      <label> Maître d'ouvrage </label>
                     </article>

                     <article >
                      {/* type de project */}
                      <input type="text" placeholder="type de projet...."/>
                      <label> Type de projet </label>
                     </article>

                    </div>


                  </form>

                    {/* END CREATE  */}
                      <div className="flex flex-content">
                      <section className="entries">
                      <button className="fancy">
                          <header className="entries-title fancy">BEFORE</header>
                          </button>    
                        <article className="chart-container">
                          <p>Revennir en Arrière !</p>
                        </article>

                        
                      </section>

                      <section className="entries">
                         <button className="fancy">
                           <header className="entries-title fancy">SAVE</header>
                          </button>
                       
                        <article className="chart-container">
                          <p>Enregistrer !</p>
                        </article>
                        

                      </section>

                    </div>

                  {/*  */}
               
                </header>
  
               
  
               
      {/* end header */}
               
        </div>
      </>
    )
  }
};

export default Index1_2;

