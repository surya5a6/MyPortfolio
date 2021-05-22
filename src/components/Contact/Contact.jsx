import React, {useEffect} from 'react';
import './styles.css';

const Contact = (props) => {
  useEffect(() => {
    document.title = "MyPortfolio || Contact"
  }, [])
  return(
    <section className="section single-page">
      <div className="section-title">
        <h1>Contact</h1>
        <div className="underline"></div>
      </div>
      <div className="section-center page-info">
        <p className='page-text'>
          If you are looking to get ahold of me, you can send me an email at
          <span> suryatejaamr@gmail.com</span>
        </p>
        <p className='page-text'>
          You can also reach me on Twitter at 
          <a href='https://www.linkedin.com/in/suryatejamalisetti/' target='_blank'> LinkedIn</a>
        </p>
      </div>
    </section>
  )
} 

export default Contact;