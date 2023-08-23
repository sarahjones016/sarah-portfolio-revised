import React from 'react'
import './Carousel.css';
import { GoVideo } from "react-icons/go";
import { BiLogoGithub } from "react-icons/bi";
import { IconContext } from "react-icons";


function Carousel({data}) {
  return (
    <div className="carousel-holder">
        <h2>{data.title}</h2>
        <div className='pic-holder'>
          <img src={data.image} className='portfolio-picture'></img>
        </div>
        <p>{data.description}</p>
        <div className="portfolio-icon-holder">
          <div className='port-icon'>
            <IconContext.Provider value={{ size: "25px"}}>
              <a href={data.video}>
                <GoVideo/>
              </a>
            </IconContext.Provider>
          </div>
          <div className='port-icon'>
            <IconContext.Provider value={{ size: "25px"}}>
              <a href={data.github}>
                <BiLogoGithub/>
              </a>
            </IconContext.Provider>
          </div>
        </div>
    </div>
  )
}

export default Carousel