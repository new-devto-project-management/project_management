import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import "../styles/components/Navigation.css"


function Navigation() {
    return (
        <div className='title'>
            <p>hello ici navigation</p>

            
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/files">
                <li>Files</li>
            </Link>
            <Link to="/taches">
                <li>Taches</li>
            </Link>
            <Link to="/ressource">
                <li>Ressources</li>
            </Link>
           
        </div>
    )
}

export default Navigation;
