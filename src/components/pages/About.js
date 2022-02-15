import React from 'react'
import '../../App.css'
import './About.css'
import Home from './Home.js'


function About() {
  return (
    <div className='first'>
      <h1>about</h1>
      <div className="abt-panels">
          <div className="abt-l">
            <Home />
          </div>
          <div className="abt-r">
            <div className="about">
              <p className="abt-body">
                I am a software developer from Santa Fe, NM in my fourth year studying
                computer science at Loyola Marymount University
                in Los Angeles, CA.
                <br /><br />
                At LMU, I have continued to pursue my passion for programming
                that began with creating agent-based models of ecosystems.
                My programming interests have grown to include data science and AI.
                <br /><br />
                When I'm not writing code, I love to listen to <a className="intext-link" href="https://open.spotify.com/user/1279758953?si=2he-hlfXROK33CZ-xjgbDA" target="_blank" rel="noreferrer">
                  music
                </a> and audiobooks, play basketball, eat almond butter, and enjoy the outdoors.
                <br /><br />
                Thanks for stopping by! :)
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About;
