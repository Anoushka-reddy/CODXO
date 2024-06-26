import React from 'react'
import './Services.css'
import theme from '../../assets/theme.jpg'
import mywork_data from '../../assets/mywork_data'

const Services = () => {
  return (
    <div id='services' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme} alt="" className="theme"/>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" />
        })}
      </div>
    </div>
  )
}

export default Services
