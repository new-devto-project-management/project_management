import React from "react";
import { Navlink, Link } from "react-router-dom";
import { render } from "react-dom";

import CrudTeamContext from '../../posts/CrudContext';
import video from "../../../styles/assets/video.mp4";


import "../../../styles/components/functions/pages/index.css";


class Index12 extends React.Component {
 
 
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

export default Index12;

