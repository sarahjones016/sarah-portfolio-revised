import React, {useState} from 'react'
import './Projects.css';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Carousel from './Carousel';

import sip from '../Assets/Sip.png'
import music from '../Assets/MusicGenreQuiz.png'
import parks from '../Assets/ParkSNYC.png'


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

    const portfolioData= [
      {title: "Sip", image: sip, description: "Water hydration app that allows users to track their daily water intake and work towards water consumption goals. Developed Javascript/React frontend and Flask/SQLAlchemy backend application. Communicated with Weather API to render real-time weather information based on zip code input: Environment is a factor that impacts water consumption. Authenticated users at login using Flask's session object and encrypted passwords with Bcrypt for added security.", github: "https://github.com/sarahjones016/phase-5-project-revised", video: "https://www.loom.com/share/e0117dc3c3e94eb695fb02813c4a522c?sid=865b3b26-cc9f-43e2-bf03-c09b64577314"},
      {title: "Music Genre Quiz", image: music, description:"Command-line application that provides users with a music genre suggestion based on inputs. Utilized SQLAlchemy and Alembic to store user, genre, and review information within a database. Leveraged Python fundamentals to query, filter, and update data from the database. Implemented Playsound (a pure Python, cross platform, single function module with no dependencies for playing sounds) in order to apply audio functionality when the user is provided with a music genre.", github: "https://github.com/sarahjones016/phase-3-project-cli-SJ-NB", video: "https://www.loom.com/share/eb77205331144da88f3edf336023755a?sid=84b4d5fd-2877-4df9-9b0e-6d7b6850fef0"},
      {title: "parkSNYC", image: parks, description:"Resource for finding and visiting NYC parks. Engineered frontend user interface using Javascript, React, and responsive design techniques. Communicated with a JSON server that housed in-depth park information about 25 New York City parks. Utilized React Router as the client-side routing method, in order to change what the user sees on the page based on the URL.", github: "https://github.com/sarahjones016/phase-2-final-project", video: "https://www.loom.com/share/5c99525d99c744d4ab61123b0ab44855?sid=15c9a2ff-a244-447f-8542-a79cb8faab1b"}
    ]

  const [current, setCurrent] = useState(0);
  const length = portfolioData.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <div id='portfolio' className='portfolio'>
        <div className='portfolioContent'>
            <h1>PORTFOLIO</h1>
            {visible ? <div onClick={scrollToTop} className='upArrowDiv'>
                <IconContext.Provider className='upArrow' value={{ size: "25px"}}>
                    <BsFillArrowUpCircleFill/>
                </IconContext.Provider>
            </div> : null}
            <div className='caro-container'>
              
              <div className='holder'>
                <div className='project-container'>
                    <div className='button-holder'>
                      <IconContext.Provider value={{ size: "25px"}}>
                        <BsFillArrowLeftCircleFill className="left-arrow" onClick={prevSlide}/>
                      </IconContext.Provider>
                    </div>
                    {portfolioData.map((data, index) => {
                      return (
                        <div key={index}>
                          {index === current && (
                            <Carousel data={data} />
                          )}
                        </div>
                      );
                    })}
                    <div className='button-holder'>
                      <IconContext.Provider value={{ size: "25px"}}>
                          <BsFillArrowRightCircleFill className="right-arrow" onClick={nextSlide}/>
                      </IconContext.Provider>
                    </div>
                    
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects