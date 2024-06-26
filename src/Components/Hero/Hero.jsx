import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="" className="portfolio"/>
      <h1><span>I'm Anoushka Reddy,</span>an engineering student based in Hyderabad.</h1>
      <p>I'm a motivated Computer Science student specializing in Artificial Intelligence and Data Science at Chaitanya Bharathi Institute of Technology. Proficient in languages like SQL, Python, Java, React, Express, MongoDB, Node.JS, HTML, CSS and JavaScript, I have a strong foundation in Data Structures and Algorithms, and Machine Learning.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
