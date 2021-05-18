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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque a consectetur inventore beatae quidem tempora. Facilis dicta culpa accusantium?</p>
          <span className="number">1</span>
        </article>
        <article className="timeline-item">
          <h4>2019</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque a consectetur inventore beatae quidem tempora. Facilis dicta culpa accusantium?</p>
          <span className="number">2</span>
        </article>
        <article className="timeline-item">
          <h4>2018</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque a consectetur inventore beatae quidem tempora. Facilis dicta culpa accusantium?</p>
          <span className="number">3</span>
        </article>
        <article className="timeline-item">
          <h4>2017</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque a consectetur inventore beatae quidem tempora. Facilis dicta culpa accusantium?</p>
          <span className="number">4</span>
        </article>
      </div>
    </section>
  )
}

export default Timeline