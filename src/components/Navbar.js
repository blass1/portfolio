import React from 'react'
import logocarofile from '../logocarofile.gif'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

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
                  <a className="nav-link" aria-current="page" href="#">Experiencia Laboral</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Portfolio / Proyectos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Sobre mi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacto</a>
                </li>

              </ul>
            </div>
          </div>
      </nav>
    )
}

export default Navbar
