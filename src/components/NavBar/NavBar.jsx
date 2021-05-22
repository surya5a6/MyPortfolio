import React, { useEffect } from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => { 
  const { showSidebar } = props;
  useEffect(() => {
    let navbar = document.getElementById('nav');
    window.addEventListener('scroll', function() {
      if(window.pageYOffset > 80) {
        navbar.classList.add('navbar-fixed');
      } else {
        navbar.classList.remove('navbar-fixed');
      }
    })
  }, []);
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
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/about">about</Link>
          </li>
          <li>
            <Link  className="link" to="/projects">projects</Link>
          </li>
          <li>
            <Link className="link" to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;