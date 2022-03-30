import React from "react";
import { Navlink, Link } from "react-router-dom";
import { render } from "react-dom";

//  de mon home je vais chercher les autres elements composants

import LogTeam from "../../posts/LogTeam";
// import Crud from "../../posts/CrudContext";



import "../../../styles/components/functions/pages/index.css";
import video from "../../../styles/assets/video.mp4";


class Index1 extends React.Component {


  render() {

    return (
      <>
        <div className="index1">
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
          {/* space space  */}
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
                  {/* <Crud /> */}
                  <LogTeam />
         
                </div>
                    {/*  */}

              </div>



            </form>

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
                  <Link to="/Index1_2" className="entries-title fancy">SAVE && CONTINUE</Link>
                </button>

                <article className="chart-container">
                  <p>Enregistrer !</p>
                </article>


              </section>

            </div>

            {/*  */}
            {/* END CREATE  */}
        

          </header>




          {/* end header */}

        </div>
      </>
    )
  }
};

export default Index1;

