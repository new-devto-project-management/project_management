import React from "react";
import { Navlink } from "react-router-dom";
//  de mon home je vais chercher les autres elements composants
import Navigation from "../Navigation";
import AppSide from "./AppSide";
import LogTeam from "../logs/LogTeam";
import Gantt from "../logs/Gantt";
import "../../styles/components/authers/home.css";
import { render } from "react-dom";


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
  handelClick = (event) => {
    console.log(event)
  }

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
  
                    <div className="flex">
                      
                      <button className="fancy" onClick={this.handelClick}>Resources</button>
                    </div>
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
                  </section>
                </div>
  
                <div className="flex">
                  <div className="chart-container">
                    <header>Capacity</header>
                    <canvas className="chart chart-line chart-small" chart-data="[[1,2,3,2,5,4,7,4,4,10,9,8]]" chart-labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']" chart-options="{bezierCurve:false,pointDotRadius:3}">
                    </canvas>
                  </div>
                  <div className="chart-container">
                    <header>Projected</header>
                    <canvas className="chart chart-line chart-small" chart-data="[[6,7,4,6,2,3,5,5,2,3,6,9]]" chart-labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']" chart-options="{bezierCurve:false,pointDotRadius:3}">
                    </canvas>
                  </div>
                  <div className="chart-container">
                    <header>Chart title</header>
                    <canvas className="chart chart-line chart-small" chart-data="[[1,2,8,8,7,6,7,6,5,6,5,3,4]]" chart-labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']" chart-options="{bezierCurve:false,pointDotRadius:3}">
                    </canvas>
                  </div>
                </div>
      
         
              
          <div className="homeContent">
          {/* insert side bar component  */}
            <aside clasName="side-bar">
                <AppSide/>
              </aside>
            <div className="content">
              {/* menu */}
              
              <div className="home-section">
              {/* insert component presentation de l'equipe dev et attribytion des tâches  */}
                <div className="login-dev">
                  <LogTeam/>
                </div>
                {/* animation  
                <div className="anime">
                {/* <div className="circles">
                    <div></div>
                    <div></div>
                    <div></div>
                    <span></span>
                </div>   
                </div>  */}
  
                <div className="gantt-config">
                  <Gantt />
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