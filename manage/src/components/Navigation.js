import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../styles/components/Navigation.css"


function Navigation() {
    return (
        <div className='app-container'>
            <div className='container container-fluid'>
                {/* nav menu */}
            <div className='nav-content'>
                <ul className='app-links'>
                    {/* app-logo */}
                <Link to="/">
                        <li>
                        <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                                <defs></defs>
                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                </svg>
                        </li>
                            {/* <span>logo Open Project</span> */}
                    </Link>


                    {/* search button */}
                    <Link to="/">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search"
                            viewBox="0 0 24 24">
                            <defs></defs>
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="M21 21l-4.35-4.35"></path>
                            </svg>
                            
                        </li>
                        <span>Search</span>
                    </Link>

                    <Link to="">
                        <li className='switch'>
                            <button class="mode-switch" title="Switch Theme">
                                <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                                <defs></defs>
                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                </svg>
                            </button>
                            <span>Dark</span>
                            <button class="add-btn" title="Add New Project">
                                <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-plus">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            <span>Hight</span>
                        </li>
                    </Link>
                    <Link to="">
                        <button class="add-btn" title="Add New Project">
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-plus">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </button>
                        <span>notifications</span>
                    </Link>
                    <Link to="">
                        <span>Profile</span>
                    </Link>

                    <Link to="">
                        <li>
                            <button class="messages-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="feather feather-message-circle">
                                    <path
                                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                            </button>
                            <span>message</span>
                        </li>
                    </Link>
                    <Link to="">
                        <li>
                            <button class="burger-close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-x-circle">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="15" y1="9" x2="9" y2="15" />
                                <line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                            </button>
                        </li>
                        <span>burger btn-close</span>
                    </Link>

                </ul>
            </div>
            <div className='nav-content'>
                <ul className='nav-links'>
                    {/* <Link to="/">
                        <li>Home</li>
                    </Link> */}

                    <Link to="/files">
                        <li>Files</li>
                    </Link>

                    <Link to="/taches">
                        <li>Taches</li>
                    </Link>
                    <Link to="/ressources">
                        <li>Ressources</li>
                    </Link>

                    <Link to="/tools">
                        <li>Tools</li>
                    </Link>

                    <Link to="/settings">
                        <li>Settings</li>
                    </Link>

                    <Link to="/helps">
                        <li>Help !</li>
                    </Link>
                    <div className='nav-aria'>
                    <h6>hello ici navigation</h6>
                    </div>
                </ul>

            </div>

            </div>
            {/* nav bar */}
            <div className='container-fluid'>
                <div className='app-sidebar'>
                    <ul className='sidebar'>
                        <Link to="/">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-home">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </li>
                        </Link>

                        <Link to="/planning">
                            <li>
                                <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="feather feather-pie-chart" viewBox="0 0 24 24">
                                <defs />
                                <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
                                </svg> 
                            </li>
                        </Link>

                        <Link to="">
                            <li>  
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-calendar">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            </li>
                        </Link>

                        <Link to="">
                            <li>
                                <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="feather feather-settings" viewBox="0 0 24 24">
                            <defs />
                            <circle cx="12" cy="12" r="3" />
                            <path
                                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                            </svg>

                            </li>
                        </Link>


                        <Link to="">
                            <span>menu</span>
                        </Link>
                    </ul>
                    
                </div>
            </div>

        </div>
    )
}

export default Navigation;
