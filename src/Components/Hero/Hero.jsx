import React from 'react'
import './Hero.css'
import dark from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world </h1>
        <p>Our cutting edge curriculem is designed to empower students 
            with the knowledge,skills,exprience neede to excel in the 
            dynamic field of education</p>
            <button className='btn'>Explore more <img src={dark} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
