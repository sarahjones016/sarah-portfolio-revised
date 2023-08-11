import React from 'react'
import './Carousel.css';


function Carousel({data}) {
  return (
    <div>
        <h3>{data.title}</h3>
        <img src={data.image} className='portfolio-picture'></img>
        <p>{data.description}</p>
    </div>
  )
}

export default Carousel