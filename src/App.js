import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { AboutSP } from './components/About/AboutSP';
import Services from "./components/Services/Services";
// import Projects from "./components/Projects/Projects";
import Connect from "./components/Connect/Connect";
// import Skills from "./components/Skills/Skills";
import Timeline from "./components/Timeline/Timeline";
// import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { ProjectsSP } from './components/Projects/ProjectsSP';

const Home = () => {
  return(
    <>
      <Hero/>
      <About/>
      <Services/>
      {/*<Projects/> */}
      <Connect/>
      {/* <Skills/> */}
      <Timeline/>
      {/* <Blogs/> */}
    </>
  )
}

function App() {
  const [sidebar, setSidebar] = useState('sidebar');
  const hideSidebar = (e) => {
    setSidebar('sidebar');
  }
  const showSidebar = (e) => {
    setSidebar('sidebar show-sidebar')
  }
  return (
    <>
      <Router>
      <NavBar showSidebar={showSidebar}/>
      <SideBar sidebar={sidebar} hideSidebar={hideSidebar}/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path="/about">
          <AboutSP/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/projects">
          <ProjectsSP/>
        </Route>
      </Switch>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
