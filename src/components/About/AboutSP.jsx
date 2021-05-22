import React, {useEffect} from 'react';
import "./styles.css";

export const AboutSP = (props) => {
  useEffect(() => {
    document.title = "MyPortfolio || About"
  }, []);
  return (
    <section className="section single-page">
      <div className="section-title">
        <h1>about me</h1>
        <div className="under"></div>
      </div>
      <div className="section-center page-info">
        <p style={{textAlign: 'center'}}>
          Hello, I am Surya Teja and I am a web developer. I live and work in
          Hyderabad, India. I spend most of my day, experimenting with HTML, CSS
          JavaScript and React (and its endless list of frameworks). I enjoy coding and the
          challenge of learning something new everyday. 
        </p>
      </div>
    </section>
  )
}