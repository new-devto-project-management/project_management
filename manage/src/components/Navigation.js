import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/navigation.css"
import Tool from "./functions/Tool";
import Files from "./functions/Files";

// import "../styles/components/Navigation.scss"

const Navigation = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="container-fuild">
            <div className="app-header">
              <div className="navigation">
                <div className="open-project">
                  
                  {/* logo */}
                    <NavLink exact to="/">
                        <li className="nav-links">
                        <span><big>O</big>pen<strong> Project</strong></span>
                        </li>
                    </NavLink>
                   
                </div>
                  {/* menu */}
                <div className="nav">
                  <ul className="nav-bar">
                    <NavLink to="/files">
                        <li className="nav-links">Fichier</li>
                    </NavLink>
                    <NavLink to="/taches">
                        <li className="nav-links">Tâches</li>
                    </NavLink>
                    <NavLink to="/ressouces">
                        <li className="nav-links">Ressources</li>
                    </NavLink>
                    <NavLink to="/tools">
                        <li className="nav-links">Outils</li>
                    </NavLink>
                    <NavLink to="/settings">
                        <li className="nav-links">

                          <span>           
                            <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              class="feather feather-settings" viewBox="0 0 24 24">
                              <defs />
                              <circle cx="12" cy="12" r="3" />
                              <path
                                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                            </svg>  
                            </span>
                          <span>Paramètre</span>
                        </li>
                    </NavLink>
                    <NavLink to="/help">
                        <li className="nav-links">Aides !</li>
                    </NavLink>
                  </ul> 
                </div>

              </div>
            </div>
            {/* insertion de files component  */}
            <Files/>
            <div className="app-tools">
              <div className="navigation">
                <Tool />
              </div>
            </div>
          

          </div>

        </div>
            
        {/* <></> */}
      </main>
    </>
  );
};
export default Navigation;