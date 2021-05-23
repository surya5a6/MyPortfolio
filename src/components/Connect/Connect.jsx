import React from "react";
import { Link } from 'react-router-dom'
import "./styles.css";
import connect from "./connect.mp4";
import projectImg from './project-4.jpeg'

const Connect = (props) => {
  return (
    <section className="connect">
      <video controls autoPlay muted loop className="parent-container" poster={projectImg}>
        <source src={connect} type="video/mp4"/>
        Sorry, your browser doesnot support embedded videos
      </video>
      <div className="video-banner">
        <div className="section-title">
          <h2>lets get in touch</h2>
          <div className="underline"></div>
        </div>
        <p className="video-text">Would you like to know more about me? </p>
        <Link to='/contact' className="btn">contact me</Link>
      </div>
    </section>
  )
}

export default Connect;
