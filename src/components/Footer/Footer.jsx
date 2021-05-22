import React, {useEffect} from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
  useEffect(() => {
    let date = document.getElementById('date');
    date.innerText = new Date().getFullYear();
  }, [])
  return (
    <footer className="footer">
      <ul className="social-icons hero-icons">
            <li>
              <a href="https://facebook.com/SURYATEJAAMR/" target="_blank" className="social-icon">
                <FontAwesomeIcon icon={faFacebook}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/suryatejamalisetti/" target="_blank" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/surya91684651" target="_blank" className="social-icon">
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
            </li>
      </ul>
      <p>&copy; <span id="date"></span> surya teja. all rights reserved</p>
    </footer>
  )
}

export default Footer;