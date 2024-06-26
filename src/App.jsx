import React from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Service/Services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
