import React from "react";
import "./styles.css";
import project1 from "./project-1.jpeg";
import project2 from "./project-2.jpeg";
import project3 from "./project-3.jpeg";
import project4 from "./project-4.jpeg";



const Projects = (props) => {
  return (
    <section className="section projects">
      <div className="section-title">
        <h2>latest works</h2>
        <div className="underline"></div>
        <p className="projects-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente impedit eveniet beatae sed, minus fuga nemo voluptate? Fugit consequatur quo officiis odio labore, soluta ut dolorem ducimus, nam libero distinctio tenetur excepturi similique facere? Minus facere aliquid vero ratione id?</p>
      </div>
      <div className="section-center projects-center">
        <a href="projects.html" className="project-1">
          <article className="project">
            <img src={project1} alt="project-1" className="project-img"/>
            <div className="project-info">
              <h4>Arcot</h4>
              <p>ADP</p>
            </div>
          </article>
        </a>
        <a href="projects.html" className="project-2">
          <article className="project">
            <img src={project2} alt="project-1" className="project-img"/>
            <div className="project-info">
              <h4>Constellation</h4>
              <p>Pega systems</p>
            </div>
          </article>
        </a>
        <a href="projects.html" className="project-3">
          <article className="project">
            <img src={project3} alt="project-1" className="project-img"/>
            <div className="project-info">
              <h4>Aaxon</h4>
              <p>Aaxis commerce</p>
            </div>
          </article>
        </a>
        <a href="projects.html" className="project-4">
          <article className="project">
            <img src={project4} alt="project-1" className="project-img"/>
            <div className="project-info">
              <h4>Jarvis</h4>
              <p>CA technologies</p>
            </div>
          </article>
        </a>
      </div>
    </section>
  )
}

export default Projects;