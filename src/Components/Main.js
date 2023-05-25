import './Main.css';
import React from 'react'
import lemon from '../Assets/lemon.mp4'
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";

function Main() {
  return (
    <div className='main'>
        <div className='overlay'></div>
        <video src={lemon} autoPlay loop muted />
        <div className='content'>
            <div className='textContent'>
              <h1 className='homepageName'>SARAH JONES</h1>
              <h3 className='homepageTitle'>Brooklyn Based Software Engineer</h3>
            </div>
            <div className='downArrow'>
              <IconContext.Provider value={{ size: "25px"}}>
                  <BsFillArrowDownCircleFill />
              </IconContext.Provider>
            </div>  
        </div>
        
    </div>
  )
}

export default Main