import { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Connect from "./components/Connect/Connect";
import Skills from "./components/Skills/Skills";

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
      <NavBar showSidebar={showSidebar}/>
      <SideBar sidebar={sidebar} hideSidebar={hideSidebar}/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Connect/>
      <Skills/>
    </>
  );
}

export default App;
