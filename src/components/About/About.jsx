import React from 'react';
import "./styles.css";
import about from "./about.jpg"

const About = (props) => {
  return (
    <section className="section about">
      <div className="section-center about-center">
        <article className="about-img">
          <img src={about} className="about-photo" alt="about"/>
        </article>
        <article className="about-info">
          <div className="section-title about-title">
            <h2>about</h2>
            <div className="underline"></div>
          </div>
          <p>I like to solve problems. Throughout my career, I have been driven by intellectual and technical curiosity to build web applications that will be more user-friendly, customer-centric and give the best performance.</p>
          <p>My technological curiosity also drives me to be a constant learner and to explore new technologies.</p>
          <a href="about.html" className="btn">about <me></me></a>
        </article>
      </div>
    </section>
  )
}

export default About;