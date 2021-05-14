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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maxime dolores vel fugiat quas aperiam omnis laboriosam necessitatibus, rem commodi totam itaque, voluptate id dolorum quisquam facere ex? Quod sed rem praesentium iure distinctio modi quis! Adipisci quia odio iusto.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto velit, consequatur harum numquam sit ipsa delectus sed voluptatem voluptates sequi! Maxime illo nihil, quas vero nam accusamus architecto velit deleniti. Iure officia deserunt possimus cumque suscipit adipisci voluptatibus dolores tempora.</p>
          <a href="about.html" className="btn">about <me></me></a>
        </article>
      </div>
    </section>
  )
}

export default About;