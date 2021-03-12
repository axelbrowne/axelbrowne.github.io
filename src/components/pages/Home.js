import React from 'react'
import '../../App.css'
import './Home.css'
import portrait from '../../images/portrait.jpg'

function Home() {
  return (
    <div className="home">
      <div className="intro-container">
        <div className="intro-image">
          <img src={portrait}/>
        </div>
        <div className="intro-text">
          <p>
            Computer Science undergrad
            <br/>@ Loyola Marymount University
            {/* <br/>in Los Angeles, CA */}
          </p>
          <p>
            Passionate about creating software to improve our understanding of the world
          </p>
        </div>
      </div>
      <div className="projects-container">
      </div>
    </div>
  )
}

export default Home;
