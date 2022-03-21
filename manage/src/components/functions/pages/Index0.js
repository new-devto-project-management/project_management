import React from "react";
import { Navlink, Link } from "react-router-dom";
import { render } from "react-dom";

//  de mon home je vais chercher les autres elements composants
import Navigation from "../../Navigation";


import "../../../styles/components/functions/pages/index.css";


class Home extends React.Component {
 
 
  render() {
   
    return (
      <>
        <div className="index">
        {/* insertion component navigation  */}
            {/* <Navigation /> */}
                  
                <header className="main-header">
                  <canvas className="cover" id="sparks"></canvas>
                  <div className="main-header-content">

                  {/* create CRUUD  */}
                    <span className="header-title ">WELCOME ON OPEN PROJECT</span>
                  
  

                    {/* END CREATE  */}
                  </div>
                  {/*  */}
                      <div className="flex">
                      <section className="entries">
                          <button className="fancy">
                             <header className="entries-title">OPEN NEW PROJECT </header>
                          </button>
                          
                       
                        <article>
                        {/* i ahve bugs */}
                          <p>TO OPEN NEW PROJECT HERE !!</p>
                        </article>
                        
                      </section>
      
                      <section className="entries">
                      <button className="fancy">
                        <header className="entries-title">OPEN OLD PROJECT</header>
                          
                          </button>
                        <article>
                        {/* i ahve bugs */}
                          <p>TO OPEN A OLD PROJECT HERE !</p>
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

export default Home;

