import './Main.css';
import React from 'react'
import lemon from '../Assets/lemon.mp4'

function Main() {
  return (
    <div className='main'>
        <div className='overlay'></div>
        <video src={lemon} autoPlay loop muted />
        <div className='content'>
            <h1 className='homepageName'>SARAH JONES</h1>
            <h3 className='homepageTitle'>Brooklyn Based Software Engineer</h3>
        </div>
    </div>
  )
}

export default Main