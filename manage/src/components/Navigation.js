import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../styles/components/Navigation.css"


function Navigation() {
    return (
        <div className='container'>
            <div className='nav-content'>
                <ul className='nav-links'>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
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
            <p>hello ici navigation</p>
                </ul>

            </div>


        </div>
    )
}

export default Navigation;
