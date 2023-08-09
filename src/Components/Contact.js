import React from 'react'
import './Contact.css';
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { IconContext } from "react-icons";

function Contact() {
  return (
    <div id='contact' className='contact'>
        <div className='contactContent'>
          <div className='container-holder'>
            <h1>CONTACT</h1>
              <div className='icon-holder'>
                <div className='icon'>
                  <IconContext.Provider className='contact' value={{ size: "35px"}}>
                  <a href="mailto:sarahrjones8@gmail.com">
                    <BiLogoGmail />
                  </a>
                  </IconContext.Provider>
                </div>
                <div className='icon'>
                  <IconContext.Provider className='contact' value={{ size: "35px"}}>
                  <a href="https://www.linkedin.com/in/srjones02/">
                    <BiLogoLinkedinSquare />
                  </a>
                  </IconContext.Provider>
                </div>
                <div className='icon'>
                  <IconContext.Provider className='contact' value={{ size: "35px"}}>
                  <a href="https://github.com/sarahjones016">
                    <BiLogoGithub />
                  </a>
                  </IconContext.Provider>
                </div>
                
              </div>  
          </div>
            
        </div>
    </div>
  )
}

export default Contact