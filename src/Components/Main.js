import './Main.css';
import React from 'react'
import lemon from '../Assets/lemon.mp4'
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import Navbar from './Navbar';
import Projects from './Projects';
import Work from './Work';
import Contact from './Contact';

function Main() {
  return (
    <div id='main' className='main'>
        <div className='overlay'></div>
        <video src={lemon} autoPlay loop muted />
        <div className='content'>
            <Navbar />
            <div className='textContent'>
              <h1 className='homepageName'>SARAH JONES</h1>
              <h3 className='homepageTitle'>Brooklyn Based Software Engineer</h3>
            </div>
            <div className='downArrowDiv'>
              <IconContext.Provider className='downArrow' value={{ size: "25px"}}>
                  <BsFillArrowDownCircleFill />
              </IconContext.Provider>
            </div>  
            <Projects />
            <Work />
            <Contact />
        </div>
        
    </div>
  )
}

export default Main