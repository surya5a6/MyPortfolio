import React from "react";
import { Link } from 'react-router-dom';
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const SideBar = (props) => {
  const { sidebar, hideSidebar } = props;
  return (
    <aside className={sidebar} id="sidebar">
        <div className="">
          <button className="close-btn" id="close-btn" onClick={hideSidebar}> 
            <FontAwesomeIcon icon={faTimes}/>
          </button>
          <ul className="sidebar-links">
            <li>
              <Link className="link" onClick={hideSidebar} to="/">home</Link>
            </li>
            <li>
              <Link className="link" onClick={hideSidebar} to="/about">about</Link>
            </li>
            <li>
              <Link className="link" onClick={hideSidebar} to="/projects">projects</Link>
            </li>
            <li>
              <Link className="link" onClick={hideSidebar} to="/contact">contact</Link>
            </li>
          </ul>
          <ul className="social-icons">
            <li>
              <a href="https://facebook.com/SURYATEJAAMR/" target="_blank" className="social-icon" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/suryatejamalisetti/" target="_blank" className="social-icon" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/surya91684651" target="_blank" className="social-icon" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
            </li>
          </ul>
        </div>
    </aside>
  )
}

export default SideBar;