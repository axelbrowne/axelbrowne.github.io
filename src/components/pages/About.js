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
            I am a computer scientist from Santa Fe, NM. I graduated Magna Cum Laude with a B.S. in computer science from Loyola Marymount University in 2022.
            <br/><br/>
	    My passion for programming started when I was 10 with a Pac-Man like game that I programmed with my Grandpa via email. In middle school, I competed in state science fairs by programming agent-based models of genetic evolution and an ant colony that would scavenge for food. My passion for agent-based modeling continued, and eventually lead me to my first paper, \"Exploiting Causal Structure for Transportability in Online, Multi-Agent Systems\", which I authored alongside my favorite LMU professor, Dr. Andrew Forney. I continued doing research and computer modeling during my first job, back in my home state of New Mexico at Los Alamos National Labs (LANL). At LANL, I worked on a paper evaluating disease surveillance strategies on complex social (contact) networks.
            At LMU, I have continued to pursue my passion for programming
            that began with creating agent-based models of ecosystems.
            My programming interests have grown to include data science and AI.
            <br/><br/>
            When I\'m not writing code, I love to listen to <a className="intext-link" href="https://open.spotify.com/user/1279758953?si=2he-hlfXROK33CZ-xjgbDA" target="_blank" rel="noreferrer">
              music 
            </a> and audiobooks, play basketball or chess, enjoy the outdoors, and travel.
            <br/><br/>
            Thanks for stopping by! :)
          </p>
        </div>
      </div>
    </>
  )
}

export default About;
