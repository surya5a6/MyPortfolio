import React from "react";
import "./styles.css";

const Timeline = (props) => {
  return (
    <section className="section timeline">
      <div className="section-title">
        <h2>timeline</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center timeline-center">
        <article className="timeline-item">
          <h4>2020</h4>
          <p>Working on a project called constellation, which is mainly an runtime engine which interprets the json structure of webpages from server and build the UI accordingly </p>
          <span className="number">1</span>
        </article>
        <article className="timeline-item">
          <h4>2019</h4>
          <p>Started working with Pega Systems as UI/UX developer, where I work as part of platform development team </p>
          <span className="number">2</span>
        </article>
        <article className="timeline-item">
          <h4>2018</h4>
          <p>Started working with CA Technologies as an Software Engineer, where I was part of the 
            which develops the UI for data analytics engine.
          </p>
          <span className="number">3</span>
        </article>
        <article className="timeline-item">
          <h4>2016-2017</h4>
          <p>Started my career with ADP as a fresher, where I worked as part of front-end team
          on a couple of projects</p>
          <span className="number">4</span>
        </article>
      </div>
    </section>
  )
}

export default Timeline