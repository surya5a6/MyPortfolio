import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => { 
  const { showSidebar } = props;
  return (
    <nav className="nav" id="nav">
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="nav-title">
            <span className="first-name">surya teja</span> <span className="last-name">malisetti</span>
          </h3>
          <button className="nav-btn" id="nav-btn" onClick={showSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <a href="index.html">home</a>
          </li>
          <li>
            <a href="about.html">about</a>
          </li>
          <li>
            <a href="projects.html">projects</a>
          </li>
          <li>
            <a href="contact.html">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;