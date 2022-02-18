import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="sidebar">
        <div className="id">
          <div className="idContent">
            <img src="./media/billGates.jpg" alt="profil-pic" />
          </div>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="navActive">
                <i className="fas fa-home"></i>
                <spam>Accueil</spam>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/competences" activeClassName="navActive">
                <i className="fas fa-mountain"></i>
                <spam>Compétences</spam>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/portfolio" activeClassName="navActive">
                <i className="fas fa-images"></i>
                <spam>Portfolio</spam>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" activeClassName="navActive">
                <i className="fas fa-address-book"></i>
                <spam>contact</spam>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <li>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.codepen.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-codepen"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>

        </div>
        <div className="signature">
          <p>Tcotidiane - copyright@2021 LAMI </p>
          <a href="https://www.startup-jupiter.com">
            <big>
              <em>StartUp-Jupiter</em>
            </big>
          </a>
        </div>
      </div>
    </>
  );
};
export default Navigation;