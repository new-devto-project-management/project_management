import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/navigation.css"
import Tool from "./functions/Tool";
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
                        <li className="nav-links">Paramètre</li>
                    </NavLink>
                    <NavLink to="/help">
                        <li className="nav-links">Aides !</li>
                    </NavLink>
                  </ul> 
                </div>

              </div>
            </div>
            <div className="app-tools">
              <div className="navigation">
                <Tool />
              </div>
            </div>
            <div className="app-sidebar">
              <div className="sidebar id">
                <div className="navigation idContent">

                  hello sidebar
                </div>
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