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
          <h2>hi, i'm damián</h2>
          <p>Computer Science undergrad
            <br/>@ Loyola Marymount University</p>
          {/* <p>
            Computer Science undergrad
            <br/>@ Loyola Marymount University
          </p>
          <p>
            Passionate about creating software to improve our understanding of the world
          </p> */}
        </div>
      </div>
      <div className="projects-container">
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
