import React from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { Tooltip, Button } from "@blueprintjs/core";
import LogProject from "../../logs/LogProject";
//  de mon home je vais chercher les autres elements composants
import "../../../styles/components/functions/pages/index.css";
import video from "../../../styles/assets/video.mp4";

// import { Input } from "@material-ui/icons";


class Index2 extends React.Component {


  render() {

    return (
      <>
        <div className="index">
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
            <div className="gantt-config">
              <div className="gantt-container">
                  <LogProject/>
              </div>
              <div className="main-header-content">
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
                {/* END CREATE  */}


            </div>

            </div>

            
            {/*  */}

          </header>




          {/* end header */}

        </div>
      </>
    )
  }
};

export default Index2;

