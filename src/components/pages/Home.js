import React from 'react'
import '../../App.css'
import './Home.css'
import portrait from '../../images/portrait.jpg'

function Home() {
  return (
    <>
      <div className="main">
        <div className="intro-container">
          <div className="intro-image">
            <img src={portrait}/>
          </div>
          <div className="intro-text">
            <p>
              Computer Science undergrad
              <br/>@ Loyola Marymount University
            </p>
            <p>
              Passionate about creating software to improve our understanding of the world
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;