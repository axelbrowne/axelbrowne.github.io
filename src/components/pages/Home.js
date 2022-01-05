import React from 'react'
import '../../App.css'
import './Home.css'
import portrait from '../../images/portrait.jpg'

function Home() {
  return (
    <div className="home" on>
      <div className="intro-container">
        <div className="intro-image">
          <img src={portrait}/>
        </div>
      </div>
    </div>
  )
}

export default Home;
