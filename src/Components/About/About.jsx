import React from 'react'
import './About.css'
import theme from '../../assets/theme.jpg'
import profile_img from '../../assets/me.png'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" className="theme"/>
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" className="profile_img"/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p> I hold certifications in Web Development, Data Structures, Algorithms, and Data Science, reflecting my commitment to continuous learning.</p>
                <p>With achievements in competitive programming and leadership roles in cultural and school events, I bring a blend of technical expertise and organizational skills to every project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Python</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"55%"}}/></div>
                <div className="about-skill"><p>DBMS</p><hr style={{width:"55%"}}/></div>
                <div className="about-skill"><p>OS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"45%"}}/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
