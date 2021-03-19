import React from 'react'
import '../../App.css'
import './About.css'
import Home from './Home.js'


function About() {
  return (
    <>
      <div className="left-panel">
        <Home/>
      </div>
      <div className="right-panel">
        <div className="about">
          <h1>About me</h1>
          <p className="abt-body">
            I am a software developer from Santa Fe, NM in my third year studying computer
            science at Loyola Marymount University in Los Angeles, CA.

            <br/><br/>At LMU, I have continued to pursue my passion for programming
            that began when I was ten and lead to creating computer models of ecosystems
            and demonstrations of properties of physics in middle and high school.
            My programming interests have grown to include data science and AI.

            {/* <br/><br/>I believe software's greatest power is it's ability to give
            us a better understanding of our world. */}

            <br/><br/>When I'm not writing code, I love to listen
            to <a className="intext-link" href="https://open.spotify.com/user/1279758953?si=2he-hlfXROK33CZ-xjgbDA" target="_blank" rel="noreferrer">music</a> and
            audiobooks, play basketball, eat almond butter, and enjoy the outdoors.

            <br/><br/>Thanks for stopping by! :)
          </p>
        </div>
      </div>
    </>
  )
}

export default About;
