import React, {useState} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Link} from "react-router-dom";
import Tool from "./functions/Tool";
// import Files from "./functions/Files";
import Dropdown from "./functions/Dropdown";
import "../styles/components/navigation.css";
// import "../styles/components/Navigation.scss"

const Navigation = () => {
  const [click , setClick] = useState(false);
  const [dropdown , setDropdown] = useState(false);
  const handelClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <main>
        <div className="container">
          <div className="container-fuild">
            <div className="app-header" ng-app="app" ng-controller="baseController as base">
              <div className="navigation frozen">
                <div className="menu-icon" onClilck={handelClick}>
                      <li className="new-project">
                        <Link to="/" className="create-new-project">
                          <i className={ 'fas fa-plus'}/>                     

                        </Link>
                      </li>
                    </div>
                 <div className="menu-icon" onClilck={handelClick}>
                      <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                <div className="open-project">
                  
                  {/* logo */}
                    <Link exact to="/" ng-click="base.mainPage=false">
                        <li className="nav-links current entries">
                        <span  class="page-title entries-title"><big>O</big>pen<strong> Project</strong></span>
                        </li>
                    </Link>
                   
                </div>
                  <div className="space">
                      
                  </div>
                  
                  
                  {/* menu */}
                <div className="nav">
                  <ul className="nav-bar">
                    <Link to="/files">
                        <li className="nav-links nav-links-mobile" onClick={closeMobileMenu}>Fichier</li>
                       
                    </Link>
                    <Link to="/"  >
                        <li className="nav-links nav-links-mobile">Tâches</li>
                        <i className='fas fa-caret-down'/>
                        {dropdown && <Dropdown/>}
                    </Link>
                    <Link to="/ressouces">
                        <li className="nav-links nav-links-mobile">Ressources</li>
                    </Link>
                    <Link to="/tool">
                        <li className="nav-links nav-links-mobile">Outils</li>
                    </Link>
                    <Link to="/settings">
                        <li className="nav-links nav-links-mobile">

                          <div className="nav-links-content">
                            <div className="icons">           
                              <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  className="feather feather-settings" viewBox="0 0 24 24">
                                  <defs />
                                  <circle cx="12" cy="12" r="3" />
                                  <path
                                    d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                                </svg>  
                              </div>
                            <div>
                              <span className="icon-text">Paramètre</span>
                            </div>
                          </div>
                        </li>
                    </Link>
                    <Link to="/help">
                        <li className="nav-links">Aides!</li>
                    </Link>
                  </ul> 
                </div>

              </div>
            </div>
            {/* insertion de files component  */}
            {/* <Files/> */}
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