import React from "react";
import "./styles.css";

const Skills = (props) => {
  return (
    <section className="section skills">
      <div className="section-title">
        <h2>skills</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center skills-center">
        <article>
          <h3>front end</h3>
          <div className="skill">
            <p>HTML/CSS</p>
            <div className="skill-container">
              <div className="skill-value"></div>
              <p className="skill-text">80%</p>
            </div>
          </div>
          <div className="skill">
            <p>Javascript</p>
            <div className="skill-container">
              <div className="skill-value value-70"></div>
              <p className="skill-text skill-text-70">80%</p>
            </div>
          </div>
          <div className="skill">
            <p>React</p>
            <div className="skill-container">
              <div className="skill-value value-80"></div>
              <p className="skill-text skill-text-80">80%</p>
            </div>
          </div>
        </article>

        <article>
          <h3>back end</h3>
          <div className="skill">
            <p>Java</p>
            <div className="skill-container">
              <div className="skill-value"></div>
              <p className="skill-text">80%</p>
            </div>
          </div>
          <div className="skill">
            <p>kotlin</p>
            <div className="skill-container">
              <div className="skill-value value-70"></div>
              <p className="skill-text skill-text-70">80%</p>
            </div>
          </div>
          <div className="skill">
            <p>python</p>
            <div className="skill-container">
              <div className="skill-value value-80"></div>
              <p className="skill-text skill-text-80">80%</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Skills;