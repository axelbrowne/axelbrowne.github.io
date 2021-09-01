import React from 'react'
import '../../App.css'
import './Home.css'
import Footer from '../../components/Footer'
import portrait from '../../images/portrait.jpg'

function Home() {
  return (
    <div className="home">
      <div className="intro-container">
        <div className="intro-image">
          <img src={portrait}/>
        </div>
        <div className="intro-text">
          <h2>hi, i'm Axel</h2>
          <h5>CS undergrad @ LMU</h5>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
