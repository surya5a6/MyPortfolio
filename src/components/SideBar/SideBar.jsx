import React from "react";
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
          <ul className="social-icons">
            <li>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebook}/>
              </a>
            </li>
            <li>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
            </li>
            <li>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
            </li>
          </ul>
        </div>
    </aside>
  )
}

export default SideBar;