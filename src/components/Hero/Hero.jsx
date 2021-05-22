import React from "react";
import { Link } from 'react-router-dom';
import "./styles.css";
import myPicture from "./myPicture.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Hero = (props) => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>I'm surya</h1>
          <h4>Professional web UI/UX developer</h4>
          <Link to="/contact" className="btn contact-btn">hire me</Link>
          <ul className="social-icons hero-icons">
            <li>
              <a href="facebook.com/SURYATEJAAMR/" target="_blank" className="social-icon">
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
        </article>
        <articel className="hero-img">
          <img src={myPicture} className="hero-photo" alt="surya"/>
        </articel>
      </div>
    </header>
  )
}

export default Hero;
