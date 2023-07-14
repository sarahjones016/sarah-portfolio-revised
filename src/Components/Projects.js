import React, {useState} from 'react'
import './Projects.css';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";

function Projects() {
  
    const [visible, setVisible] = useState(false)
    
    function toggleVisible() {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    function scrollToTop() {
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

  return (
    <div id='portfolio' className='portfolio'>
        <div className='portfolioContent'>
            <h1>PORTFOLIO</h1>
            {visible ? <div onClick={scrollToTop} className='upArrowDiv'>
                <IconContext.Provider className='upArrow' value={{ size: "25px"}}>
                    <BsFillArrowUpCircleFill/>
                </IconContext.Provider>
            </div> : null}
             
        </div>
    </div>
  )
}

export default Projects