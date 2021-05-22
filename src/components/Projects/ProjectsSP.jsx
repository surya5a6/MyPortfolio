import React, {useEffect} from 'react';
// import './styles.css';
import project1 from './project-1.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const ProjectsSP = (props) => {
  useEffect(() => {
    document.title = "MyPortfolio || Projects"
  }, [])
  return (
    <>
    <header className="projects-hero">
      <div className="section-title">
        <h1>my projects</h1>
        <div className="underline"></div>
      </div>
    </header>
    <section className="section">
      <div className="section-center projects-page-center">
        <article className="single-project">
          <div className="project-container">
            <img src={project1} alt=""/>
            <a href="" className='project-icon'>
              <FontAwesomeIcon  icon={faHome}/>
            </a>
          </div>
          <div className="project-details">
            <h4>social-media-app</h4>
            <p>Social media app where we can connect with different people, which involves
              photo-sharing and interactive content
            </p>
            <div className="project-footer">
              <span><FontAwesomeIcon className='icon' icon={faGithub}/></span>
              <a href="https://github.com/surya5a6/social-media-app" target="_blank">source code</a>
            </div>
          </div>
        </article>
      </div>
    </section> 
    </>
  )
}
