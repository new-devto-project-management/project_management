import React from "react";
import { Navlink } from "react-router-dom";
//  de mon home je vais chercher les autres elements composants
import Navigation from "../Navigation";
import AppSide from "./AppSide";
import LogTeam from "./LogTeam";
import "../../styles/components/authers/home.css";


const Home = () => {
  return (
    <main>
      <div className="home">
      {/* insertion component navigation  */}
          <Navigation />
                
              <header class="main-header" ng-class="{small: !base.mainPage}">
                <canvas class="cover" id="sparks"></canvas>
                <div class="main-header-content">
                  <span class="header-title">Project Name</span>
                  <div class="flex">
                    
                    <button class="fancy">Resources</button>
                  </div>
                </div>
              </header>

              <div class="flex">
                <section class="entries">
                  <header class="entries-title">News</header>
                  <article>
                  {/* i ahve bugs */}
                    <p>News content will be here, and will be truncated so it&hellip;</p>
                  </article>
                  
                </section>

                <section class="entries">
                  <header class="entries-title">Bug Tracker</header>
                  
                </section>
              </div>

              <div class="flex">
                <div class="chart-container">
                  <header>Capacity</header>
                  <canvas class="chart chart-line chart-small" chart-data="[[1,2,3,2,5,4,7,4,4,10,9,8]]" chart-labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']" chart-options="{bezierCurve:false,pointDotRadius:3}">
                  </canvas>
                </div>
                <div class="chart-container">
                  <header>Projected</header>
                  <canvas class="chart chart-line chart-small" chart-data="[[6,7,4,6,2,3,5,5,2,3,6,9]]" chart-labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']" chart-options="{bezierCurve:false,pointDotRadius:3}">
                  </canvas>
                </div>
                <div class="chart-container">
                  <header>Chart title</header>
                  <canvas class="chart chart-line chart-small" chart-data="[[1,2,8,8,7,6,7,6,5,6,5,3,4]]" chart-labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']" chart-options="{bezierCurve:false,pointDotRadius:3}">
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
              
              <div class="circles">
                  <div></div>
                  <div></div>
                  <div></div>
                  <span></span>
              </div>    
          </div> 

          
          </div>

          {/* creat login interface */}




        </div>
      </div>
    </main>
  );
};

export default Home;