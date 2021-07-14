import React from 'react'
import logocarofile from '../logocarofile.gif'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faUserTie, faProjectDiagram, faBuilding, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"
import {
  Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container"> 
            
            <a className="navbar-brand" href="#"><img className='logo' src={logocarofile} alt='logo...' /></a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
               
                <li className="nav-item">
                  <Link to="/" className="nav-link"><FontAwesomeIcon icon={faUserTie} style={{ color: "#fff" }}/> Sobre mi </Link>
                </li>

                <li className="nav-item">
                  <Link to="/Projects" className="nav-link"><FontAwesomeIcon icon={faProjectDiagram} style={{ color: "#fff" }}/> Proyectos </Link>
                </li>
                
                <li className="nav-item">
                  <Link to="/WorkExperience" className="nav-link"><FontAwesomeIcon icon={faBuilding} style={{ color: "#fff" }}/> Experiencia Laboral </Link>
                </li>
               
                <li className="nav-item">
                  <Link to="/ContactMe" className="nav-link"><FontAwesomeIcon icon={faEnvelopeOpenText} style={{ color: "#fff" }}/> Contacto </Link>
                </li>

              </ul>
            </div>
          </div>
      </nav>
    )
}

export default Navbar
