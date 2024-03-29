import React, {useState} from 'react'
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";

function Navbar() {

    // const [initialNavButton, setInitialNavButton] = useState(true)
    const [navButton, setNavButton] = useState(false)
    const [showNavBar, setShowNavBar] = useState(false)

    function handleNavClick() {
        console.log("nav bar has been clicked")
        setShowNavBar(!showNavBar)
        setNavButton(!navButton)
    } 

    function closeNavBar() {
        setShowNavBar(false)
    }

    return (
        <div className='hamburgerMenuDiv'>
            {showNavBar ? <div className='navButtonTwo'>
                <IconContext.Provider className='hamburgerMenuTwo' value={{ size: "25px", color: "black"}}>
                    <RxHamburgerMenu onClick={handleNavClick}/>
                </IconContext.Provider>            
            </div> : <div className='navButton'>
                <IconContext.Provider className='hamburgerMenu' value={{ size: "25px"}}>
                    <RxHamburgerMenu onClick={handleNavClick}/>
                </IconContext.Provider>
            </div>}
            
            {showNavBar ? <div className='navBar'>
                <ul className='options'>
                    {/* <li>
                        <a onClick={closeNavBar} href='/#main'>Homepage</a>
                    </li> */}
                    <li>
                        <a onClick={closeNavBar} href="/#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a onClick={closeNavBar} href='/#work'>Work Experience</a>
                    </li>
                    <li>
                        <a onClick={closeNavBar} href='/#contact'>Contact</a>
                    </li>
                </ul>
            </div> : null}
            
        </div>
        
    )
}

export default Navbar