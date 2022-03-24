import React from "react";
import { Navlink, Link } from "react-router-dom";
import { render } from "react-dom";

//  de mon home je vais chercher les autres elements composants

import LogTeam from "../../logs/LogTeam";


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
            <header className="entries-title  chart-container fancy" >OPEN NEW PROJECT </header>
            {/* create CRUUD  */}
            <form className="index-content">
             
              {/* logTeam */}
              <div className="gantt-config">
                

                <div className="gantt-container">
                  <LogTeam />
                  {/* <CrudTeamContext />  */}
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
                  <Link to="/Index1_2" className="entries-title fancy">SAVE</Link>
                </button>

                <article className="chart-container">
                  <p>Enregistrer !</p>
                </article>


              </section>

            </div>

            {/*  */}

              </div>



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

