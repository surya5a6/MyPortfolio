import React from "react";
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
          <a href="contact.html" className="btn contact-btn">hire me</a>
          <ul className="social-icons hero-icons">
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
        </article>
        <articel className="hero-img">
          <img src={myPicture} className="hero-photo" alt="surya"/>
        </articel>
      </div>
    </header>
  )
}

export default Hero;
