import React from "react";
import "./styles.css";
import project1 from "./project-1.jpeg";
import project2 from "./project-2.jpeg";
import project3 from "./project-3.jpeg";
import project4 from "./project-4.jpeg";
import myPic from "./myPicture.jpeg";

const Blogs = (props) => {
  return (
    <section className="section blog">
      <div className="section-title">
        <h2>blog</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center blog-center">
        <div className="card">
          <div className="card-side card-front">
            <img src={project1} alt=""></img>
            <div className="card-info">
              <h4>article title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum nesciunt, autem accusantium debitis in odio adipisci! Amet, totam numquam?</p>
              <div className="card-footer">
                <img src={myPic} alt=""/>
                <p>7 min read</p>
              </div>
            </div>
          </div>
          <div className="card-side card-back">
            <button className="btn">read more</button>
          </div>
        </div>
        <div className="card">
          <div className="card-side card-front">
            <img src={project2} alt=""></img>
            <div className="card-info">
              <h4>article title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum nesciunt, autem accusantium debitis in odio adipisci! Amet, totam numquam?</p>
              <div className="card-footer">
                <img src={myPic} alt=""/>
                <p>7 min read</p>
              </div>
            </div>
          </div>
          <div className="card-side card-back">
            <button className="btn">read more</button>
          </div>
        </div>
        <div className="card">
          <div className="card-side card-front">
            <img src={project3} alt=""></img>
            <div className="card-info">
              <h4>article title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum nesciunt, autem accusantium debitis in odio adipisci! Amet, totam numquam?</p>
              <div className="card-footer">
                <img src={myPic} alt=""/>
                <p>7 min read</p>
              </div>
            </div>
          </div>
          <div className="card-side card-back">
            <button className="btn">read more</button>
          </div>
        </div>
        <div className="card">
          <div className="card-side card-front">
            <img src={project4} alt=""></img>
            <div className="card-info">
              <h4>article title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum nesciunt, autem accusantium debitis in odio adipisci! Amet, totam numquam?</p>
              <div className="card-footer">
                <img src={myPic} alt=""/>
                <p>7 min read</p>
              </div>
            </div>
          </div>
          <div className="card-side card-back">
            <button className="btn">read more</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs;
