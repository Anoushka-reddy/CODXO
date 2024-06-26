import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import underline from '../../assets/theme.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
{/*import menu_open from '../../assets/menu.svg'
import menu_close from '../../assets/menu_close.webp'*/}

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className='logos'/><p></p>
        {/*<img src={menu_open} className="menu"/>*/}
      <ul className="nav-menu">
      {/*<img src={menu_close} className="nav-mob-close"/>*/}
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} className="line" alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} className="line" alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Portfolio</p></AnchorLink>{menu==="services"?<img src={underline} className="line" alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} className="line" alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
