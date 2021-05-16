import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faSketch } from '@fortawesome/free-brands-svg-icons'

const Services = (props) => {
  return (
    <section className="section bg-grey">
      <div className="section-title">
        <h2>services</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center services-center">
        <article className="service">
          <FontAwesomeIcon icon={faCode} className="service-icon"/>
          <h4>web development</h4>
          <div className="underline"></div>
          <p>Design and create websites. Responsible for look of the site and also the technical aspects, such as
            performance and capacity, which are measures of a websites speed
          </p>
        </article>
        <article className="service">
          <FontAwesomeIcon icon={faSketch} className="service-icon"/>
          <h4>web design</h4>
          <div className="underline"></div>
          <p>Plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics
            and layout of a website or webpage
          </p>
        </article>
        <article className="service">
          <FontAwesomeIcon icon={faAndroid} className="service-icon"/>
          <h4>app design</h4>
          <div className="underline"></div>
          <p>Develop mobile apps which are user-friendly and are of high performance</p>
        </article>
        
      </div>
    </section>
  )
}

export default Services